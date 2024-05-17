import React, { useRef, useState } from "react";
import "./createUsers.scss";
import axios from "../../../api";
import { toast } from "react-toastify";

const CreateUser = () => {
  let firstName = useRef();
  let lastName = useRef();
  let age = useRef();
  let gender = useRef();

  const handleCreate = (e) => {
    e.preventDefault();

    let createdUser = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      age: age.current.value,
      gender: gender.current.value,
    };

    axios
      .post("users", createdUser)
      .then((res) => {
        console.log(res);
        toast.success("added successfully");
      })
      .catch((err) => console.log(err));

    firstName.current.value = "";
    lastName.current.value = "";
    age.current.value = "";
    gender.current.value = "";
  };

  return (
    <section className="user">
      <h2 className="user__title">Create User</h2>

      <form onSubmit={handleCreate} action="" className="user__form">
        <input
          placeholder="Enter FirstName"
          required
          ref={firstName}
          type="text"
        />
        <input
          placeholder="Enter LastName"
          required
          ref={lastName}
          type="text"
        />
        <input placeholder="Enter age" required ref={age} type="text" />
        <input placeholder="Enter gender" required ref={gender} type="text" />
        <button>Create</button>
      </form>
    </section>
  );
};

export default CreateUser;
