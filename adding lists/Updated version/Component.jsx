import { useState } from "react";

function Component(){
   const [cars,setCars] =useState([]);
   const [carYear,setCarYear]=useState(new Date().getFullYear());
   const [carMake,setCarMake]= useState("");
   const [carModel,setCarModel] =useState("");

   function handleAddCar(){
       const newCar = { year:carYear,make:carMake,model:carModel}
       setCars(c =>[...c ,newCar]);
       setCarMake("");
       setCarModel("");
   }  

   function handleRemoveCar(index){
       setCars(cars.filter((_,i)=> i!==index));
   }

   function handleCarMake(){
         const make= document.getElementById("takeMake").value; 
         setCarMake(make);
   }

   function handleCarModel(){
      const make= document.getElementById("takeModel").value; 
      setCarModel(make);
   }
   function handleCarYear(){
      const make= document.getElementById("takeYear").value; 
      setCarYear(make);
   }

   return(
   <>
      <h1>List of Car Objects</h1>
      <ul>
         {cars.map((car,index)=><li key={index} onClick={()=>handleRemoveCar(index)}> {car.year} {car.make} {car.model}</li>)}
      </ul>
      <input type="number" id="takeYear" value={carYear} onChange={handleCarYear} /><br />
      <input type="text"   id="takeMake" value={carMake}   placeholder="Enter car make" onChange={handleCarMake}/><br/>
      <input type="text"   id="takeModel" value={carModel} placeholder="Enter car model" onChange={handleCarModel}/><br/>
      <button onClick={handleAddCar}>Add Car</button>
   </>);
}
export default Component;