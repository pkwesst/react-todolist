# Todo-App

> 할 일을 기록, 관리하여 사용할 수 있는 앱

---

## 사용

- React
- Styled Components
- Context API

---

## 목차

- [구현](#구현)
  - 현재 날짜
  - 할 일 생성
  - 할 일 삭제
  - 남은 할 일
  - UI
- [트러블 슈팅](#트러블슈팅)
- [학습한 내용](#학습한-내용)

---

## 구현

<img style="width:100vw; display:block; margin:0 auto" alt="todo" src="https://user-images.githubusercontent.com/90893579/170867519-1763d6e9-d26b-43e1-b675-933eef33f206.png">
<img style="width:100vw; display:block; margin:0 auto" alt="todo-input" src="https://user-images.githubusercontent.com/90893579/170867418-634a6f24-9fa7-47b7-8a3d-716410f92603.png">

### 현재 날짜

- Date() 생성자

### 할 일 생성

- InputForm 컴포넌트에서 onSubmit으로 새로운 할 일을 추가하는 액션(CREATE) 적용 후 contents 초기화 및 button을 false로 전환
- concat 함수 이용
- memoization을 통해 불필요한 리렌더링 방지

### 할 일 체크

- 체크 박스 컴포넌트에 onClick을 할 경우 액션(TOGGLE) 발생

### 할 일 삭제

- 삭제 아이콘을 클릭하면 onRemove로 할 일을 삭제하는 액션(REMOVE) 발생
- filter를 이용해 해당 id가 아닌 것만 return

### 남은 할 일

- TodoStateContext를 이용해 done이 false인 값만 length로 표현

### UI

- Styled Components 이용
  - Global Style로 관리
  - props 받아와 스타일 적용
- transform의 rotate 이용
  - +버튼이 x버튼으로 전환

---

## 트러블 슈팅

### input이 footer 위에 겹치는 현상

**문제**

- +버튼을 누르면 input이 나오는데 남은 할 일을 보여주는 footer와 겹치는 현상

**해결**

- z-index 값을 0이 아닌 값을 설정하였으나 여전히 겹치는 것을 확인
- z-index를 적용할 때 position:static이 아니어야 함을 학습

### Warning: Unknown event handler property 'onCreate'. It will be ignored 오류

**문제**

- Input으로 받은 값을 onClick으로 전달하고자 할 때 생긴 오류

**해결**

- onCreate를 onChange로 수정하여 해결
- input 안의 값이 변경될 때 onChange 이벤트가 발생하는 것이므로 임의로 정한 props로 전달할 수 없음을 학습

---

## 학습한 내용

### Context API

- 전역적으로 사용할 수 있는 값(or 상태 ,함수 등) 관리
- Provider 컴포넌트로 Context 값 설정
- state와 dispatch를 각각 다른 Context로 생성해 관리할 경우 dispatch만 필요한 컴포넌트에서 불필요한 렌더링을 방지할 수 있음

### useState와 useReducer 사용 차이

- reducer는 현재 상태와 액션 객체를 파라미터로 받아와 새로운 상태를 반환해주는 함수
- useReducer를 사용할 경우 dispatch를 Context API를 이용해 전역적으로 사용할 수 있게 할 수 있어 컴포넌트에게 함수를 전달하는 상황에서 유용

- useState는 컴포넌트에서 관리하는 값이 하나이고 그 값이 단순한 숫자나 문자열, boolean일 경우 사용하는 것이 유용
- useReducer는 컴포넌트에서 관리하는 값이 여러 개가 되어 상태의 구조가 복잡해 지는 경우 또는 setter를 한 함수에서 여러 번 사용해야 하는 경우 사용하기 유용
