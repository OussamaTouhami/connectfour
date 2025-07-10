let winning_comb = [];

// Horizontal wins
for (let row = 0; row < 6; row++) {
  for (let col = 0; col <= 3; col++) {
    winning_comb.push([
      { row, col },
      { row, col: col + 1 },
      { row, col: col + 2 },
      { row, col: col + 3 }
    ]);
  }
}

// Vertical wins
for (let row = 0; row <= 2; row++) {
  for (let col = 0; col < 7; col++) {
    winning_comb.push([
      { row, col },
      { row: row + 1, col },
      { row: row + 2, col },
      { row: row + 3, col }
    ]);
  }
}

// Diagonal down-right (↘)
for (let row = 0; row <= 2; row++) {
  for (let col = 0; col <= 3; col++) {
    winning_comb.push([
      { row, col },
      { row: row + 1, col: col + 1 },
      { row: row + 2, col: col + 2 },
      { row: row + 3, col: col + 3 }
    ]);
  }
}

// Diagonal up-right (↗)
for (let row = 3; row < 6; row++) {
  for (let col = 0; col <= 3; col++) {
    winning_comb.push([
      { row, col },
      { row: row - 1, col: col + 1 },
      { row: row - 2, col: col + 2 },
      { row: row - 3, col: col + 3 }
    ]);
  }
}

export { winning_comb };
