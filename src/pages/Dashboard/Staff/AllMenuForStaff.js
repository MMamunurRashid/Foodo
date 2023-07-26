import { useQuery } from "@tanstack/react-query";

import React, { useContext } from "react";

import { AuthContext } from "../../../Context/AuthProvider";

const AllMenu = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/menu`;
  const { data: Items = [] } = useQuery({
    queryKey: ["item", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="">
      <h1 className="text-3xl mb-3">Our Menu Items</h1>
      <table className="table sm:w-full table-zebra">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Item Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {Items.map((item, idx) => (
            <tr key={item._id}>
              <th>{idx + 1}</th>
              <th>
                <div className="avatar">
                  <div className="rounded w-24 h-24">
                    <img src={item.img} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </th>
              <td>{item.title}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllMenu;
