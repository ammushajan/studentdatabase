import React, { Component } from "react";
import StudentTable from "./StudentTable";
import "./App.css";
export default class App extends Component {
  state = {
    persons: [
      { id: 1, firstname: "Ammu", lastname: "Shajan", age: 21 },
      { id: 2, firstname: "Libi", lastname: "Shajan", age: 12 },
    ],
    studentFirstName: "",
    studentLastName: "",
    studentAge: "",
    studentID: "",
    showPersons: false,
    details: "",
    showView: false,
  };
  deleteStudentData = (index) => {
    const copy = this.state.persons;
    copy.splice(index, 1);
    this.setState({ person: copy });
  };
  showPersonsHandler = () => {
    const toggle = this.state.showPersons;
    this.setState({ showPersons: !toggle });
  };
  setFirstName = (element) => {
    this.setState({ studentFirstName: element.target.value });
    console.log(element.target.value);
  };
  setLastName = (element) => {
    this.setState({ studentLastName: element.target.value });
  };
  setAge = (element) => {
    this.setState({ studentAge: element.target.value });
  };
  setID = (element) => {
    this.setState({ studentID: element.target.value });
  };
  addStudentDetailsHandler = () => {
    const copyPersons = [...this.state.persons];
    console.log(copyPersons);
    let studentdetail = {};
    // if (
    //   this.state.studentFirstName &&
    //   this.state.studentLastName &&
    //   this.state.studentAge &&
    //   this.state.studentID === " "
    // ) {
    //   return;
    // }
    studentdetail = {
      id: this.state.studentID,
      firstname: this.state.studentFirstName,
      lastname: this.state.studentLastName,
      age: this.state.studentAge,
    };
    copyPersons.push(studentdetail);
    this.setState({ persons: copyPersons });
  };
  viewStudentDetailHandler = (detail) => {
    const toggle = this.state.showView;
    this.setState({ showView: !toggle });
    this.setState({ details: detail });
  };
  render() {
    let showAdd = null;
    if (this.state.showPersons) {
      showAdd = (
        <div className="addStudentData">
          <input
            type="text"
            placeholder="Enter your firstname"
            onChange={this.setFirstName}
          ></input>
          <input
            type="text"
            placeholder="Enter your lastname"
            onChange={this.setLastName}
          ></input>
          <input
            type="number"
            placeholder="Enter your age"
            onChange={this.setAge}
          ></input>
          <input
            type="text"
            placeholder="Enter your id"
            onChange={this.setID}
          ></input>
          <button onClick={this.addStudentDetailsHandler}>Submit</button>
        </div>
      );
    }
    let view = null;
    if (this.state.showView) {
      view = (
        <div className="viewCard">
          <div>First Name:{this.state.details.firstname}</div>
          <div>Last Name:{this.state.details.lastname}</div>
          <div>Age:{this.state.details.age}</div>
          <div>ID:{this.state.details.id}</div>
        </div>
      );
    }
    return (
      <div className="App">
        <header>
        <img className="studentLogo" src={require("./student-logo.jpg")} />
        <h1>Student App</h1>
        </header>
        <StudentTable
          studentdata={this.state.persons}
          delete={this.deleteStudentData}
          view={this.viewStudentDetailHandler}
        ></StudentTable>
        <button className="addButton"onClick={this.showPersonsHandler}>Add</button>
        {showAdd}
        {view}
      </div>
    );
  }
}
