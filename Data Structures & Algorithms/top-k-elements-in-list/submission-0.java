public class Solution {
  public static int[] topKFrequent(int[] nums, int k) {
    HashMap<Integer, Integer> numerosApariciones = new HashMap<>();

    for (int num : nums) {
      if (!numerosApariciones.containsKey(num))
        numerosApariciones.put(num, 1);
      else
        numerosApariciones.put(num, 1 + numerosApariciones.get(num));
    }

    return numerosApariciones.entrySet().stream().sorted(Map.Entry.<Integer, Integer>comparingByValue().reversed())
        .map(entry -> entry.getKey())
        .limit(k).mapToInt(x -> x.intValue()).toArray();
  }

  public static void main(String[] args) {
    int[] nums = { 4, 4, -1, 10, 4, -1, 20, 10, 10, 4, 99 };

    Arrays.stream(topKFrequent(nums, 3)).forEach(x -> System.out.println(x));
  }
}

