# Linked-list

> 연결 리스트
> 데이터 요소의 선형 집합. 각각의 원소들읜 자시 자신 다음의 원소를 가지킨다.

![Untitled](https://github.com/geongyu09/Algorithm/assets/67491015/ac511bfd-9570-4155-9354-17a6ee9d630b)

### 시간 복잡도

| 접근 | 탐색 | 삽입 | 삭제 |
| ---- | ---- | ---- | ---- |
| O(n) | O(n) | O(1) | O(n) |

### 공간 복잡도

O(n)

# class 구현

## Node

노드의 경우 본인의 데이터와 다음을 가리키는 레퍼런스 2개의 데이터를 가진다.

```tsx
//노드
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
```

## LinkedList

연결 리스트는 전체적으로 Node 객체들을 관리하게 된다.

```jsx
//연결리스트
class LinkedList {
  //head, tail, current 및 필요한 값들을 정리해줄 수 있다.
  constructor() {
    this.head = null; //head는 레퍼런스로, 가장 처음의 노드를 가리킨다.
    this.tail = null;
    this.current = null;
    this.length = 0;
  }
}
```

필요한 데이터는 상황마다 다를 수 있으며 대체로 아래와 같은 것을 제공해주는 경우가 많다.

- `head : null | ref` : 가장 처음에 있는 노드를 가리킨다. 만약 연결 리스트에 아무런 노드가 없다면 null이다.
- `tail : null | ref` : 가장 마직에 있는 노드를 가리킨다. 만약 연결 리스트에 아무런 노드가 없다면 null값을 가진다.
- `current : null | ref` : 가장 최근에 사용된 노드를 가리킨다. 연결 리스트에 아무런 노드가 없다면 null값을 가진다.
- `length : number` : 노드의 길이를 나타낸다.

### 삽입(insert)

- 뒤에 추가

```jsx
Add(value)
  Pre: 리스트에 추가할 값
  Post: 리스트의 맨 마지막에 있는 값
  n ← node(value)
  if head = ø
    head ← n
    tail ← n
  else
    tail.next ← n
    tail ← n
  end if
end Add
```

```jsx
	append(data) {
    let node = new Node(data);
    //처음이라면
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length = 1;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.length++;
    }
  }
```

- 앞에 추가

```jsx
Prepend(value)
 Pre: 리스트에 추가할 값
 Post: 리스트의 맨 앞에 있는 값
 n ← node(value)
 n.next ← head
 head ← n
 if tail = ø
   tail ← n
 end
end Prepend
```

```jsx
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
```

### 탐색(search)

```jsx
Contains(head, value)
  Pre: head는 리스트에서 맨 앞 노드
       value는 찾고자 하는 값
  Post: 항목이 링크드 리스트에 있으면 true;
        없으면 false
  n ← head
  while n != ø and n.value != value
    n ← n.next
  end while
  if n = ø
    return false
  end if
  return true
end Contains
```

```jsx
  contains(data) {
    //n은 레퍼런스이다.
    let n = this.head;
    while (n && n.data != data) n = n.next;
    return Boolean(n);
  }
```

### 삭제(delete)

1. 빈 리스트인가?
   1. y: 끝
2. 맨 첫 요소인가?
   1. y: `head` 한칸 옮기고 맨 앞 요소의 `next = null`
3. 중간 / 끝 요소인가?
   1. y: 순회하며(while) 데이터를 찾음. 데이터 있는가?
      1. y : 제거(이전 노드의 next = 다음 노드)

```jsx
Remove(head, value)
  Pre: head는 리스트에서 맨 앞 노드
       value는 삭제하고자 하는 값
  Post: 항목이 링크드 리스트에서 삭제되면 true;
        없으면 false
  if head = ø
    return false
  end if
  n ← head
  if n.value = value
    if head = tail
      head ← ø
      tail ← ø
    else
      head ← head.next
    end if
    return true
  end if
  while n.next != ø and n.next.value != value
    n ← n.next
  end while
  if n.next != ø
    if n.next = tail
      tail ← n
    end if
    n.next ← n.next.next
    return true
  end if
  return false
end Remove
```

```jsx
remove(data) {
    if (!this.head) return false;
    let n = this.head;
    //맨 앞에 있는 경우
    if (n.data == data) {
      this.head = this.head.next;
      this.length--;
      return true;
    }
    //중간에 있는 경우
    while (n.next && n.next.data != data) n = n.next;
    if (n.next) {
      n.next = n.next.next;
      this.length--;
      return true;
    }
    return false;
  }
```

### **순회**

1. n 정의. n = this.head
2. while(n)

```jsx
Traverse(head)
  Pre: head는 리스트에서 맨 앞 노드
  Post: 순회된 항목들
  n ← head
  while n != ø
    yield n.value
    n ← n.next
  end while
end Traverse
```

```jsx
traverse() {
    let n = this.head;
    while (n) {
      console.log(n.data);
      n = n.next;
    }
  }
```

# Object로 구현

```jsx
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
```
