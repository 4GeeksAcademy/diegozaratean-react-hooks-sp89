import React, { useState } from "react";

const Player = ()=>{

    const [backColor, setBackColor] = useState('grey')
    const [stopColor, setStopColor] = useState('grey')
    const [playColor, setPlayColor] = useState('grey')
    const [nextColor, setNextColor] = useState('grey')

    function anterior(){
        if(backColor == 'grey'){
            console.log('soy gris, cambia a verde')
            setBackColor('green')
            //
            setStopColor('grey')
            setPlayColor('grey')
            setNextColor('grey')
        } else{
            console.log('soy verde, cambia a gris')
            setBackColor('grey')
        }
    }

    function stop(){
        if(stopColor == 'grey'){
            console.log('soy gris, cambia a verde')
            setStopColor('green')
            setBackColor('grey')
            setPlayColor('grey')
            setNextColor('grey')
        } else{
            console.log('soy verde, cambia a gris')
            setStopColor('grey')
        }
    }

    function play(){
        if(playColor == 'grey'){
            console.log('soy gris, cambia a verde')
            setPlayColor('green')
            setBackColor('grey')
            setStopColor('grey')
            setNextColor('grey')
        } else{
            console.log('soy verde, cambia a gris')
            setPlayColor('grey')
        }
    }

    function next(){
        if(nextColor == 'grey'){
            console.log('soy gris, cambia a verde')
            setNextColor('green')
            setBackColor('grey')
            setStopColor('grey')
            setPlayColor('grey')
        } else{
            console.log('soy verde, cambia a gris')
            setNextColor('grey')
        }
    }

    return(
        <>
            <h1>Player</h1>
            <button onClick={anterior} style={{backgroundColor: backColor}}>anterior</button>
            <button onClick={stop} style={{backgroundColor: stopColor}}>stop</button>
            <button onClick={play} style={{backgroundColor: playColor}}> play</button>
            <button onClick={next} style={{backgroundColor: nextColor}}>siguiente</button>
        </>
    )
}

export default Player