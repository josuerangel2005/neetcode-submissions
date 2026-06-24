public class Solution {
  public static int[] twoSum(int[] nums, int target) {
    HashMap<Integer, Integer> lista = new HashMap<>();
    int diferencia = 0;
    int[] resultados = new int[2];

    for (int i = 0; i < nums.length; i++) {
      diferencia = target - nums[i];

      if (!lista.containsKey(diferencia))
        lista.put(nums[i], i);
      else {
        resultados[0] = lista.get(diferencia);
        resultados[1] = i;
        break;
      }
    }
    return resultados;
  }

  public static void main(String[] args) {
    int[] nums = { 2, 7, 11, 15, 20, 30, 40 };
    Arrays.stream(twoSum(nums, 37)).forEach(x -> System.out.println(x));
  }
}
