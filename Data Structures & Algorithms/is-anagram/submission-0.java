public class Solution {
  public static boolean isAnagram(String s, String t) {
    return Arrays.stream(s.split("")).sorted().collect(Collectors.joining(""))
        .equals(Arrays.stream(t.split("")).sorted().collect(Collectors.joining("")));
  }

  public static void main(String[] args) {
    String s = "racecar";
    String t = "carrace";

    System.out.println(isAnagram(s, t));
  }
}
