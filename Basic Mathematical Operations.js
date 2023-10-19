const basicOp = (operation, value1, value2) => {
  switch(operation) {
      case '+': return (parseInt(value1) + parseInt(value2));
      break;
      case '-': return (parseInt(value1) - parseInt(value2));
      break;
      case '*': return (parseInt(value1) * parseInt(value2));
      break;
      case '/': return (parseInt(value1) / parseInt(value2));
      break;
  }
}
