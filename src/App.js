import "./styles.css";
import SortingVisualizer from "./SortingVisualizer";
import { createContext,useState } from "react";
import { Radio,Icon } from "semantic-ui-react";
export const ThemeContext=createContext(null);
export default function App() {
  const [theme,setTheme]=useState("dark");
  const toggleTheme=()=>{
    setTheme((curr)=>(curr==="light"?"dark":"light"));
  };
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
    <div className="App" id={theme}>
      <SortingVisualizer />
      <div className="radio-toggle">
      <Icon name="lightbulb outline"/> <Radio toggle onChange={toggleTheme} /> <Icon name="moon outline"/>
      </div>
    </div>
    </ThemeContext.Provider>
  );
}
