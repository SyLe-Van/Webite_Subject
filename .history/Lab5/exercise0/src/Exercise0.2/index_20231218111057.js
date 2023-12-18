import MyComponent from "./components/myComponent";
import { ThemeProvider } from "./ThemeContext.js";

const Exercise0_2 = () => {
  return (
    <ThemeProvider>
      <MyComponent />
    </ThemeProvider>
  );
};

export default Exercise0_2;
