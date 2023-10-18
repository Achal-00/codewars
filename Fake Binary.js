const fakeBin = x => {
  let newBin = "";
  for(let char of x) parseInt(char) < 5 ? newBin += "0" : newBin += "1";
  return newBin;
}
