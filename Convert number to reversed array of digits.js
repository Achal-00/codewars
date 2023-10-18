const digitize = (n) => {
  const rev = [];
  while(n >= 0) {
    rev.push(n % 10);
    n = parseInt(n/10);
    if(n === 0) break;
  }
  return rev;
}
