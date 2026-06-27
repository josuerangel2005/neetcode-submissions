class Solution {
  twoSum(numbers, target) {
    let i = 0;
    let j = numbers.length - 1;
    const resultado = [];

    while (i < j) {
      if (numbers[i] + numbers[j] < target) i++;
      else if (numbers[i] + numbers[j] > target) j--;
      else if (numbers[i] + numbers[j] === target) {
        resultado.push(i);
        resultado.push(j);
        break;
      } else {
        i++;
        j = numbers.length - 1;
      }
    }

    return resultado.map((el) => el + 1);
  }
}
