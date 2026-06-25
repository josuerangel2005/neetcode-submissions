class Solution {
  hasDuplicate(nums) {
    const numeros = new Set();

    for (const num of nums) {
      if (numeros.has(num)) return true;
      numeros.add(num);
    }

    return false;
  }
}


