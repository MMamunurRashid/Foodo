import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import { BounceLoader } from "react-spinners";
import useTitle from "../../../hooks/useTitle";

const AllOrdersForStaff = () => {
  useTitle("All Orders");
  const {
    data: orders = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await fetch("https://foodo-server.vercel.app/orders-for-staff", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      console.log(data[0].items);
      return data;
    },
  });

  // make paid of order
  const handlePaid = (id) => {
    fetch(`https://foodo-server.vercel.app/paid/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          toast.success(`Payment information recorded`);
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
          refetch();
        }
      });
  };
  // make serve of order
  const handleServe = (id) => {
    fetch(`https://foodo-server.vercel.app/serve/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          toast.success(`Food serve information recorded.`);
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
                  <td>
                    <button
                      onClick={() => handleServe(order._id)}
                      className="btn  btn-primary"
                    >
                      Serve
                    </button>
                  </td>
                ) : (
                  <td>Served</td>
                )}
                {order?.payStatus !== "paid" ? (
                  <td>
                    <button
                      onClick={() => handlePaid(order._id)}
                      className="btn btn-primary"
                    >
                      Pay
                    </button>
                  </td>
                ) : (
                  <td>Paid</td>
                )}

                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default AllOrdersForStaff;
