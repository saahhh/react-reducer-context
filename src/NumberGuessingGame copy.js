import React, { useState } from "react";

const QuizJave = () => {
  const randomNumber = () => {
    return Math.floor(Math.random() * 50) + 1;
    // +1을 붙여주지 않으면
    // (Math.random() * 50) 0 ~ 49가 됨
  };
  // targetNumber 에 랜덤으로 생성된 숫자값이 들어갈 수 있도록 설정
  const [targetNumber, setTargetNumber] = useState(randomNumber());
  const [useGuess, setUserGuess] = useState("");
  const [message, setMessage] = useState("");

  // 숫자값이 들어올 때마다 값 변경
  const inputChange = (event) => {
    setUserGuess(event.target.value);
  };
  // 숫자값 전달
  const inputSubmit = (event) => {
    // 페이지가 다시 로딩되는것을 방지
    // 페이지가 자동으로 새로고침 되는 것을 막아주는 역할
    event.preventDefault();
    // 사용자가 입력한 값을 숫자로 변환해주는 역할
    // 10진수 : 우리가 흔히 사용하는 0~9 숫자를 의미
    const guess = parseInt(useGuess, 10);

    // NaN = Not a Number
    // 주어진 값이 숫자가 맞는지 숫자가 아닌지
    // 판별하는 역할
    if (isNaN(guess)) {
      setMessage("숫자가 입력이 가능합니다.");
    } else {
      if (guess === targetNumber) {
        setMessage(`정답입니다. 숫자는 : ${targetNumber}`);
        setTargetNumber(randomNumber());
      } else {
        setMessage(
          guess < targetNumber
            ? "숫자가 너무 낮습니다."
            : "숫자가 정답보다 높습니다."
        );
      }
      setUserGuess("");
    }
  };
  return (
    <div>
      <h1>숫자 맞추기 게임</h1>
      <p>1부터 100 사이 숫자 맞추기</p>
      <form onSubmit={inputSubmit}>
        <input
          type="number"
          value={useGuess}
          onChange={inputChange}
          placeholder="숫자를 입력하세요."
          min="1"
          max="100"
          required
        />
        <button type="submit">제출하기</button>
      </form>
      {message && <div> {message} </div>}
    </div>
  );
};
export default QuizJave;
