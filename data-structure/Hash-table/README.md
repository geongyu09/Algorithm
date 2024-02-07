# Hash-Table

> 해시 테이블 (Hash-Table)
> **해시 테이블**(해시 맵)은 키를 값에 매핑할 수 있는 구조인 *연관 배열*을 구현하는 자료 구조이다.
> *해시 함수*를 사용해 원하는 값을 담을 수 있는 버킷 또는 슬롯 배열의 인덱스를 계산한다.

![Untitled](https://github.com/trekhleb/javascript-algorithms/assets/67491015/ea55cbb2-e9c8-412d-b6cd-372524f2b495)

# 복잡도

시간 복잡도 : O(1)

공간 복잡도 : 매우 큼

# 주의사항

- collition (충돌) : 한 위치에 data가 겹치는 현상
- Clustering (군집화) : data가 T 에 부분적으로 뭉치는 현상

## 해결 방법

1. 같은 곳에 여러개 저장 : Chaining

![Untitled 1](https://github.com/trekhleb/javascript-algorithms/assets/67491015/6998181c-638f-4a61-9587-7f1fe0b11d16)

1. 다른 빈 곳에 저장 : Probing( 조사법 )
   - linear probing : 빈자리가 나올 떄까지 다음 저장공간으로 이동
     - 장점 : 매우 간단
     - 단점 :
       - 충돌 발생시 1차 군집화 발생 ⇒ 검색이 느려진다.
       - 연속 data중 중간 위치 데이터 삭제시 그 아래 데이터 검색 못함 … ⇒ 장소 분류(해당 빈 공간은 삭제된 곳으로 표기)로 해결
   - quadratic probing : 1차 군집화의 감소 위해 검색 위치 변경.
     - 원래 들어가야 할 곳에 다른 데이터 있다면 그 다음(+1), 다음도 있다면 2^2, 그다음도 있다면 3^2 …
     - 이전 데이터의 1, 3, 5, 7, … 뒤에 저장
     - 장점 : 1차 군집화는 크게 개선됨
     - 단점 : 여전히 2차 군집화 가능성
   - double hashing : 이중 해싱 or rehashing
     - 2차 군집화 개선을 위해 다른 종류의 해싱 함수를 수식에 사용
     - 군집화는 거희 해결되었지만, 완벽하지 않음

결국 이 문제들을 해결하지 못하면 삽입/삭제에서 최악의 경우 O(n)이 된다.

+) 적재 밀도(leading density)

`let a = (데이터 사이즈)/(테이블 사이즈)`

![Untitled 2](https://github.com/trekhleb/javascript-algorithms/assets/67491015/5b72de0e-10a8-4dcf-8352-537541fafec4)
![Untitled 3](https://github.com/trekhleb/javascript-algorithms/assets/67491015/fcec20bf-c6c3-4a19-9939-17b395d503d2)
