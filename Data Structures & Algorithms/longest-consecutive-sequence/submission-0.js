class Solution {
  countLengthSec(num, nums) {
    let i = 1;

    while (nums.has(num + 1)) {
      num = num + 1;
      i++;
    }

    return i;
  }

  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    const set = new Set(nums);
    let resultado = 0;

    for (const num of nums) {
      if (!set.has(num - 1)) {
        const rachaActual = this.countLengthSec(num, set);
        if (rachaActual > resultado) resultado = rachaActual;
      }
    }

    return resultado;
  }
}