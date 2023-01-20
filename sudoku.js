var isValidSudoku = function(board) {
    for (let i = 0; i < 9; i++) {
      let row = new Set(),
          col = new Set(),
          box = new Set();
  
      for (let j = 0; j < 9; j++) {
        let value = board[i][j];
        let value2 = board[j][i];
        let value3 = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)]
        if (value != '.') {
          if (row.has(value)) return false;
          row.add(value);
        }
        if (value2 != '.') {
          if (col.has(value2)) return false;
          col.add(value2);
        }
        
        if (value3 != '.') {
          if (box.has(value3)) return false;
          box.add(value3);
        } 
      }
    }
    return true
  };
  console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]))