import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "./Residences.css";
import axios from "axios";
import ReserveResidence from "../ReserveResidence/ReserveResidence";
import EditResidence from "../EditResidence/EditResidence";

class Residences extends Component {
  constructor() {
    super();
    this.state = {
      residences: []
    };
  }
  newResidenceForm = () => {
    if (document.getElementById("newResidenceForm").style.height === "100%") {
      document.getElementById("newResidenceForm").style.height = "0";
      document.getElementById("newResidenceFormBtn").innerHTML = "Add New Residence";
    } else {
      document.getElementById("newResidenceForm").style.height = "100%";
      document.getElementById("newResidenceFormBtn").innerHTML = "Close Residence Form";

    }
  };

  componentDidMount() {
    axios
      // .get("http://localhost:3010/api/roomKind/residences")
      .get("http://roomkind.herokuapp.com/api/roomKind/residences")

      .then(res => {
        this.setState({
          residences: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const residences = this.state.residences.map(residences => {
      return (
        <div key={residences._id} className="residencesColumn">
          <div className="residencesBody">
            <h4>Residence Name: {residences.name}</h4>
            <img className="residenceImage" src={residences.image} />
            <h4>Location: {residences.location}</h4>
            <h4>Number of Days Available: {residences.numberOfDays}</h4>
            <h4>Number of Beds Available: {residences.beds}</h4>

            <Link to={`/editResidence/${residences._id}`}>
              <p>Edit or Delete Residence Listing</p>
              <Route
                path={`/editResidence/${residences._id}`}
                exact
                render={routerprops => (
                  <EditResidence
                    list={this.state.residences}
                    match={routerprops.match}
                    name={this.state.name}
                  />
                )}
              />
            </Link>
          </div>
        </div>
      );
    });

    return (
      <div>
        <h2 className="residencesHeader">Residences</h2>
        <button onClick={this.newResidenceForm} id="newResidenceFormBtn">
          Add New Residence
        </button>
        <div>{residences}</div>
      </div>
    );
  }
}

export default Residences;
