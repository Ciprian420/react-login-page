import { useEffect } from 'react';
import './App.css';
import Details from './Components/Details/Details';
import Container2 from "./Components/Investment/Investment";
import Preferences from './Components/Preferences/Preferences';
import Investment from "./Components/Investment/Investment";
import Confirmation from './Components/Confirmation/Confirmation';

function App() {
  useEffect(()=>{
    console.log("hello")
  }, [])

  return (
   <div className="App">
    {/* <Container2/> */}
     <Details/>
    {/* <Preferences/> */}
     {/*<Confirmation/>*/}
   </div>
  )
}

export default App;
