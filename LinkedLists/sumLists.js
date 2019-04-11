const sumLists = (list1, list2) => {
  // list1 and list2 may not be the same length
  let currList1 = list1.head.next;
  let currList2 = list2.head.next;
  const startSum = list1.head.data + list2.head.data;
  let digit = startSum % 10;
  let carryOver = startSum > 10 ? 1 : 0;
  let sumList = new LinkedList(digit);

  
  while (currList1 || currList2) {
    let sum = carryOver + currList1.data + currList2.data;
    digit = sum % 10;
    sumList.addToTail(digit);
    
    carryOver = sum >= 10 ? 1 : 0; 
    currList1 = currList1.data ? currList1.next : currList1;
    currList2 = currList2.data ? currList2.next : currList2;
  }

  return sumList.head;
};
