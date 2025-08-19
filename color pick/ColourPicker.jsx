import { useState } from "react"

function ColourPicker(){
const [color,setColor]= useState('#1234ef');

 function handleColorChange(event){
    setColor(event.target.value)
 }

    return(
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="display-color" style={{backgroundColor:color}}>
               <p>Selected color : {color}</p> 
            </div>
            <label>Select Colour</label>\
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    )
 }
export default ColourPicker