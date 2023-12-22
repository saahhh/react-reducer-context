import { useState, createContext, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  //light와 dart색상 지정을 해주는 함수 만들어주기
  const themeStyles = {
    light: {
      backgroundColor: "#fff",
      color: "#333",
    },

    dark: {
      backgroundColor: "#333",
      color: "#fff",
    },
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ ...themeStyles[theme], minHeight: "100vh" }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

//현재 사용하는 테마 함수
//useTheme : 내가 만든 훅
export const useTheme = () => {
  return useContext(ThemeContext);
};
