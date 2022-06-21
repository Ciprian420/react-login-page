import { useEffect } from 'react';
import './App.css';
import Details from './Components/Details/Details';
import Container2 from "./Components/Investment/Investment";
import Preferences from './Components/Preferences/Preferences';

function App() {
  useEffect(()=>{
    console.log("hello")
  }, [])

  return (
   <div className="App">
    <Details></Details>
    {/* <Container2></Container2> */}
    {/* <Preferences></Preferences> */}
   </div>
  )
}

export default App;
