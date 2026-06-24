public class Solution {

  public static boolean hasDuplicate(int[] nums) {

    HashMap<Integer, Integer> elementoCantidad = new HashMap<>();

    for (int i = 0; i < nums.length; i++) {
      if (!elementoCantidad.containsKey(nums[i]))
        elementoCantidad.put(nums[i], 1);
      else
        elementoCantidad.put(nums[i], 1 + elementoCantidad.get(nums[i]));
    }

    return elementoCantidad.values().stream().anyMatch(x -> x > 1);

  }

  public static void main(String[] args) {
    int[] numeros = { 1, 2, 3, 4 };
    System.out.println(hasDuplicate(numeros));
  }
}
