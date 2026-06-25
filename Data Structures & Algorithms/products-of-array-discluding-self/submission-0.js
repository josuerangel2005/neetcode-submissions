class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    const resultado = new Array(nums.length - 1).fill(1);
    let acc = 1;

    for (let i = 1; i < nums.length; i++) {
      acc = acc * nums[i - 1];
      resultado[i] = acc;
    }

    acc = 1;

    for (let i = nums.length - 2; i >= 0; i--) {
      acc = acc * nums[i + 1];
      resultado[i] = resultado[i] * acc;
    }

    return resultado;
  }
}
