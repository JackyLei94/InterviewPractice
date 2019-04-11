const safetyCheck = function(node) {
  return node ? node.data : 0;
}

const sumLists = (list1, list2) => {
  const initialSum = list1.head.data + list2.head.data;
  let carryOver = initialSum >= 10 ? 1 : 0;
  let sumList = new LinkedList(initialSum % 10);
  let currNode1 = list1.head ? list1.head.next : null;
  let currNode2 = list2.head ? list2.head.next : null;

  while (currNode1 || currNode2) {
    let sum = carryOver + safetyCheck(currNode1) + safetyCheck(currNode2);
    sumList.addToTail(sum % 10);
    carryOver = sum >= 10 ? 1 : 0;
    currNode1 = currNode1 ? currNode1.next: null;
    currNode2 = currNode2 ? currNode2.next : null;
  }

  if (carryOver) sumList.addToTail(carryOver);

  return sumList.head;
};