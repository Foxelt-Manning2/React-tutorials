import { useState } from "react";

function ToDoList(){

    const [tasks,setTasks] =useState([]);
    const [newTasks,setNewTasks] =useState([]);

    function handleInput(){
        const input =document.getElementById("input").value;
        setNewTasks(input);
    }

    function addTask(){
        if(newTasks.trim() !== ""){
            setTasks(c=>[...c,newTasks]);
            setNewTasks("");
        }else{
            alert("please enter the task")
        }

    }

    function deleteTask(index){
       setTasks(tasks.filter((_,i)=> i!== index))
    }

    function MoveTaskUp(index){
        if (index >0){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=
            [updatedTasks[index-1],updatedTasks[index]];
            setTasks( updatedTasks)
        }

    }

    function MoveTaskDown(index){
        if(index < tasks.length -1){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=
            [updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks)
        }

    }

    return(
    <div className="ToDoList-container">
        <h1>To-Do-List</h1>
        <div>
            <input type="text" id="input" onChange={handleInput} placeholder="Enter new task" value={newTasks}/>
            <button onClick={addTask} className="add-button">Add Task</button>
        </div>
        <ol>
            {tasks.map((task,index)=>
            <li key={index}>
                <span className="text">{task}</span>
                <button className="Delete-button" onClick={()=>deleteTask(index)}>
                    Delete
                    </button>
                    <button className="moveTask" onClick={()=>MoveTaskUp(index)}>🔼</button>
                    <button className="moveTask" onClick={()=>MoveTaskDown(index)}>🔽</button>
                </li>)}
        </ol>
    </div>
    );
}
export default ToDoList