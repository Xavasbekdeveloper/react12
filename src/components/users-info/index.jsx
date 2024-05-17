import React, { useState } from "react";
import "./users.scss";
import axios from "../../api";
import EditUserModal from "../editUserModal";

const UsersInfo = ({ data, isAdmin, setReload }) => {
  const [editUser, setEditUser] = useState(null);

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete")) {
      axios
        .delete(`/users/${id}`)
        .then((res) => {
          setReload((prev) => !prev);
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };

  let users = data?.map((user) => (
    <div key={user.id} className="users__card">
      <div className="users__card__img">
        <img src={user.image} alt="" />
      </div>
      <div className="users__card__info">
        <h3 className="users__card__title">
          {user.firstName} {user.lastName}
        </h3>
        <p className="users__card__text">Age: {user.age}</p>
        <p className="users__card__text">Gender: {user.gender}</p>
        <p className="users__card__text">isMarried: {user.isMarried}</p>
        {isAdmin ? (
          <div className="users__card__btns">
            <button onClick={() => setEditUser(user)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  ));
  return (
    <>
      <section className="users">
        <div className="container">
          <h1 className="users__title">Users</h1>
          <div className="users__cards">{users}</div>
        </div>
      </section>

      {editUser ? (
        <EditUserModal
          setEditUser={setEditUser}
          data={editUser}
          setReload={setReload}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default UsersInfo;
