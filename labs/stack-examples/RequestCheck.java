public class RequestCheck {
    static double fulfillment(int requests, int fulfilled) {
        if (requests <= 0 || fulfilled < 0 || fulfilled > requests)
            throw new IllegalArgumentException("Invalid request counts");
        return 100.0 * fulfilled / requests;
    }
    public static void main(String[] args) {
        if (Math.abs(fulfillment(800, 646) - 80.75) > 1e-9) throw new AssertionError("Wrong total");
        boolean rejected = false;
        try { fulfillment(10, 11); } catch (IllegalArgumentException expected) { rejected = true; }
        if (!rejected) throw new AssertionError("Invalid input accepted");
        System.out.printf("Fulfillment: %.2f%%%n", fulfillment(800, 646));
    }
}
