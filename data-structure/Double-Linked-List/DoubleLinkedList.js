class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  Add(data) {
    const node = new Node(data);
    //빈 리스트이면
    if (!this.head || !this.tail) {
      this.head = node;
      this.tail = node;
      return true;
    }
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    return true;
  }

  remove(data) {
    if (!this.head || !this.tail) return false;
    let n = this.head;
    while (n.next) {
      if (data == n.data) break;
      n = n.next;
    }
    if (!n.next) return false;
    n.next.prev = n.prev;
    if (n.prev) {
      n.prev.next = n.next;
    }
    return true;
  }
}

const list = new DoubleLinkedList();
list.Add(1);
list.Add(2);
list.Add(3);

// console.log(list.head.data);
// console.log(list.head.next.data);
// console.log(list.head.next.next.data);

list.remove(1);
console.log(list.head.data);
console.log(list.head.next.data);
// console.log(list.head.next.next.data);
