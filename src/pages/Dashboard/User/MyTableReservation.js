import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useContext } from "react";

import { BounceLoader } from "react-spinners";
import { AuthContext } from "../../../Context/AuthProvider";
import useTitle from "../../../hooks/useTitle";

const UserOrder = () => {
  useTitle("My Table Reservation");
  const { user } = useContext(AuthContext);
  const {
    data: orders = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/my-table-reservation?email=${user.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

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
        <h1 className="text-3xl">My Orders</h1>
        <table className="table sm:w-full table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Reserve Date</th>
              <th>Time</th>
              <th>Table Number</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr key={order._id}>
                <th>{idx + 1}</th>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.reservationDate}</td>
                <td>{order.time}</td>
                <td>{order.tableNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default UserOrder;
