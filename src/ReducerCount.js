//상태 관리를 위한 Hook 중 하나로, 복잡한 상태 로직을 다룰 때 유용
//useReducer : 불필요하게 초기 상태값을 재생성할 경우
//useReducer (현재상태, dispatch(=상태를 다른 값으로 업데이트하고 재실행시키는 함수)= 상태변경하기위한 함수, {초기값설정})
//언제사용 ? 객체나 배열타입의 상태를 관리할 때 많이 사용됨

//useState 와 useReducer는 비슷한 hook이기에 코드나 상황에 맞게 사용을 해주면 됨
//useState = null; = useReducer

import React, { useReducer } from "react";

//Switch를 활용해서 현재 상태와 액션을 받아서 새로운 상태를 전달할 예정
const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    case "RESET":
      return { count: 0 };

    default:
      return state;
  }
};

const Counter = () => {
  //useReducer를 사용해서 상태와 디스패치 함수를 얻을 예정
  // const [state, dispatch]
  //위 counterReducer 함수에서는 switch문을 활용해서 값을 조정함
  //useReducer 상태와 디스패치 함수를 생성
  //첫 번째 매개변수로 counterReducer를 받고
  //두 번째 매개변수로 {count : 0}을 줘서 초기 값을 0으로 설정
  //dispatch : 액션을 발생시키는데 사용되는 함수
  //위에서 switch문 안에 있는 case가 선택되면 선택된 상태를 return해서 업데이트를 처리
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <>
      <p>count : {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>증가</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>감소</button>
      <button onClick={() => dispatch({ type: "RESET" })}>초기화</button>
    </>
  );
};

export default Counter;
