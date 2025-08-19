// useState is used to render the virtual DOM from its previous state
// this allows it to change the DOM when ever it is set

// when something is passed in useState's  () it allows it it to be the initial state in the DOM
// NOTE: set values are only specified by storing the alues inside the bracket eg. setAge(Age+1)
import React, {useState}from 'react'

function MyComponent(){

 let [name,setName]=useState("Guest");
 const updateName=() =>{
   setName("SpongeBob");
 }

 let [Age,setAge] = useState(0);
 const incrementAge= ()=>{
    setAge(Age+1);
 }
 let [isEmployed,setIsEmployed]= useState(false);
 const EmployedStatus = ()=>{
  setIsEmployed(!isEmployed);
 }

return(
<>
<div>
    <p> Name:{name}</p>
    <button onClick ={updateName}>setName</button>
    <br />
    <p>Age: {Age}</p>
    <button onClick = {incrementAge}>Increment Age</button>
    <p>Is Employed: {isEmployed ? "yes" : "no"}</p>
    <button onClick = {EmployedStatus}>toggle Status</button>
</div>
</>)
}
export default MyComponent