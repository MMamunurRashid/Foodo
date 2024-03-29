// import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

import { useState } from "react";
import { useEffect } from "react";
import { BounceLoader } from "react-spinners";
import { useQuery } from "@tanstack/react-query";
import useTitle from "../../../hooks/useTitle";

const AllUsers = () => {
  useTitle("All Users");
  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://foodo-server.vercel.app/users", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  console.log(users);

  //make staff
  const handleMakeStaff = (_id) => {
    fetch(`https://foodo-server.vercel.app/users/staff/${_id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("New Staff added Successfully");
          refetch();
        }
      });
  };
  //make admin
  const handleMakeAdmin = (id) => {
    fetch(`https://foodo-server.vercel.app/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("New Admin added Successfully");
          refetch();
        }
      });
  };

  // is loading

  if (isLoading) {
    return (
      <div>
        <div className="flex justify-center items-center w-full h-screen">
          <BounceLoader
            color="#d63636"
            cssOverride={{}}
            loading
            size={150}
            speedMultiplier={1}
          />
        </div>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-3xl">All Users</h1>
      <table className="table sm:w-full table-zebra">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Make Staff</th>
            <th>Make Admin</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={user._id}>
              <th>{idx + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user?.role ? user.role : user.option}</td>
              <td>
                {user?.role !== "staff" && (
                  <button
                    onClick={() => handleMakeStaff(user._id)}
                    className="btn btn-primary"
                  >
                    Make Staff
                  </button>
                )}
              </td>
              <td>
                {user?.role !== "admin" && (
                  <button
                    onClick={() => handleMakeAdmin(user._id)}
                    className="btn btn-primary"
                  >
                    Make Admin
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
