const changePalindrome = (string, n) => {
  return checkPalindrome(string, n);
}

const checkPalindrome = (string, count) => {
  if (string.length === 0 || string.length === 1) {
    return count >= 0;
  }
  if (string[0] === string[string.length - 1]) {
    return checkPalindrome(string.slice(1, string.length - 1), count);
  }
  return checkPalindrome(string.slice(1, string.length - 1), count - 1);
}