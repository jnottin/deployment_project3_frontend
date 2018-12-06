import React, { Component } from "react";
// import Shelters from "../Shelters/Shelters";

// import "./ListShelter.css"


class ReserveShelter extends Component {
  render() {
    return (
      <form className="Reserve" action="/" method="GET">
        <div className="column">
          <h1>Reserve Shelter</h1>

          <div>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input type="email" name="email" />
            </label>
          </div>

          <div>
            <label>
              Beds Requested:
              <input type="text" name="beds" />
            </label>
          </div>
          <div>
            <a href="/"><button>Submit</button></a>
          </div>
        </div>
      </form>

    );
  }
}
export default ReserveShelter;
