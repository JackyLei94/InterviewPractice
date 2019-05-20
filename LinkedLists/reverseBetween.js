const reverseBetween = (head, m, n) => {
  if (head === null || m > n) {
    return head;
  }
  const dummy = {next: head};
  let prev = dummy;
  for (let i = 0; i < m - 1; i++) {
    prev = prev.next; 
  }
  
  let start = prev.next;
  let then = start.next;
  
  for (let i = 0; i < n - m; i++) {
    start.next = then.next;
    then.next = prev.next;
    prev.next = then;
    then = start.next;
  }
  
  return dummy.next;
};