import { useQuery } from "@tanstack/react-query";

import React, { useContext } from "react";
import toast from "react-hot-toast";

import { AuthContext } from "../../../Context/AuthProvider";
import { Link } from "react-router-dom";

const AllMenu = () => {
  const { user } = useContext(AuthContext);

  const url = `https://foodo-server.vercel.app/menu`;
  const {
    data: Items = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["products", user?.email],
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

  const handleDelete = (id) => {
    console.log("click", id);
    fetch(`https://foodo-server.vercel.app/menu/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`Product deleted successfully`);
        }
      });
  };
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
            <th>Delete Item</th>
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
              <td>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn btn-xs btn-primary"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllMenu;
