import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import ProjectBoard from './components/ProjectBoard';
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddProjectTask from './components/ProjectTask/AddProjectTask';
 
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path = "/" component = {ProjectBoard}/>
        <Route exact path = "/addProjectTask" component = {AddProjectTask} />
      </div>
    </Router>
  );
}

export default App;
