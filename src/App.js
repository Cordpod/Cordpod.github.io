import logo from './logo.svg';
import './App.css';



import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import Home from "./views/home.js";
import One from "./views/one.js";
import Troll from "./views/troll.js";
import Actual from "./views/actual.js";
import Intermediate from "./views/intermediate.js";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/one" element={<One/>}/>
        <Route path = "/troll" element={<Troll/>}/>
        <Route path = "/actual" element={<Actual/>}/>
        <Route path = "/intermediate" element={<Intermediate/>}/>
      </Routes>
    </BrowserRouter>
  );
}



export default App;
