const linkedlist = {
  data: 0,
  next: {
    data: 1,
    next: {
      data: 2,
      next: null,
    },
  },
};

//값 가져오기
console.log(linkedlist.data);
console.log(linkedlist.next.data);
console.log(linkedlist.next.next.data);

//값 변경하기
linkedlist.next.data = 3;

//값 추가하기
linkedlist.next.next.next = { data: 4, next: null };

//값 삭제하기
linkedlist.next = linkedlist.next.next;
