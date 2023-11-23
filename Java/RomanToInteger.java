import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class RomanToInteger {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        System.out.print("Enter the Roman Number:");
        String romanNumber = scn.next();
        scn.close();
        int result = romanToInt(romanNumber.toUpperCase());
        System.out.println("The Integer presentation of " + romanNumber + " is: " + result);
    }

    public static int romanToInt(String num) {
        Map<Character, Integer> romanNumerials = new HashMap<>();
        romanNumerials.put('I', 1);
        romanNumerials.put('V', 5);
        romanNumerials.put('X', 10);
        romanNumerials.put('L', 50);
        romanNumerials.put('C', 100);
        romanNumerials.put('D', 500);
        romanNumerials.put('M', 1000);

        int result = 0;
        for (int i = 0; i < num.length(); i++) {
            int currVal = romanNumerials.get(num.charAt(i));
            if (i < num.length() - 1 && currVal < romanNumerials.get(num.charAt(i + 1))) {
                result = result - currVal;
            } else {
                result = result + currVal;
            }
        }

        return result;
    }
}
