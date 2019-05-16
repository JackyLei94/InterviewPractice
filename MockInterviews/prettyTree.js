/* 
Pretty Tree (and inverse version): 
Write a function that takes an integer 
and returns a string that, when printed, 
displays a symmetric tree with a number 
of rows equal to the integer argument.
For example: n = 3:
   X
  XXX
 XXXXX
*/

const prettyTree = n => {
  // every new row adds 2 chars to the previous row;
  let output = '';
  for (let i = 1; i <= n; i++) {
    output += ' '.repeat(n-i) + 'x'.repeat(1 + 2 * (i - 1)) + ' '.repeat(n-i) + '\n';
  }
  return output;
}