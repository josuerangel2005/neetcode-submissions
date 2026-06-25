class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const lista = new Map();
    let diferencia = 0;
    const resultado = [];

    for (let i = 0; i < nums.length; i++) {
      diferencia = target - nums[i];

      if (!lista.has(diferencia)) lista.set(nums[i], i);
      else {
        resultado.push(lista.get(diferencia));
        resultado.push(i);
        break;
      }
    }
    return resultado;
  }
}
