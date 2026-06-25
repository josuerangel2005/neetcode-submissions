class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const map = new Map();

    for (const palabra of strs) {
      const palabraOrdenada = palabra.split("").sort().join("");

      if (!map.has(palabraOrdenada)) map.set(palabraOrdenada, [palabra]);
      else {
        map.get(palabraOrdenada).push(palabra);
      }
    }
    return [...map.values()];
  }
}

