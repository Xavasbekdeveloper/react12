import React, { useRef, useState } from "react";
import "./createproduct.scss";
import axios from "../../../api";
import { toast } from "react-toastify";

const CreateProduct = () => {
  let name = useRef();
  let price = useRef();
  let image = useRef();

  const handleCreate = (e) => {
    e.preventDefault();

    let newProduct = {
      title: name.current.value,
      price: price.current.value,
      image: image.current.value,
    };

    axios
      .post("/products", newProduct)
      .then((res) => {
        console.log(res);
        toast.success("Added product successfully");
      })
      .catch((err) => console.log(err));

    name.current.value = "";
    price.current.value = "";
    image.current.value = "";
  };

  return (
    <div className="create">
      <h2>CreateProduct</h2>

      <form onSubmit={handleCreate} className="form" action="">
        <input
          required
          ref={name}
          type="text"
          placeholder="enter Product name"
        />
        <input
          required
          ref={price}
          type="text"
          placeholder="enter Product price"
        />
        <input
          required
          ref={image}
          type="text"
          placeholder="enter Product img url"
        />
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateProduct;
