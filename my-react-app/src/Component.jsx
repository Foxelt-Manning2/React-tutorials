// useState()= Re-renders the component when state value changes

// useRef()= useReference Doesn't cause re-render when value changes
//           when you want a component to remember some info
//           but you dont want the info to trigger any new renders

//           1.Accessing/Interacting with DOM elements
//           2.Handling focus,Animation and Transitions
//           3.Managing Timers and Intervals
import {useEffect ,useRef} from "react" 

function MyComponent(){
   const inputRef=useRef(null);

    useEffect(()=>{
        console.log("COMPONENT RENDERED")
    })

    function handleClick(){
     inputRef.current.focus();
     inputRef.current.style.backgroundColor ="yellow";
    }

    return(
    <>
    <button onClick={handleClick}>Click me</button>
    <input ref={inputRef}></input>
    </>)
}
export default MyComponent;