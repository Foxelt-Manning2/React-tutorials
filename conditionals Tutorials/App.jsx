// conditional rendering = allows you to control what gets rendered in your 
//                           in your application based on certain conditions
//                         (show,hide orr change components)

import UserGreeting from "./UserGreeting";

function App(){
  return(
  <>
     <UserGreeting  isLoggedIn={true} username="Musah"/>
    <UserGreeting />
  </>);
}
export default App