import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import imglogo from '../../assest/logo-removebg.png'

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const jsonData = await response.json();
      setData(jsonData.categories);
      console.log(jsonData.categories);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 max-w-[1440px] my-7 mx-auto justify-items-center">
      {data.map((item) => (
        <div key={item.idCategory} className="card w-96  shadow-xl ">
          

          <div className="relative">
            <div className="">
              <img src={item.strCategoryThumb} alt={""} className="w-full " />
              <div />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-opacity-60 hover:opacity-100 transition-opacity duration-300">
                <Link to="/login">
                <button  className="bg-slate-300 text-gray-800 font-bold py-2 px-4 rounded shadow">
                  <svg
                    className="w-14 h-14"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  View
                </button></Link>
              </div>
              <div className="bg-white text-gray-800 py-4 px-6">
                <h3 className="text-2xl font-bold font-serif mb-2 text-center">{item.strCategory}</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
      <img src={imglogo} alt="" />
    </div>
  );
}

export default Home;
