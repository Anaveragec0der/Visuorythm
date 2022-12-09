import { useEffect, useContext } from "react"
import { ThemeContext } from "./App";

export default function TitleBar(){
    const theme = useContext(ThemeContext);
    useEffect(()=>{
        setTimeout(startAnim,1500);
    },[])

    const sleep = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
      };

    const startAnim = async ()=>{
        let arrLetter = document.getElementsByClassName("titleLetter");
        for(let i=0;i<arrLetter.length-1;i+=2){
            const aStyle = arrLetter[i].style;
            const bStyle = arrLetter[i+1].style;
            const xOffsetA = arrLetter[i].getBoundingClientRect().left - arrLetter[i+1].getBoundingClientRect().left;
            const shiftA = xOffsetA*-1;
            const shiftB = xOffsetA;
            aStyle.setProperty('transform',`translateX(${shiftA}px)`);
            bStyle.setProperty('transform',`translateX(${shiftB}px)`);
            await sleep(300);
            aStyle.setProperty('transform','');
            bStyle.setProperty('transform','');
            arrLetter[i].innerHTML = "Visuorythm".charAt(i);
            arrLetter[i+1].innerHTML = "Visuorythm".charAt(i+1);
        }
        await sleep(5000);
        for(let i=0;i<arrLetter.length-1;i+=2){
            const aStyle = arrLetter[i].style;
            const bStyle = arrLetter[i+1].style;
            const xOffsetA = arrLetter[i].getBoundingClientRect().left - arrLetter[i+1].getBoundingClientRect().left;
            const shiftA = xOffsetA*-1;
            const shiftB = xOffsetA;
            aStyle.setProperty('transform',`translateX(${shiftA}px)`);
            bStyle.setProperty('transform',`translateX(${shiftB}px)`);
            await sleep(300);
            aStyle.setProperty('transform','');
            bStyle.setProperty('transform','');
            arrLetter[i].innerHTML = "iVusrotymh".charAt(i);
            arrLetter[i+1].innerHTML = "iVusrotymh".charAt(i+1);
        }
        await sleep(3000);
        for(let i=0;i<arrLetter.length-1;i+=2){
            const aStyle = arrLetter[i].style;
            const bStyle = arrLetter[i+1].style;
            const xOffsetA = arrLetter[i].getBoundingClientRect().left - arrLetter[i+1].getBoundingClientRect().left;
            const shiftA = xOffsetA*-1;
            const shiftB = xOffsetA;
            aStyle.setProperty('transform',`translateX(${shiftA}px)`);
            bStyle.setProperty('transform',`translateX(${shiftB}px)`);
            await sleep(300);
            aStyle.setProperty('transform','');
            bStyle.setProperty('transform','');
            arrLetter[i].innerHTML = "Visuorythm".charAt(i);
            arrLetter[i+1].innerHTML = "Visuorythm".charAt(i+1);
        }
    }

    return (
        <div id="titleBar">
            <div id="title">
                <div class={`titleLetter ${theme.theme}`}>i</div>
                <div class={`titleLetter ${theme.theme}`}>V</div>
                <div class={`titleLetter ${theme.theme}`}>u</div>
                <div class={`titleLetter ${theme.theme}`}>s</div>
                <div class={`titleLetter ${theme.theme}`}>r</div>
                <div class={`titleLetter ${theme.theme}`}>o</div>
                <div class={`titleLetter ${theme.theme}`}>t</div>
                <div class={`titleLetter ${theme.theme}`}>y</div>
                <div class={`titleLetter ${theme.theme}`}>m</div>
                <div class={`titleLetter ${theme.theme}`}>h</div>
            </div>
        </div>
    )
}