import React from "react";
import './App.css'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Welcome from './component/Welcome/Welcome'

import  Search  from "./component/Search/Search";
import Counter from "./component/counter/Counter";

function App() {
  return (
   <div className="App">
    <Router>
      <Routes>
      <Route path="/welcome"  Component = {Welcome} />
      <Route path="/counter"  Component = {Counter} />
      <Route path="/search"  Component = {Search} />
      
      </Routes>    
    </Router>
   
   </div>

    
  );
}

export default App;
