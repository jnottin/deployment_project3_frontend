import React, { Component } from "react";
import axios from "axios";
import "./ReserveResidence.css";

class ReserveResidence extends Component {
  constructor() {
    super();
    this.state = {
      residences: [],
      form: {
        name: "",
        email: "",
        arrivalTime: "",
        numberOfBeds: "",
        numberOfDays: ""
      }
    };
    this.changeHandler = this.changeHandler.bind(this);
    // this.submitHandler = this.submitHandler.bind(this);
  }
  changeHandler(e) {
    e.persist();
    let store = this.state;
    store.form[e.target.name] = e.target.value;
    this.setState(store);
  }

  onSubmit = e => {
    e.preventDefault();
    // get our form data out of state
    const { name, email, arrivalTime, numberOfBeds, numberOfDays } = this.state;
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

  changeBeds() {
    this.setState({});
  }
  render() {
    const form = this.state.form;
    const residences = this.state.residences;

    return (
      <form className="form" action="/">
        <div className="col">
          <h1>Reserve Residental</h1>

          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={this.changeHandler}
              />
            </label>
          </div>

          <div>
            <label>
              Email:
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={this.changeHandler}
              />
            </label>
          </div>
          <div>
            <label>
              Arrival Time:
              <input
                type="text"
                name="arrivalTime"
                value={form.arrivalTime}
                onChange={this.changeHandler}
              />
            </label>
          </div>

          <div>
            <label>
              Beds Requested:
              <input
                type="text"
                name="numberOfBeds"
                value={form.numberOfBeds}
                onChange={this.changeHandler}
              />
            </label>
          </div>

          <div>
            <label>
              Number of Days:
              <input
                type="text"
                name="numberOfDays"
                value={form.numberOfDays}
                onChange={this.changeHandler}
              />
            </label>
          </div>
          <div>
            <button
              type="submit"
              onSubmit={
                (this.state.residences.beds = this.state.form.numberOfBeds)
              }
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default ReserveResidence;
