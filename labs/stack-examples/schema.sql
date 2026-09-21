-- MySQL 8.4; run in a disposable learning database, never a production schema.
CREATE TABLE daily_demand (
  day DATE NOT NULL,
  site VARCHAR(32) NOT NULL,
  requests INT NOT NULL,
  fulfilled INT NOT NULL,
  PRIMARY KEY (day, site),
  CONSTRAINT valid_counts CHECK (requests > 0 AND fulfilled >= 0 AND fulfilled <= requests)
);
INSERT INTO daily_demand VALUES
('2026-01-01','A',100,90),('2026-01-02','A',120,108),
('2026-01-03','A',80,60),('2026-01-04','A',40,36),
('2026-01-01','B',20,20),('2026-01-02','B',200,140),
('2026-01-03','B',180,144),('2026-01-04','B',60,48);
SELECT SUM(requests) AS requests, SUM(fulfilled) AS fulfilled,
       ROUND(100.0 * SUM(fulfilled) / NULLIF(SUM(requests),0),2) AS fulfillment_pct
FROM daily_demand;
