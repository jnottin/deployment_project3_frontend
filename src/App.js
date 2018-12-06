import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar.js";
import NewResidence from "./NewResidence/NewResidence";
import NewShelter from "./NewShelter/NewShelter";
import ReserveResidence from "./ReserveResidence/ReserveResidence";
import HomePage from "./HomePage/HomePage";
import ReserveShelter from "./ReserveShelter/ReserveShelter";
import EditShelter from "./EditShelter/EditShelter";
import EditResidence from "./EditResidence/EditResidence";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <NewShelter />
        <NewResidence />
        <Route path="/reserveShelter/:id" exact component={ReserveShelter} />
        <Route path="/editResidence/:id" exact component={EditResidence} />
        <Route path="/editShelter/:id" exact component={EditShelter} />
        <Route path="/" exact component={HomePage} />
        <Route path="/reserveResidence/:id" component={ReserveResidence} />
      </div>
    );
  }
}
export default App;
