//React hook = Special function that allows functional components to use React features
//              without the need to create class components
//              (useState, useEffect ,useContext,useReducer,useCallback and more)

import Counter from "./Counter"

//useState()= A React hook that allows the creation of a stateful variable
//             AND a setter function to update its value in the virtual DOM
//              [name,setName]

function App(){
return(
<>
<Counter/>
</>)

}
export default App