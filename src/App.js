import "./styles.css";
import SortingVisualizer from "./SortingVisualizer";
import { createContext,useEffect,useState } from "react";
import { Icon, Transition } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
export const ThemeContext=createContext(null);
export default function App() {
  const [theme,setTheme]=useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
  const toggleTheme=()=>{
    setTheme((curr)=>(curr==="light"?"dark":"light"));
  };
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
    <div className="App" id={theme}>
      <SortingVisualizer />
      <div className="radio-toggle">
      {(theme==='light'?
      <Transition animation="zoom" duration={500}>
        <div>
        <Icon size='large' color='black' name="moon outline" onClick={toggleTheme} style={{cursor:'pointer'}}/>
        </div>
      </Transition>:
      <Transition animation="zoom" duration={500}>
        <div>
        <Icon size='large' name="lightbulb outline" color='yellow' onClick={toggleTheme} style={{cursor:'pointer'}}/>
        </div>
      </Transition>
      )}
      </div>
    </div>
    </ThemeContext.Provider>
  );
}
