import unittest
import tempfile
from pathlib import Path
from analyze import analyze

class AnalysisTest(unittest.TestCase):
    def test_known_reconciliation(self):
        report, rows = analyze(Path(__file__).with_name('demand.csv'))
        self.assertEqual(len(rows), 8)
        self.assertEqual(len(report['rejected']), 2)
        self.assertEqual(len(report['duplicate_lines']), 1)
        self.assertEqual(report['totals']['ALL'], {'requests': 800, 'fulfilled': 646, 'fulfillment_pct': 80.75})
        self.assertEqual(report['totals']['A']['fulfillment_pct'], 86.47)
        self.assertEqual(report['totals']['B']['fulfillment_pct'], 76.52)
    def test_conflicting_duplicates_stop_analysis(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / 'bad.csv'
            path.write_text('date,site,requests,fulfilled\n2026-01-01,A,10,8\n2026-01-01,A,10,9\n')
            with self.assertRaisesRegex(ValueError, 'Conflicting'):
                analyze(path)
    def test_schema_drift_is_not_silently_accepted(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / 'bad.csv'
            path.write_text('site,quantity\nA,1\n')
            with self.assertRaisesRegex(ValueError, 'schema'):
                analyze(path)

if __name__ == '__main__':
    unittest.main()
