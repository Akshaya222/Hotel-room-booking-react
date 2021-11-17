import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import SingleRoom from './components/SingleRoom';
import Rooms from './components/Rooms';
import Error from './components/Error';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import {Context} from './Context';

function App() {
  return (
    <div>
         <Context>
         <Router>
          <Navbar/>
          <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/rooms" element={<Rooms/>}/>
          <Route exact path="/singleRoom/:singleId" element={<SingleRoom/>}/>
          <Route path="/*" element={<Error/>}/>
          </Routes>
          </Router>   
         </Context> 
    </div>
  );
}

export default App;
