module.exports = function check(str, bracketsConfig) {
  const OPEN_BRACKETS = [];
  const CLOSE_BRACKETS = [];
  const BRACKETS_PAIR = {};
  const stack = [];
  for (i=0; i<bracketsConfig.length; i++) {
    OPEN_BRACKETS.push(bracketsConfig[i][0])
  }
  for (i=0; i<bracketsConfig.length; i++) {
    CLOSE_BRACKETS.push(bracketsConfig[i][1])
  }
  for (i=0; i<bracketsConfig.length; i++) {
    let key = bracketsConfig[i][1];
    BRACKETS_PAIR[key] = bracketsConfig[i][0];
  }
  for (i=0; i<str.length; i++) {
    let currentSymbol = str[i];
    let topElement = stack[stack.length - 1];
    if (OPEN_BRACKETS.includes(currentSymbol)) {
      if (CLOSE_BRACKETS.includes(currentSymbol) && topElement === currentSymbol) {
        stack.pop();
      } else {stack.push(currentSymbol);}
    } else {
      if (stack.length === 0) {return false;}
      if (BRACKETS_PAIR[currentSymbol] === topElement) {stack.pop()}
      else {return false;}
           }
  }
  return stack.length === 0;
}
