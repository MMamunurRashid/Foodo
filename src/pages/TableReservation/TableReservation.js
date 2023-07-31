import React, { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";
import DatePicker from "./DatePicker";
import { toast } from "react-hot-toast";

const TableReservation = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleTableReservation = (data) => {
    // console.log(user.email, user.displayName, data);
    const tableReservation = {
      orderDate: new Date(),
      name: user.displayName,
      email: user.email,
      phone: data.phone,
      tableNumber: data.tableNumber,
      time: data.time,
      reservationDate: data.pickedDate,
    };
    console.log(tableReservation);
    // save  information to the database
    fetch("http://localhost:5000/table-reservation", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(tableReservation),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        toast.success(
          `Your Table Reservation successfully !!! Please come on time`
        );
        // navigate("/dashboard/my-table-reservation");
      });
  };

  const tableNumber = [
    { tableNumber: 1 },
    { tableNumber: 2 },
    { tableNumber: 3 },
    { tableNumber: 4 },
    { tableNumber: 5 },
    { tableNumber: 6 },
    { tableNumber: 7 },
    { tableNumber: 8 },
  ];
  const times = [
    { time: "9:00 am" },
    { time: "9:30 am" },
    { time: "10:00 am" },
    { time: "10:30 am" },
    { time: "11:00 am" },
    { time: "11:30 am" },
    { time: "12:00 pm" },
    { time: "12:30 pm" },
    { time: "1:00 pm" },
    { time: "1:30 pm" },
    { time: "2:00 pm" },
    { time: "2:30 pm" },
    { time: "3:00 pm" },
    { time: "3:30 pm" },
    { time: "4:00 pm" },
    { time: "4:30 pm" },
    { time: "5:00 pm" },
    { time: "5:30 pm" },
    { time: "6:00 pm" },
    { time: "6:30 pm" },
    { time: "7:00 pm" },
    { time: "7:30 pm" },
    { time: "8:00 pm" },
    { time: "8:30 pm" },
    { time: "9:00 pm" },
    { time: "9:30 pm" },
    { time: "10:00 pm" },
  ];
  return (
    <div
      className="py-20 px-60 "
      style={{
        backgroundImage: `url("https://i.ibb.co/djBBv9X/para-05.jpg`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "5px",
        width: "100%",
        height: "auto",
      }}
    >
      <h1 className="text-5xl font-serif font-bold text-white BerkshireSwash">
        Table Reservation
      </h1>
      <form
        onSubmit={handleSubmit(handleTableReservation)}
        className=" mt-10 mx-3 text-black"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="label">
              <span className="label-text text-white">Your Name</span>
            </label>
            <input
              required
              // {...register("name", {
              //   required: "Name is Required",
              // })}
              type="text"
              placeholder="Your Name"
              defaultValue={user?.displayName}
              disabled
              className="input w-full input-bordered"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text text-white">Your Email</span>
            </label>
            <input
              required
              // {...register("email", {
              //   required: "Email is Required",
              // })}
              type="email"
              placeholder="Email Address"
              defaultValue={user?.email}
              disabled
              className="input w-full input-bordered"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text text-white">Your Phone Number</span>
            </label>
            <input
              required
              {...register("phone", {
                required: "Phone number is Required",
              })}
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label className="label">
              <span className="label-text text-white">Select Table Number</span>
            </label>
            <select
              {...register("tableNumber", {})}
              className="select select-bordered w-full"
            >
              {tableNumber.map((p, idx) => (
                <option value={p.tableNumber} key={idx}>
                  {p.tableNumber}
                </option>
              ))}
            </select>
            {errors.tableNumber && (
              <p className="text-red-500">{errors.tableNumber.message}</p>
            )}
          </div>

          <DatePicker register={register} />
          {errors.pickedDate && (
            <p className="text-red-500">{errors.pickedDate.message}</p>
          )}
          <div>
            <label className="label">
              <span className="label-text text-white">Select Time</span>
            </label>
            <select
              {...register("time", {})}
              className="select select-bordered w-full"
            >
              {times.map((p, idx) => (
                <option value={p.time} key={idx}>
                  {p.time}
                </option>
              ))}
            </select>
            {errors.time && (
              <p className="text-red-500">{errors.time.message}</p>
            )}
          </div>
        </div>
        <br />
        <div className="w-1/2 m-auto">
          <input
            required
            className="btn btn-accent w-full"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default TableReservation;
