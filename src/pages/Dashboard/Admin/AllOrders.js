import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

import { BounceLoader } from "react-spinners";

const AllOrders = () => {
  const {
    data: orders = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/orders", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      console.log(data[0].items);
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
        <h1 className="text-3xl">All Orders</h1>
        <table className="table sm:w-full table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>User Email</th>
              <th>Order Email</th>
              <th>Serve Status</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr key={order._id}>
                <th>{idx + 1}</th>
                <td>{order.items}</td>
                <td>{order.userEmail}</td>
                <td>{order.orderEmail}</td>
                {order?.serveStatus !== "served" ? (
                  <td>Not Serve yet</td>
                ) : (
                  <td>Served</td>
                )}
                {order?.payStatus !== "paid" ? (
                  <td>Not Pay yet</td>
                ) : (
                  <td>Paid</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default AllOrders;
