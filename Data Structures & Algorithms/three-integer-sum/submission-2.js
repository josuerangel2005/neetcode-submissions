class Solution {
  threeSum(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    const miSet = new Set();

    for (let i = 0; i < nums.length; i++) {
      let j = i + 1;
      let k = nums.length - 1;

      while (k > j) {
        if (nums[i] + nums[j] + nums[k] < 0) j++;
        else if (nums[i] + nums[j] + nums[k] > 0) k--;
        else {
          const resulString = `${nums[i]}${nums[j]}${nums[k]}`;

          if (!miSet.has(resulString)) {
            const resultadoParcial = [];

            resultadoParcial.push(nums[i]);
            resultadoParcial.push(nums[j]);
            resultadoParcial.push(nums[k]);

            result.push(resultadoParcial);
            miSet.add(resulString);
          }

          j++;
          k--;
        }
      }
    }

    return result;
  }
}
