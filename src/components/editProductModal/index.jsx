import React, { useState } from "react";
import "./editProductModal.scss";
import axios from "../../api";
import { memo } from "react";

const EditProductModal = ({ setEdit, data, setReload }) => {
  const handleUpdate = (e) => {
    e.preventDefault();
    let updatedProduct = {
      title: data.title,
      price: data.price,
      image: data.image,
    };

    axios
      .put(`/products/${data.id}`, updatedProduct)
      .then((res) => {
        setEdit(null);
        setReload((prev) => !prev);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="modal">
        <div onClick={() => setEdit(null)} className="modal__overlay"></div>
        <form onSubmit={handleUpdate} action="" className="modal__form">
          <h2>Edit Product</h2>

          <input
            required
            value={data.title}
            onChange={(e) =>
              setEdit((prev) => ({ ...prev, title: e.target.value }))
            }
            type="text"
          />
          <input
            required
            value={data.price}
            onChange={(e) =>
              setEdit((prev) => ({ ...prev, price: e.target.value }))
            }
            type="text"
          />
          <input
            required
            value={data.image}
            onChange={(e) =>
              setEdit((prev) => ({ ...prev, image: e.target.value }))
            }
            type="text"
          />
          <button>Save</button>
          <button type="button" onClick={() => setEdit(null)}>
            Close
          </button>
        </form>
      </div>
    </>
  );
};

export default memo(EditProductModal);
