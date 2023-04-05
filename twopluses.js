function twoPluses(grid) {
    const checkArrays = (a, b) => {
      let count = 0;
      for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
          if (a[i].toString() === b[j].toString()) {
            count++;
          }
        }
      }
  
      if (count === 0) {
        return true;
      } else {
        return false;
      }
    };
  
    let gridarea = [];
    for (let i = 1; i < grid.length - 1; i++) {
      for (let j = 1; j < grid[i].length - 1; j++) {
          if (
              grid[i][j] === 'G' &&
              grid[i][j - 1] === 'B' &&
              grid[i][j + 1] === 'B' &&
              grid[i + 1][j] === 'B' &&
              grid[i - 1][j] === 'B'
            ){
                gridarea.push([i,j])
            }
          if (
          grid[i][j] === 'G' &&
          grid[i][j - 1] === 'G' &&
          grid[i][j + 1] === 'G' &&
          grid[i + 1][j] === 'G' &&
          grid[i - 1][j] === 'G'
        ) {
          if (i > 2 && j > 2 && i < grid.length - 2 && j < grid[i].length - 2) {
            if (
              grid[i][j - 2] === 'G' &&
              grid[i][j + 2] === 'G' &&
              grid[i + 2][j] === 'G' &&
              grid[i - 2][j] === 'G'
            ) {
              gridarea.push([
                [i, j],
                [i, j - 1],
                [i, j + 1],
                [i + 1, j],
                [i - 1, j],
                [i, j - 2],
                [i, j + 2],
                [i + 2, j],
                [i - 2, j],
              ]);
            }
          } else {
            gridarea.push([
              [i, j],
              [i, j - 1],
              [i, j + 1],
              [i + 1, j],
              [i - 1, j],
            ]);
          }
        }
      }
    }
    let num = 0;
    for (let i = 0; i < gridarea.length; i++) {
      for (let j = i + 1; j < gridarea.length; j++) {
        if (checkArrays(gridarea[i], gridarea[j]) === false) {
          num++;
        }
      }
    }
  
    return 5 ** (gridarea.length - num);
  }
  