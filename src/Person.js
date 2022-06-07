import React from "react";
import { useState } from "react";
import PersonList from "./PersonList";
import { connect } from "react-redux";

const map = (dispatch) => {
  return {
    addPerson: (person) => dispatch(person),
  };
};

const Person = (props) => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");

  const nameHandler = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  };

  const mailHandler = (event) => {
    setMail(event.target.value);
    console.log(event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    props.addPerson({
      type: "create",
      data: {
        id: Date.now(),
        name: name,
        email: mail,
      },
    });
  };

  return (
    <div>
      <form onSubmit={submit}>
        <label htmlFor="name">Nom:</label>
        <input type="text" id="name" onChange={nameHandler} value={name} />

        <label htmlFor="email">@email:</label>
        <input type="text" id="email" onChange={mailHandler} value={mail} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default connect(null, map)(Person);
