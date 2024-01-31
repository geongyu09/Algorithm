//노드
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

//연결리스트
class LinkedList {
  //head, tail, current 및 필요한 값들을 정리해줄 수 있다.
  constructor() {
    this.head = null; //head는 레퍼런스로, 가장 처음의 노드를 가리킨다.
    this.tail = null;
    this.current = null;
    this.length = 0;
  }
  append(data) {
    let node = new Node(data);
    //처음이라면
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length = 1;
      return;
    }
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }
  prepend(data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length = 1;
      return;
    }
    node.next = this.head;
    this.head = node;
    this.length++;
  }
}

const linkedlist = new LinkedList();
linkedlist.append(1);
//데이터를 부를 때는 이처럼
console.log(linkedlist.head.data);
console.log(linkedlist.tail.data);
linkedlist.append(2);
linkedlist.append(3);
console.log(linkedlist.head.next.data);
console.log(linkedlist.head.next.next.data);
linkedlist.prepend(0);
console.log(linkedlist.head.data);
