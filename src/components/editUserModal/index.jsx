import React, { memo } from "react";
import axios from "../../api";
import "./ediUserModal.scss";

const EditUserModal = ({ data, setEditUser, setReload }) => {
  console.log(data);
  const handleEditUser = (e) => {
    e.preventDefault();

    let updatedUser = {
      firstName: data.firstName,
      lastName: data.lastName,
      age: data.age,
      gender: data.gender,
      isMarried: data.isMarried,
    };

    axios
      .put(`/users/${data.id}`, updatedUser)
      .then((res) => {
        setEditUser(null);
        setReload((prev) => !prev);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="modal">
        <div onClick={() => setEditUser(null)} className="modal__overlay"></div>
        <form onSubmit={handleEditUser} action="" className="modal__form">
          <h3>Edit User</h3>
          <input
            required
            value={data.firstName}
            onChange={(e) =>
              setEditUser((prev) => ({ ...prev, firstName: e.target.value }))
            }
            type="text"
          />
          <input
            required
            value={data.lastName}
            onChange={(e) =>
              setEditUser((prev) => ({ ...prev, lastName: e.target.value }))
            }
            type="text"
          />
          <input
            required
            value={data.age}
            onChange={(e) =>
              setEditUser((prev) => ({ ...prev, age: e.target.value }))
            }
            type="text"
          />
          <input
            required
            value={data.gender}
            onChange={(e) =>
              setEditUser((prev) => ({ ...prev, gender: e.target.value }))
            }
            type="text"
          />
          <input
            required
            value={data.isMarried}
            onChange={(e) =>
              setEditUser((prev) => ({ ...prev, isMarried: e.target.value }))
            }
            type="text"
          />
          <button>Save</button>
          <button type="button" onClick={() => setEditUser(null)}>
            Close
          </button>
        </form>
      </div>
    </>
  );
};

export default memo(EditUserModal);
