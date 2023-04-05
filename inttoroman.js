var intToRoman = function (num) {
    const symbols = {
      1000: 'M',
      500: 'D',
      100: 'C',
      50: 'L',
      10: 'X',
      5: 'V',
      1: 'I',
    };
  
    let stringnum = num.toString();
  
    let result = '';
  
    for (let i = 0; i < stringnum.length; i++) {
      for (let j of Object.entries(symbols).reverse()) {
        let int = parseInt(stringnum[i] + '0'.repeat(stringnum.length - i - 1));
  
        if (int >= 5 && int < 10) {
          if (int === 9) {
            result += 'IX';
          } else {
            result += 'V' + 'I'.repeat(parseInt(stringnum[i]) - 5);
          }
          break;
        } else if (int < 5) {
          if (int === 4) {
            result += 'IV';
          } else {
            result += 'I'.repeat(parseInt(stringnum[i]));
          }
          break;
        } else if (int % parseInt(j[0]) === 0 && parseInt(j[0]) !== 1) {
          if (int === 900) {
            result += 'CM';
          } else if (int === 400) {
            result += 'CD';
          } else if (int === 40) {
            result += 'XL';
          } else if (int === 90) {
            result += 'XC';
          } else if (int > 50 && int < 100) {
            result += 'L' + 'X'.repeat(parseInt(stringnum[i][0]) - 5);
          } else if (int > 500 && int < 1000) {
            result += 'D' + 'C'.repeat(parseInt(stringnum[i][0]) - 5);
          } else if (int !== parseInt(j[0])) {
            result += j[1].toString().repeat(int.toString()[0]);
          } else {
            result += j[1];
          }
  
          break;
        }
      }
    }
    return result;
  };
  