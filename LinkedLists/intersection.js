const intersection = (list1, list2) => {
  // Get length and tail of both lists
  // If either length === 0 or the tails aren't the same
  // There cannot be an intersection
  const length1 = 0;
  const length2 = 0;
  let tail1;
  let tail2;
  let curr1 = list1.head;
  let curr2 = list2.head;

  while (curr1.next) {
    length1++;
    curr1 = curr1.next;
    if (curr1.next === null) {
      tail1 = curr1;
    }
  }

  while (curr2.next) {
    length2++;
    curr2 = curr2.next;
    if (curr2.next === null) {
      tail2 = curr2;
    }
  }

  if (!length1 || !length2 || tail1 !== tail2) {
    return;
  }
}