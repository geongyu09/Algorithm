# Double Linked-list

> 이중 연결 리스트
> 기존의 단방향의 연결리스트에서 양방향으로 확장된 연결 리스트. 이를 더 확장하여 원형 이중 연결 리스트를 만들 수 있다.

![Untitled](Double%20Linked-list%202ab6cd40203f45b78ee3db5a1772f66a/Untitled.png)

# 복잡도

복잡도는 연결 리스트와 동일하다.

## 시간 복잡도

| Access | Search | Insertion | Deletion |
| ------ | ------ | --------- | -------- |
| O(n)   | O(n)   | O(1)      | O(n)     |

## 공간 복잡도

O(n)

# 구현

## Node

양방향 순회를 위하여 next, prev를 추가한다.

```tsx
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
```

## Double Linked-list

```tsx
class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}
```

코드 순회에 필요한 head, tail을 선언해준다.

### 삽입

```tsx
Add(value)
  Pre: value는 리스트에 추가하고자 하는 값
  Post: value는 목록의 끝에 배치됨
  n ← node(value)
  if head = ø
    head ← n
    tail ← n
  else
    n.previous ← tail
    tail.next ← n
    tail ← n
  end if
end Add
```

```tsx
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
```

### 삭제

```tsx
Remove(head, value)
  Pre: head는 리스트의 앞단에 위치
       value는 리스트에서 제거하고자 하는 값
  Post: value가 리스트에서 제거되면 true; 아니라면 false;
  if head = ø
    return false
  end if
  if value = head.value
    if head = tail
      head ← ø
      tail ← ø
    else
      head ← head.next
      head.previous ← ø
    end if
    return true
  end if
  n ← head.next
  while n = ø and value !== n.value
    n ← n.next
  end while
  if n = tail
    tail ← tail.previous
    tail.next ← ø
    return true
  else if n = ø
    n.previous.next ← n.next
    n.next.previous ← n.previous
    return true
  end if
  return false
end Remove
```

```tsx
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
```
