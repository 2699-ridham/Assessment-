import java.util.*;

public class Shuffle {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        System.out.print("Enter the length of the array:");
        int len = scn.nextInt();

        int[] arr = new int[len];
        System.out.println("Enter the elements of array: ");
        for (int i = 0; i < len; i++) {
            arr[i] = scn.nextInt();
        }

        scn.close();
        shuffle(arr);
        System.out.println(Arrays.toString(arr));
    }

    public static void shuffle(int[] arr) {
        Random random = new Random();
        for (int i = 0; i < arr.length; i++) {
            int randomIndex = random.nextInt(arr.length);
            int temp = arr[randomIndex];
            arr[randomIndex] = arr[i];
            arr[i] = temp;
        }
    }

}