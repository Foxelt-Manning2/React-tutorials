/*
useEffect()= React Hook that tells React to do some code WHEN
             (pickone)
             This component re-renders
             This component mounts
             The state of a value changes

             it better known to be a side code
 For useEffect to be used you need to pass a function and an array of its dependencies
//useEffect(function,[dependencies])

1.useEffect(()=> {})   //Runs after every re-render
2.useEffect(()=>{},[]) // runs only on mount
3.useEffect(()=>{},[value]) //Runs on mount and when value changes

USES
1.Event Listeners
2.DOM Manipulation
3.Subscriptions (real-time updates)
4.Fetching Data from an API
5. Clean up when a component unmounts

*/
import { useState,useEffect } from "react";

function MyComponent(){
 const [count,setCount]=useState(0);
 const [color,setColor]=useState("green");


 useEffect(()=>{
    document.title=`Count: ${count} ${color}`;

    return()=>{
        //some cleanup code
    }
 },[count,color]);


 function addCount (){
    setCount(c=> c+1)
 }   

 
 function subtractCount (){
    setCount(c=> c-1)
 } 
 
 function changeColor (){
    setColor(c=> c === "red" ? "yellow" : "red");
 }
 
    return(
        <>
        <p style={{color:color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button>
        <button onClick={changeColor}>Change color</button>
        </>
    )
}
export default MyComponent