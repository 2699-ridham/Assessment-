import java.util.Scanner;

public class CheckPangram {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        System.err.print("Enter the Sentance:");
        String s = scn.nextLine();
        scn.close();
        System.out.println(isPangram(s));
    }

    public static String isPangram(String str) {
        String s = "abcdefghijklmnopqrstuvwxyz";
        int count = 0;
        str = str.toLowerCase();
        for (int i = 0; i < s.length(); i++) {
            if(str.indexOf(s.charAt(i)) >= 0){
                count++;
            }else{
                break;
            }
        }

        if(count == 26){
            return "Pangram";
        }else{
            return "Not Pangram";
        }

    }
}
