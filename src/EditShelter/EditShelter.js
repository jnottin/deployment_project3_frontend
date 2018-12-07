import React, { Component } from "react";
// import './HomePage.css';
import axios from "axios";
import HomePage from "../HomePage/HomePage";
import "./EditShelter.css";

class EditShelter extends Component {
  constructor() {
    super();
    this.state = {
      shelters: [],
      name: "",
      location: "",
      beds: "",
      image: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleInputChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value
    });
  }

  handleRemove(e) {
    e.preventDefault();
    console.log("hit handleRemove SHELTER function");
    console.log(this.props.match.params._id);
    axios
      .delete(
        "http://localhost:3010/deleteShelter/" + this.props.match.params.id
      )
      .then(result => { });
  }
  handleEdit(e) {
    e.preventDefault();
    console.log("hit handleEdit SHELTER function");
    console.log(this.props.match.params._id);
    axios
      .put("http://localhost:3010/editShelter/" + this.props.match.params.id, {
        name: this.state.name,
        location: this.state.location,
        beds: this.state.beds,
        image: this.state.image
      })
      .then(result => { });
  }

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
    const shelters = this.state.shelters;
    const shelterId = this.props.match.params.id;
    const shelterInfo = shelters.filter(
      specificshelter => specificshelter._id === shelterId
    );
    const shelter = shelterInfo[0];

    if (typeof shelter != "undefined") {
      return (
        <form className="newShelter">
          <div className="colformS">
            <h2>{shelter.name}</h2>
            <div>
              <p>
                <label htmlFor="Name">Name Of Shelter</label> <br />
                <input
                  type="text"
                  name="name"
                  onChange={this.handleInputChange}
                  value={this.state.name}
                  // value={shelter.name}
                  placeholder={shelter.name}
                />
              </p>
            </div>
            <div>
              <p>
                <label htmlFor="location">Location</label> <br />
                <input
                  type="text"
                  name="location"
                  onChange={this.handleInputChange}
                  value={this.state.location}
                  // value={shelter.location}
                  placeholder={shelter.location}
                />
              </p>
            </div>

            <div>
              <p>
                <label htmlFor="beds">Number of Beds</label> <br />
                <input
                  type="text"
                  name="beds"
                  // value={shelter.beds}
                  value={this.state.beds}
                  onChange={this.handleInputChange}
                  placeholder={shelter.beds}
                />
              </p>
            </div>

            <div>
              <p>
                <button type="submit" onClick={this.handleEdit}>
                  Done With Change!
                </button>
                <button type="submit" onClick={this.handleRemove}>
                  Delete Shelter Post
                </button>
              </p>
            </div>
          </div>
        </form>
      );
    } else {
      return <h1>Shelter Deleted, Return To Home Page</h1>;
    }
  }
}

export default EditShelter;
