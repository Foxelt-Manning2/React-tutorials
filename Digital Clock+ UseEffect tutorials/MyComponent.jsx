import {useState,useEffect} from "react";

function MyComponent(){
    const[width,setWidth] =useState(window.innerWidth);
    const[height,setHeight]=useState(window.innerHeight);
      useEffect(()=>
        {
            window.addEventListener("resize",handleWindowSize);
            console.log("Event listerner added");

            return()=> {
                window.removeEventListener("remove",handleWindowSize);
                console.log("EVENT Listener removed")
            }            
        },[width,height]); 





    function handleWindowSize(){
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    }


    return(
    <>

    <p>Window width:{width}</p>
    <p>Window height:{height} </p>
    </>
 );
}
export default MyComponent