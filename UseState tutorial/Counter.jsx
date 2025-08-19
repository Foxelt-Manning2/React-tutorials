// updater function = a function passed as an argument to setState() usually in the form of an arrow function
//                    ex setYear(arrrow function)
//                    Allow for safe updates based on the previous state
//                    Used with multiple state updates and asynchronous functions
//                    Good practice to use them

import { useState } from "react"
function Counter()
{
   const [count,setCount]=useState(0);
   
   const increment =()=>{
    // updater in useState be like setA(a => a+1)
    // they come at first come first serve status implementing whatever updates
    // needed
    setCount(count + 1);
   } 

   const decrement =()=>{
    setCount(count -1);
   }

   const reset =()=>{
    setCount(0);
   }
   return(
    < div className="counter-display"> 
        <h1 className="counter-value" >{count}</h1>
        <button className="counter-button-display" onClick={ increment}>Increment</button>
        <button className="counter-button-display" onClick={decrement}>Decrement</button>
        <button className="counter-button-display" onClick={reset}>Reset</button>
    </div>
   );
}
export default Counter