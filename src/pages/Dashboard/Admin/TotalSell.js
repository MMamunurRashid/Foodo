import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { BounceLoader } from "react-spinners";

const TotalSell = () => {


    // const Today = new Date().toISOString().split("T")[0];
    // console.log(" date ", Today);
    // const orderDates = ("2023-07-27T14:09:26.754Z").split("T")[0];
    // console.log("order date ", orderDates);
    // const {
    //     data: orders = [],
    // } = useQuery({
    //     queryKey: ["users"],
    //     queryFn: async () => {
    //         const res = await fetch("http://localhost:5000/orders", {
    //             headers: {
    //                 authorization: `bearer ${localStorage.getItem("accessToken")}`,
    //             },
    //         });
    //         const data = await res.json();
    //         return data;
    //     },
    // });

    // const ordersDate = orders.map((order) => (order.orderDate));
    // // // Extract date only from each timestamp and create a new array
    // // const datesOnlyArray = ordersDate.map(timestamp => timestamp.split('T')[0]);

    // // const orderDate = datesOnlyArray.join(',');

    // // console.log(orderDate);
    // // Get today's date
    // const today = new Date();
    // const todayDateOnly = today.toISOString().split('T')[0];

    // // Compare each date in the array with today's date
    // ordersDate.forEach(timestamp => {
    //     const dateOnly = timestamp.split('T')[0];
    //     if (dateOnly === todayDateOnly) {
    //         console.log(`Date "${dateOnly}" in the array matches today's date.`);
    //     } else {
    //         console.log(`Date "${dateOnly}" in the array does not match today's date.`);
    //     }
    // });
    // // // is loading

    // // if (isLoading) {
    // //     return (
    // //         <div>
    // //             <div className="flex justify-center items-center w-full h-screen">
    // //                 <BounceLoader
    // //                     color="#d63636"
    // //                     cssOverride={{}}
    // //                     loading
    // //                     size={150}
    // //                     speedMultiplier={1}
    // //                 />
    // //             </div>
    // //         </div>
    // //     );
    // // }
    // // console.log(users);
    return (
        <div>
            <h1>Total Sell</h1>
            <select className="select select-bordered w-full max-w-xs">
                <option selected>Today</option>
                <option>This Month</option>
                <option>Last Month</option>
            </select>
        </div>
    );
};

export default TotalSell;