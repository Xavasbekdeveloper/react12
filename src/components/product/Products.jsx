import React, { useState } from "react";
import "./products.scss";
import axios from "../../api";
import EditProductModal from "../editProductModal";

const Products = ({ data, isAdmin, setReload }) => {
  const [editProduct, setEditProduct] = useState(null);

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete")) {
      axios
        .delete(`/products/${id}`)
        .then((res) => {
          setReload((prev) => !prev);
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };

  let products = data?.map((product) => (
    <div key={product.id} className="products__card">
      <div className="products__card__img">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="products__card__info">
        <h3 className="products__card__title">{product.title}</h3>
        <p className="products__card__text">{product.category}</p>
        <p className="products__card__text">${product.price}</p>
        {isAdmin ? (
          <div className="products__card__btns">
            <button onClick={() => setEditProduct(product)}>Edit</button>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  ));
  return (
    <>
      <section className="products">
        <div className="container">
          <h1>Products</h1>
          <div className="products__cards">{products}</div>
        </div>
      </section>

      {editProduct ? (
        <EditProductModal
          setEdit={setEditProduct}
          data={editProduct}
          setReload={setReload}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Products;
