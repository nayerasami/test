import { createContext, useState } from "react";



export let CounterContext =createContext(null)

export default function CounterContextProvider(props){
    let [count,setCount]= useState(0)

    function ChangeCount(){
        setCount(Math.random()*10)
    }
  
    return <CounterContext.Provider  value={{count,ChangeCount}}>
{props.children}
    </CounterContext.Provider>
}