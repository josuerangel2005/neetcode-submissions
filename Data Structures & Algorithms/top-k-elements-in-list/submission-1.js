class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const elementoCantidad = new Map();

    for (const num of nums) {
      if (!elementoCantidad.has(num)) elementoCantidad.set(num, 1);
      else elementoCantidad.set(num, 1 + elementoCantidad.get(num));
    }

    return [...elementoCantidad.entries()]
      .sort((a, b) => b[1] - a[1])
      .map((e) => e[0])
      .slice(0, k);
  }
}
