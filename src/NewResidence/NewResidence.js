import React, { Component } from "react";
import axios from "axios";
import "./NewResidence.css";

class NewResidence extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      image: "",
      location: "",
      numberOfDays: "",
      beds: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value
    });
  }

  handleFormSubmit(event) {
    document.getElementById("newResidenceForm").style.height = "0";
    event.preventDefault();
    axios
      .post("http://localhost:3010/project3roomKind/residences", {
        name: this.state.name,
        image: this.state.image,
        location: this.state.location,
        numberOfDays: this.state.numberOfDays,
        beds: this.state.beds
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    document.getElementById("newResidenceFormBtn").innerHTML = "Add New Residence";
  }

  render() {
    return (
      <div id="newResidenceForm" className="closed newResidenceForm">
        <form className="newBookResidence" onSubmit={this.handleFormSubmit}>
          <p>
            <label htmlFor="name">Name Of Residence</label> <br />
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              placeholder="Name of Residence"
            />
          </p>
          <p>
            <label htmlFor="image">Image Of Residence</label> <br />
            <input
              type="text"
              name="image"
              value={this.state.image}
              onChange={this.handleInputChange}
              placeholder="Image of Residence"
            />
          </p>
          <p>
            <label htmlFor="location">Location</label> <br />
            <input
              type="text"
              name="location"
              value={this.state.location}
              onChange={this.handleInputChange}
              placeholder="Location"
            />
          </p>
          <p>
            <label htmlFor="numberOfDays">Number of Days</label> <br />
            <input
              type="text"
              name="numberOfDays"
              value={this.state.numberOfDays}
              onChange={this.handleInputChange}
              placeholder="Number of Days"
            />
          </p>
          <p>
            <label htmlFor="beds">Number of Beds</label> <br />
            <input
              type="text"
              name="beds"
              value={this.state.beds}
              onChange={this.handleInputChange}
              placeholder="Beds"
            />
          </p>
          <p>
            <button type="submit" onClick={this.handleFormSubmit}>
              Submit
            </button>
            {/* <button type="submit" onClick={() => { this.props.createResidence(this.state) }}>Submit</button> */}
          </p>
        </form>
      </div>
    );
  }
}

export default NewResidence;
