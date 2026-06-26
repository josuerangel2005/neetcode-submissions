class Solution {
  filterNums(list) {
    return list.filter((x) => x !== ".").map((x) => +x);
  }

  inRange(list) {
    return list.every((x) => x >= 1 && x <= 9);
  }

  hasDuplicate(list) {
    const set = new Set();

    for (const num of list) {
      if (set.has(num)) return true;
      else set.add(num);
    }

    return false;
  }

  validateRow(row) {
    return this.inRange(row) && !this.hasDuplicate(row);
  }

  validateRows(game) {
    return game
      .map((row) => this.filterNums(row))
      .every((row) => this.validateRow(row));
  }

  getColumns(game) {
    const filaElementos = new Map();

    for (let i = 0; i < game.length; i++) {
      for (let j = 0; j < game[i].length; j++) {
        if (!filaElementos.has(j)) filaElementos.set(j, [game[i][j]]);
        else {
          filaElementos.get(j).push(game[i][j]);
        }
      }
    }
    return [...filaElementos.values()];
  }

  validateColumn(column) {
    return this.inRange(column) && !this.hasDuplicate(column);
  }

  validateColumns(game) {
    return this.getColumns(game)
      .map((column) => this.filterNums(column))
      .every((column) => this.validateColumn(column));
  }

  getSubBoxes(game) {
    const subBoxes = new Map();

    for (let i = 0; i < game.length; i++) {
      for (let j = 0; j < game[i].length; j++) {
        let boxRow = Math.floor(i / 3);
        let boxColumn = Math.floor(j / 3);

        if (!subBoxes.has(`${boxRow},${boxColumn}`))
          subBoxes.set(`${boxRow},${boxColumn}`, [game[i][j]]);
        else subBoxes.get(`${boxRow},${boxColumn}`).push(game[i][j]);
      }
    }

    return [...subBoxes.values()];
  }

  validateSubBox(suBox) {
    return this.inRange(suBox) && !this.hasDuplicate(suBox);
  }

  validateSubBoxes(game) {
    return this.getSubBoxes(game)
      .map((subBox) => this.filterNums(subBox))
      .every((subBox) => this.validateSubBox(subBox));
  }

  isValidSudoku(game) {
    return (
      this.validateRows(game) &&
      this.validateColumns(game) &&
      this.validateSubBoxes(game)
    );
  }
}

