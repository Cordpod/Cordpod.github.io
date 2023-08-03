import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

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
