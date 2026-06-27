class Solution {
  isPalindrome(str) {
    const newStr = str
      .replaceAll(" ", "")
      .replace(/[^a-zA-Z0-9]/g, "")
      .toLowerCase();

    let i = 0;
    let j = newStr.length - 1;

    while (i < j) {
      if (newStr[i] !== newStr[j]) return false;
      i++;
      j--;
    }

    return true;
  }
}
