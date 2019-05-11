var isHappy = function(n) {
  let seen = {};
  let str = n.toString();
  let num;
  while (!seen[str]) {
    seen[str] = true;
    num = 0;
    for (let i = 0; i < str.length; i++) {
      num += str[i] * str[i];
    }
    if (num === 1) {
      return true;
    }  
    str = num.toString();
  }
  return false;
};