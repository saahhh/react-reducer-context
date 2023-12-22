import React, { useContext } from "react";
import ThemeContext from "./ContextExamOne";

const ChildTwoComponent = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <p>현재 테마는 : childtwo {theme} 입니다</p>
    </div>
  );
};

export default ChildTwoComponent;
