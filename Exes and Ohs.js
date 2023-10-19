const XO = str => {
  let xCount = 0, oCount = 0;
  for(let char of str) {
    switch(char.toLowerCase()) {
        case "x" : xCount += 1;
        break;
        case "o" : oCount += 1;
        break;
    } 
  }
  if(xCount === oCount) return true;
  else return false;
}
