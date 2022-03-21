/*
if (조건 A) {
  if (조건 B) {
    if (조건 C) {

    }
  } else {
    if 조건(D) {
      // 나는 어떤 때 실행되지?
      if (조건 E) {        
      } else {
        // 나는?
      }
      // 나는?
    } else {      
    }
  }
}
*/

// if 줄여보기

/* if문 중첩 줄이기
1. if문 다음에 나오는 중복된 절차 찾아서 각 분기점 내부에 넣는다.
2. 분기점에서 짧은 절차부터 실행하게 if문을 형성한다.
3. 짧은 절차가 끝나면 return(함수 내부의 경우)이나 break(for문 내부의 경우)로 중단한다.
4. else를 제거한다. (이때 중첩 하나가 제거된다.)
5. 다음 중첩된 분기점이 나올 때 1 ~ 4의 과정을 반복한다.
*/

