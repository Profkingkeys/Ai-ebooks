fn fulfillment(requests: u32, fulfilled: u32) -> Result<f64, &'static str> {
    if requests == 0 || fulfilled > requests { return Err("Invalid request counts"); }
    Ok(100.0 * f64::from(fulfilled) / f64::from(requests))
}
fn main() { println!("Fulfillment: {:.2}%", fulfillment(800, 646).unwrap()); }
#[cfg(test)]
mod tests {
    use super::*;
    #[test] fn rejects_impossible_counts() { assert!(fulfillment(10, 11).is_err()); assert!(fulfillment(0, 0).is_err()); }
    #[test] fn reconciles_known_fixture() { assert!((fulfillment(800, 646).unwrap() - 80.75).abs() < 1e-9); }
}
