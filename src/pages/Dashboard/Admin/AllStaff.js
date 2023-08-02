import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BounceLoader } from "react-spinners";
import useTitle from "../../../hooks/useTitle";

const AllStaff = () => {
  useTitle("All Staff");
  const {
    data: staffs = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["staff"],
    queryFn: async () => {
      const res = await fetch("https://foodo-server.vercel.app/staff", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      // console.log(data);
      return data;
    },
  });

  const handleDelete = (id) => {
    // console.log("click", id);
    fetch(`https://foodo-server.vercel.app/staff/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if (data.deletedCount > 0) {
          toast.success("Seller deleted successfully");
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
        <h1 className="text-3xl">All Staff</h1>
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
            {staffs.map((staff, idx) => (
              <tr key={staff._id}>
                <th>{idx + 1}</th>
                <td>{staff.name}</td>
                <td>{staff.email}</td>
                <td>
                  <button
                    onClick={() => handleDelete(staff._id)}
                    className="btn btn-sm"
                  >
                    Delete Staff
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
export default AllStaff;
