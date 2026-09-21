import {readFile,readdir,access} from 'node:fs/promises';import {posix} from 'node:path';
const catalog=JSON.parse(await readFile('catalog.json','utf8'));
const files=(await readdir('chapters')).filter(f=>f.endsWith('.md')).sort();const failures=[];
if(catalog.length!==32||files.length!==catalog.length)failures.push('Catalog must describe all 32 guides.');
let words=0;const book=await readFile('BOOK.md','utf8');
for(let i=0;i<catalog.length;i++){const c=catalog[i],path='chapters/'+c.file,s=await readFile(path,'utf8');words+=s.split(/\s+/).length;
 if(c.number!==i+1||!c.file.startsWith(String(i+1).padStart(2,'0')))failures.push(path+': wrong order');
 if(!s.startsWith('# '+String(i+1).padStart(2,'0')))failures.push(path+': numbered heading missing');
 if(s.split(/\s+/).length<450)failures.push(path+': guide needs a substantive exercise');
 if(!book.includes(path))failures.push(path+': missing from contents');
 if(!/## .*?(?:project|experiment|practical|capstone|lab|Setup|setup|Build|build)/i.test(s))failures.push(path+': practical section missing');
 for(const url of ['https://github.com/Profkingkeys','https://x.com/Profkingkeys','https://www.linkedin.com/in/prof-king-keys-110a24229'])if(!s.includes(url))failures.push(path+': follow link missing');
 if(s.includes('<pre>')||s.includes('```mermaid'))failures.push(path+': replace unrendered diagram');
 for(const match of s.matchAll(/\]\(([^\s)]+)\)/g)){const href=match[1];if(/^(https?:|mailto:|#)/.test(href))continue;const resolved=posix.normalize(posix.join('chapters',href.split('#')[0]));try{await access(resolved)}catch{failures.push(path+': broken local link '+href)}}
}
for(const file of ['README.md','BOOK.md','REFERENCES.md','MANUSCRIPT_STATUS.md','LABS.md','index.html','assets/book.css'])try{await access(file)}catch{failures.push('Missing '+file)}
if(failures.length){console.error(failures.join('\n'));process.exit(1)}console.log(`PASS: ${catalog.length} guides, ${words} words, catalog and local links. Subject-matter review remains separate.`);
