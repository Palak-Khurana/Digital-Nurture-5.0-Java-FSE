import org.junit.Assert;
import org.junit.Test;

public class CalculatorTest {

    @Test
    public void testAdd() {

        Calculator calculator = new Calculator();

        int result = calculator.add(10, 20);

        Assert.assertEquals(30, result);
    }
}