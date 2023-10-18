const sumArray = array => {
  let sum = 0;
  if(!array) return sum;
  array.sort((a,b) => a - b).map((value, index) => {
    if(index !== 0 && index !== (array.length - 1)) sum += value;
  })
  return sum;
}
