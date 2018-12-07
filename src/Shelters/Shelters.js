import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "./Shelters.css";
import EditShelter from "../EditShelter/EditShelter";
import ReserveShelter from "../ReserveShelter/ReserveShelter";
import axios from "axios";

class Shelters extends Component {
  constructor() {
    super();
    this.state = {
      shelters: [],
      name: "",
      location: "",
      beds: ""
    };
  }
  newShelterForm = () => {
    if (document.getElementById("newShelterForm").style.height === "100%") {
      document.getElementById("newShelterForm").style.height = "0";
      document.getElementById("newShelterFormBtn").innerHTML = "Add New Shelter";
    } else {
      document.getElementById("newShelterForm").style.height = "100%";
      document.getElementById("newShelterFormBtn").innerHTML = "Close Shelter Form";
    }
  };
  componentDidMount() {
    axios
      .get("http://localhost:3010/api/roomKind")
      .then(res => {
        this.setState({
          shelters: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const shelters = this.state.shelters.map(shelters => {
      return (
        <div className="sheltersBack">
          <div key={shelters._id} className="sheltersColumn">
            <div className="sheltersBody">
              <h4>Shelter Name: {shelters.name}</h4>
              <img className="shelterImage" src={shelters.image} />
              <h4>Location: {shelters.location}</h4>
              <h4>Number of Beds Available: {shelters.beds}</h4>

              <Link to={`/editShelter/${shelters._id}`}>
                <Route
                  path={`/editShelter/${shelters._id}`}
                  exact
                  render={routerprops => (
                    <EditShelter
                      list={this.state.shelters}
                      match={routerprops.match}
                    />
                  )}
                />
                <p>Edit or Delete Shelter Listing</p>
              </Link>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="shelterSide">
        <div className="shelterButtonHeader">
          <h2 className="sheltersHeader">Shelters</h2>
          <button onClick={this.newShelterForm} className="newFormBtn" id="newShelterFormBtn">
            Add New Shelter
          </button>
        </div>

        <div className="sheltersBox">{shelters}</div>
      </div>
    );
  }
}

export default Shelters;
