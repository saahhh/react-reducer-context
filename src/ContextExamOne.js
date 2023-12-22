//부모 컴포넌트에서 createContext로 생성한 Context객체를 자식 컴포넌트에서 쉽게 사용할 수 있도록 만들어진 Hook
//useContext를 사용하면 데이터를 전달하기 위해 props를 사용하지 않아도 된다

import { createContext } from "react";

const ThemeContext = createContext();

export default ThemeContext;
