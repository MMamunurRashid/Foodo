import React, { useEffect, useState } from "react";
import "../../Font/Font.css";
import { BsPlusCircle } from "react-icons/bs";
import OrderCart from "./OrderCart";
import useTitle from "../../hooks/useTitle";
import { useNavigation } from "react-router-dom";
import { BounceLoader } from "react-spinners";


const OrderPage = () => {
  useTitle("Order");
  const [items, setItems] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch your local data here
        const response = await fetch("https://foodo-server.vercel.app/menu");
        const jsonData = await response.json();
        // console.log(jsonData);
        setItems(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [cart, setCart] = useState([]);
  const handleAddToCart = (selectedItem) => {
    if (cart) {
      const newCart = [...cart, selectedItem];
      setCart(newCart);
    }
  };

  // is loading

  if (navigation.state === "loading") {
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
    <div className="pt-20">
      <h1 className="text-center BerkshireSwash sm:text-4xl ">Order</h1>
      <div className="flex">
        <div className="sm:w-7/12">
          {/* Food table */}
          <table className="table  sm:w-full table-zebra text-lg">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>Item Name</th>
                <th>Price</th>
                <th>add to cart</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, idx) => (
                <tr key={item._id}>
                  <th>{idx + 1}</th>
                  <th>
                    <div className="avatar">
                      <div className="rounded w-24 h-24">
                        <img
                          src={item.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </th>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td onClick={() => handleAddToCart(item)}>
                    <BsPlusCircle className="w-8 h-8 hover:cursor-pointer hover:text-blue-700" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Cart */}

        <OrderCart cart={cart} setCart={setCart}></OrderCart>
      </div>
    </div>
  );
};

export default OrderPage;
