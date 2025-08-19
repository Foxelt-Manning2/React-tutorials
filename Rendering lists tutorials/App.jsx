import List from "./List"

// Rendering lists in ReactJs
function App(){

  const Characters =[{id:1,name:"France",age:18},
                     {id:2,name:"Morroco",age:29},
                     {id:3 ,name:"Tokio", age: 30},
                     {id:4, name:"Gran Halan", age:90000},
                     {id:5, name:"Geria", age:"unknown"}]

   const Scenes =    [{id:1,name:"Flaming Village",age:'2 hours'},
                      {id:2,name:"Tower Of Despair",age:'1 month'},
                      {id:3 ,name:"Land of no Return", age:'3 years'},
                      {id:4, name:"Hardship Valley", age:'6 days '},
                      {id:5, name:"He who overcomes", age:"unknown"}]               
 
    return(<>
    {Characters.length > 0 && <List  items={Characters} category="Characters" />}
    {Scenes.length >0  && <List  items={Scenes} category="Scenes"/> }
    </>
    )
}
export default App