/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let output;
  let p1 = l1;
  let p2 = l2;
  let p3;
  let carry = 0;
  let sum = 0;

  while (p1 || p2) {
      let num1 = p1 ? p1.val : 0;
      let num2 = p2 ? p2.val : 0;
      sum = carry + num1 + num2;
      carry = ~~(sum/10);
      sum = sum % 10;
      p1 = p1 && p1.next;
      p2 = p2 && p2.next;

      if (!output) {
          output = new ListNode(sum);
          p3 = output;
      } else {
          p3.next = new ListNode(sum);
          p3 = p3.next;
      }
  }

  if (carry) {
      p3.next = new ListNode(carry);
  }

  return output;
};
