import { useState } from "react"

function Component(){
 const [carModel,setCarModel]=useState({year: 2024,
                                        make:'Hyundai',
                                        model:'Mustang'
                                                   });

function handleYearChange(event){
   setCarModel(c=>({...c,year:event.target.value}))
}

function handleMakeChange(event){
   setCarModel(c =>({...c,make:event.target.value
   }))
}

function handleModelChange(event){
   setCarModel(c=> ({...c, make:event.target.value
   }))
}
return(
<>
<p>Your favorite Car is :{carModel.year} {carModel.make} {carModel.model}</p>
<input type="number" value={carModel.year} onChange={handleYearChange}/><br />
<input type="text"   value={carModel.make} onChange={handleMakeChange}/><br />
<input type="text"   value={carModel.model} onChange={handleModelChange}/>
</>)
}
export default Component