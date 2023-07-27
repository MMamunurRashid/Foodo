import React from "react";
import "./Cart.css";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-hot-toast";

const OrderCart = ({ cart, setCart }) => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function calculateTotalPrice(cart) {
    let totalPrice = 0;
    for (const item of cart) {
      totalPrice += item.price;
    }
    return totalPrice;
  }
  const totalPrice = calculateTotalPrice(cart);
  // console.log("Total Price:", totalPrice);
  const tax = parseInt((totalPrice * 0.15).toFixed(2));
  const delivery = 50;
  const grandTotal = tax + totalPrice + delivery;
  // console.log(grandTotal);

  //handle delete from cart
  const handleAddToDelete = (id) => {
    const removeItem = cart.filter((item) => item._id !== id);
    setCart(removeItem);
  };

  const titlesArray = cart.map((obj) => obj.title);
  // console.log(titlesArray);
  //handle order
  const handleOrder = (data) => {
    const orderDetails = {
      bookingDate: new Date(),
      items: titlesArray,
      price: totalPrice,
      tax: tax,
      delivery: delivery,
      totalPrice: grandTotal,
      userName: user.displayName,
      userEmail: user.email,
      orderEmail: data.email,
      phoneNumber: data.mobileNumber,
      location: data.location,
    };
    console.log(orderDetails);

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if (data.acknowledged) {
          toast.success(
            "You Order is confirmed!! your food is going to delivery"
          );
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div className="cart bg-slate-500 w-5/12 text-white ">
      <h2 className="text-2xl">Cart Summary</h2>
      {cart?.length === 0 && (
        <p className="text-xl">No item selected, Please add to cart</p>
      )}
      {cart.map((item, idx) => (
        <div key={idx} className="shadow m-3">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-lg">Item: {item.title}</h4>
              <p className="text-lg">Price: {item.price}</p>
            </div>
            <button
              onClick={() => handleAddToDelete(item._id)}
              className="btn btn-circle btn-outline btn-error"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}

      {/* Show Grand Total */}

      {cart?.length > 0 && (
        <div>
          <div className="ml-10">
            <p className="text-lg">Total Price : ৳ {totalPrice}</p>
            <p className="text-lg">Total Tax : ৳{tax}</p>
            <p className="text-lg">Delivery Charge: ৳{delivery}</p>
            <p className="text-xl shadow font-bold">
              Total Bill : ৳{grandTotal}
            </p>
          </div>
          <div className="flex justify-center mt-10 text-black">
            <div className="form-control   w-full">
              <form onSubmit={handleSubmit(handleOrder)}>
                <div className="form-control items-center">
                  <input
                    type="text"
                    placeholder="Enter your Location"
                    {...register("location", { required: true, maxLength: 80 })}
                    required
                    className="input input-bordered w-2/3 my-1 "
                  />
                </div>
                <div className="form-control items-center">
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    defaultValue={user.email}
                    {...register("email", {
                      required: true,
                    })}
                    className="input input-bordered w-2/3 my-1 "
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>
                <div className="form-control items-center ">
                  <input
                    type="tel"
                    placeholder="Mobile number"
                    {...register("mobileNumber", {
                      required: true,
                      minLength: 6,
                      maxLength: 12,
                    })}
                    className="input input-bordered w-2/3 my-1 "
                  />
                  {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}
                </div>

                <div className="form-control items-center">
                  <input
                    className="btn btn-accent  w-3/4 mt-3"
                    value="Proceed to complete order"
                    type="submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderCart;
