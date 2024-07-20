//props = read-only proterties that are shared between components. 
// A parent componet can send data to a child component 
// <Component key=value>
import Student from './Student.jsx'
function App() {
  return(
    <>
    <Student name="Spongebob" age="30" isStudent={true}/>
    </>
    
  );
}

export default App;
