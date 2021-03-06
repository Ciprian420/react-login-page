import { useEffect } from 'react';
import './App.css';
import Details from './Components/Pages/Details/Details';
import Preferences from './Components/Pages/Preferences/Preferences';
import Investment from "./Components/Pages/Investment/Investment";
import Confirmation from './Components/Pages/Confirmation/Confirmation';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
      <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Details/>} />
          <Route path="/page2" element={<Investment/>} />
          <Route path="/page3" element={<Preferences />} />
            <Route path="/page4" element={<Confirmation />} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;
