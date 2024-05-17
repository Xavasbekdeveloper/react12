import React, { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import UsersInfo from "../../../components/users-info";

const ManageUser = () => {
  const [reload, setReload] = useState(true);
  let { data, loading, error, setData } = useFetch("/users", reload);
  return (
    <>
      <div>
        <UsersInfo isAdmin={true} data={data} setReload={setReload} />
      </div>
    </>
  );
};

export default ManageUser;
