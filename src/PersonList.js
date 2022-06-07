import React from "react";
import { connect } from "react-redux";
const map = (state) => {
  return {
    persons: state.person,
  };
};
const PersonList = (props) => {
  return (
    <div>
      <hr />
      {props.persons
        ? props.persons.map((person, key) => (
            <div key={key}>
              <div>Name: {person.name} </div>
              <div>Email: {person.email} </div>
              <hr />
            </div>
          ))
        : ""}
    </div>
  );
};

export default connect(map)(PersonList);
