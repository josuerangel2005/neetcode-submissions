class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    return strs.map((palabra) => `${palabra.length}#${palabra}`).join("");
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let cantidadATomar = 0;
    let posGato = 0;
    const resultado = [];

    while (str) {
      posGato = str.indexOf("#");
      cantidadATomar = +str.slice(0, posGato);
      resultado.push(str.slice(posGato + 1, posGato + cantidadATomar + 1));
      str = str.slice(posGato + cantidadATomar + 1);
    }

    return resultado;
  }
}
