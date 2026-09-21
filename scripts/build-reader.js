import {readFile,writeFile,mkdir,copyFile} from 'node:fs/promises';
import {posix} from 'node:path';
import {marked} from 'marked';
const catalog=JSON.parse(await readFile('catalog.json','utf8'));
const css=await readFile('assets/book.css','utf8');
const template=await readFile('index.html','utf8');
const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const records=[];
await mkdir('dist/books',{recursive:true});
function rewrite(html,chapter,standalone=false){return html.replace(/href="([^"]+)"/g,(all,href)=>{
 if(/^(https?:|mailto:|#)/.test(href))return all;
 const target=posix.normalize(posix.join('chapters',href.split('#')[0]));
 const found=catalog.find(c=>'chapters/'+c.file===target);
 if(found&&!standalone)return `href="#book-${String(found.number).padStart(2,'0')}"`;
 return `href="https://github.com/Profkingkeys/Ai-ebooks/blob/main/${target}"`;
});}
for(const c of catalog){const source=await readFile('chapters/'+c.file,'utf8'),id='book-'+String(c.number).padStart(2,'0');
 const html=marked.parse(source),meta=`<p class="meta">${escape(c.group)} · ${Math.ceil(c.words/220)} min read · Educational field guide</p>`;
 const article=`<article id="${id}" class="article" tabindex="-1">${meta}${rewrite(html,c)}</article>`;
 const standalone=`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escape(c.title)} · Kingsley Umoh</title><style>${css}</style></head><body class="standalone"><article class="article">${meta}${rewrite(html,c,true)}</article></body></html>`;
 const filename=c.file.replace(/\.md$/,'.html');await writeFile('dist/books/'+filename,standalone);
 records.push({...c,id,article,standalone,filename,search:source.toLowerCase()});
}
const data=JSON.stringify(records.map(({article,...r})=>r)).replaceAll('<','\\u003c');
const script=`const books=${data};
const $=id=>document.getElementById(id);let current=0,fontSize=18;
document.body.classList.add('enhanced');
function show(){const index=books.findIndex(b=>'#'+b.id===location.hash);current=index<0?0:index;for(const b of books){$(b.id).classList.toggle('active',b===books[current]);const a=document.querySelector('[data-guide="'+b.id+'"]');a.setAttribute('aria-current',String(b===books[current]));}document.title=books[current].title+' · Practical AI Library';$('previous').disabled=current===0;$('next').disabled=current===books.length-1;try{localStorage.setItem('ai-library-last',books[current].id)}catch{} }
function navigate(index){location.hash=books[Math.max(0,Math.min(books.length-1,index))].id;$('reading').scrollIntoView({behavior:'auto'});}
addEventListener('hashchange',()=>{show();$('reading').scrollIntoView({behavior:'auto'})});
$('previous').onclick=()=>navigate(current-1);$('next').onclick=()=>navigate(current+1);
function filter(){const words=$('search').value.toLowerCase().trim().split(/\\s+/).filter(Boolean),topic=$('topic').value;let count=0;for(const b of books){const found=(!topic||b.group===topic)&&words.every(w=>b.search.includes(w));document.querySelector('[data-guide="'+b.id+'"]').parentElement.hidden=!found;if(found)count++}$('count').textContent=count+' matching guide'+(count===1?'':'s')+(count?'':' — try a broader search');}
$('search').addEventListener('input',filter);$('topic').addEventListener('change',filter);
function theme(dark){document.body.classList.toggle('dark',dark);$('theme').textContent=dark?'Light theme':'Dark theme';$('theme').setAttribute('aria-pressed',String(dark));try{localStorage.setItem('ai-library-dark',String(dark))}catch{}}
$('theme').onclick=()=>theme(!document.body.classList.contains('dark'));try{theme(localStorage.getItem('ai-library-dark')==='true')}catch{}
$('type').onclick=()=>{fontSize=fontSize>=22?18:fontSize+2;document.body.style.setProperty('--size',fontSize+'px');$('type').textContent='Text '+fontSize+'px'};
$('print').onclick=()=>window.print();
$('download').onclick=()=>{const b=books[current],a=document.createElement('a');a.href=URL.createObjectURL(new Blob([b.standalone],{type:'text/html'}));a.download=b.filename;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),1000)};
if(!location.hash){try{const saved=localStorage.getItem('ai-library-last');if(books.some(b=>b.id===saved))location.hash=saved}catch{}}show();`;
const nav=records.map(r=>`<li><a href="#${r.id}" data-guide="${r.id}">${String(r.number).padStart(2,'0')} · ${escape(r.title)}<small>${escape(r.group)}</small></a></li>`).join('');
const topics=[...new Set(records.map(r=>r.group))].map(g=>`<option value="${escape(g)}">${escape(g)}</option>`).join('');
const html=template.replace('<!--STYLE-->',()=>`<style>${css}</style>`).replace('<!--TOPICS-->',()=>topics).replace('<!--NAV-->',()=>nav).replace('<!--ARTICLES-->',()=>records.map(r=>r.article).join('')).replace('<!--SCRIPT-->',()=>`<script>${script.replace(/<\/script/gi,'<\\/script')}</script>`);
await writeFile('dist/index.html',html);await writeFile('dist/AI-Library.html',html);await writeFile('dist/.nojekyll','');await copyFile('LICENSE.md','dist/LICENSE.md');await copyFile('node_modules/marked/LICENSE','dist/MARKED-LICENSE.md');
console.log(`Built ${records.length} standalone ebooks and the offline reader (${Math.round(Buffer.byteLength(html)/1024)} KiB).`);
