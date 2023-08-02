import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BounceLoader } from "react-spinners";
import useTitle from "../../../hooks/useTitle";

const AllAdmin = () => {
  useTitle("All Admin");
  const {
    data: admin = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["admin"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/admin", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      // console.log(data);
      return data;
    },
  });
  //make staff
  const handleMakeStaffOnly = (_id) => {
    fetch(`http://localhost:5000/users/staff/${_id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Admin demote as Staff Successfully");
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
      <div>
        <h1 className="text-3xl">All Admin</h1>
        <table className="table sm:w-full table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {admin.map((staff, idx) => (
              <tr key={staff._id}>
                <th>{idx + 1}</th>
                <td>{staff.name}</td>
                <td>{staff.email}</td>
                <td>
                  <button
                    onClick={() => handleMakeStaffOnly(staff._id)}
                    className="btn btn-sm"
                  >
                    Make Staff Only
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default AllAdmin;
