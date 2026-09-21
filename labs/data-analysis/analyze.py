"""Offline, synthetic supply-demand analysis. No model or patient data required."""
import csv
import json
from datetime import date
from pathlib import Path
from collections import defaultdict


def analyze(path):
    valid, rejected, duplicates, seen = [], [], [], {}
    with open(path, newline='', encoding='utf-8') as handle:
        reader = csv.DictReader(handle)
        if reader.fieldnames != ['date', 'site', 'requests', 'fulfilled']:
            raise ValueError('Unexpected CSV schema')
        for line, row in enumerate(reader, start=2):
            try:
                date.fromisoformat(row['date'])
                site = row['site'].strip()
                if site not in {'A', 'B'}:
                    raise ValueError('Unknown site')
                requested, fulfilled = int(row['requests']), int(row['fulfilled'])
                if requested <= 0 or not 0 <= fulfilled <= requested:
                    raise ValueError('Expected 0 <= fulfilled <= requests and requests > 0')
            except (ValueError, TypeError) as exc:
                rejected.append({'line': line, 'reason': str(exc), 'raw': row})
                continue
            item = {'date': row['date'], 'site': site, 'requests': requested, 'fulfilled': fulfilled}
            key = (item['date'], site)
            if key in seen:
                if seen[key] != item:
                    raise ValueError(f'Conflicting daily record at line {line}; reconcile upstream')
                duplicates.append(line)
                continue
            seen[key] = item
            valid.append(item)
    totals = defaultdict(lambda: {'requests': 0, 'fulfilled': 0})
    for item in valid:
        for key in [item['site'], 'ALL']:
            totals[key]['requests'] += item['requests']
            totals[key]['fulfilled'] += item['fulfilled']
    for item in totals.values():
        item['fulfillment_pct'] = round(100 * item['fulfilled'] / item['requests'], 2)
    return {'synthetic': True, 'valid_rows': len(valid), 'duplicate_lines': duplicates,
            'rejected': rejected, 'totals': dict(totals),
            'interpretation_limit': 'Descriptive toy data; no causal or clinical conclusions.'}, valid


if __name__ == '__main__':
    here = Path(__file__).resolve().parent
    report, rows = analyze(here / 'demand.csv')
    output = here / 'output'
    output.mkdir(exist_ok=True)
    (output / 'report.json').write_text(json.dumps(report, indent=2), encoding='utf-8')
    with (output / 'clean.csv').open('w', newline='', encoding='utf-8') as handle:
        writer = csv.DictWriter(handle, fieldnames=['date', 'site', 'requests', 'fulfilled'])
        writer.writeheader()
        writer.writerows(rows)
    print(json.dumps(report['totals'], indent=2))
    print(f"Kept {report['valid_rows']} rows; removed {len(report['duplicate_lines'])} exact duplicate; quarantined {len(report['rejected'])} invalid rows.")
