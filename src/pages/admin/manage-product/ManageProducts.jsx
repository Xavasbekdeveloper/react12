import { useState } from "react";
import Products from "../../../components/product/Products";
import useFetch from "../../../hooks/useFetch";

const ManageProducts = () => {
  const [reload, setReload] = useState(true);
  let { data, loading, error, setData } = useFetch("/products", reload);
  return (
    <div>
      <Products isAdmin={true} data={data} setReload={setReload} />
    </div>
  );
};

export default ManageProducts;
