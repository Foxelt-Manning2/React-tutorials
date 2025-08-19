import {useState} from 'react';
function Component(){
const [foods,setFood] =useState([]);

function handleAddFood(){
   const newFood = document.getElementById("foodInput").value;
   document.getElementById("foodInput").value = " ";
   setFood(c => [...c,newFood]);
}

function handleRemoveFood(index){
   setFood(c => c.filter((_,i) => i !== index));
}

return(
<>
<div>
   <h1>FOOD</h1>
   <ol>
      {foods.map((food,index) => <li key={index} onClick={()=>handleRemoveFood(index)}>
         {food}
      </li>)}
      </ol>

      <input type='text' id="foodInput" placeholder='Add food' />
      <button onClick={handleAddFood}> add Food</button>

</div>
</>
);
}
export default Component