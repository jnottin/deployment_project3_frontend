import React, { Component, Redirect } from "react";
// import './HomePage.css';
import axios from "axios";
import "./EditResidence.css";

class EditResidence extends Component {
  constructor() {
    super();
    this.state = {
      residences: [],
      name: "",
      image: "",
      location: "",
      numberOfDays: "",
      beds: ""
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
  handleEdit(e) {
    e.preventDefault();

    axios
      .put(
        "http://roomkind.herokuapp.com/editResidence/" +
          this.props.match.params.id,
        // "http://localhost:3010/editResidence/" + this.props.match.params.id,

        {
          name: this.state.name,
          image: this.state.image,
          location: this.state.location,
          numberOfDays: this.state.numberOfDays,
          beds: this.state.beds
        }
      )
      .then(result => {});
  }
  handleRemove(e) {
    e.preventDefault();
    axios
      .delete(
        "http://roomkind.herokuapp.com/deleteResidence/" +
          this.props.match.params.id
        // "http://localhost:3010/deleteResidence/" + this.props.match.params.id
      )
      .then(result => {});
    return <Redirect to="/" />;
  }

  componentDidMount() {
    axios
      .get("http://roomkind.herokuapp.com/api/roomKind/residences")
      // .get("http://localhost:3010/api/roomKind/residences")

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
    const residences = this.state.residences;
    const residenceId = this.props.match.params.id;
    const residenceInfo = residences.filter(
      specificResidence => specificResidence._id === residenceId
    );
    const residence = residenceInfo[0];

    if (typeof residence != "undefined") {
      return (
        <form className="newresidence">
          <div className="colform">
            <h2>{residence.name}</h2>

            <div>
              <p>
                <label htmlFor="Name">Name Of residence</label> <br />
                <input
                  type="text"
                  name="name"
                  onChange={this.handleInputChange}
                  value={this.state.name}
                  placeholder={residence.name}
                />
              </p>
            </div>
            <div>
              <p>
                <label htmlFor="image">Image</label> <br />
                <input
                  type="text"
                  name="image"
                  onChange={this.handleInputChange}
                  value={this.state.image}
                  placeholder={residence.image}
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
                  placeholder={residence.location}
                />
              </p>
            </div>

            <div>
              <p>
                <label htmlFor="beds">Number of Beds</label> <br />
                <input
                  type="text"
                  name="beds"
                  value={this.state.beds}
                  onChange={this.handleInputChange}
                  placeholder={residence.beds}
                />
              </p>
            </div>
            <div>
              <p>
                <label htmlFor="numberOfDays">Number of Days</label> <br />
                <input
                  type="text"
                  name="numberOfDays"
                  onChange={this.handleInputChange}
                  value={this.state.numberOfDays}
                  placeholder={residence.numberOfDays}
                />
              </p>
            </div>

            <div>
              <p>
                <button type="submit" onClick={this.handleEdit}>
                  Done With Change!
                </button>
                <button type="submit" onClick={this.handleRemove}>
                  Delete residence Post
                </button>
              </p>
            </div>
          </div>
        </form>
      );
    } else {
      return (
        <div>
          <h1>order sdfsd empty</h1>
          <button type="submit" onClick={this.handleRemove}>
            Delete residence Post
          </button>
        </div>
      );
    }
  }
}

export default EditResidence;
