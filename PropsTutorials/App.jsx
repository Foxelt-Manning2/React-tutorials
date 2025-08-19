 // props= read only properties that are shared between components.
//         A parent component can send data to a child component,
//        <Component key=value />

// defaultProps = default values for props in case data isnt passed from parent component
//                name:"Guest"
  
import Student from './Student.jsx'

 function App(){
  return(
    <>
    <Student name="Canaan" age="20"  isStudent={true}/>
    <Student name="Jessy" age={59} isStudent={false}/>
    <Student name="Franklin" age={89} isStudent={false} />
    <Student name="Scooby-Doo" age={78} isStudent={true} />
    <Student />
    </>
  )

 }
 export default App