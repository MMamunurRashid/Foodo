import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch your local data here
        const response = await fetch("http://localhost:5000/menu");
        const jsonData = await response.json();
        // console.log(jsonData);
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="mt-0 pt-28 mb-5" id="menu">
      <div className="text-center">
        <span className=" flex justify-center text-xl md:text-2xl BerkshireSwash ">
          <img
            className="mr-2 w-5 md:w-10"
            src="https://demo.egenslab.com/html/restho/preview/assets/images/icon/sub-title-vec.svg"
            alt=""
          />
          Food Menu
          <img
            className="ml-2 w-5 md:w-10"
            src="https://demo.egenslab.com/html/restho/preview/assets/images/icon/sub-title-vec.svg"
            alt=""
          />
        </span>
        <h1 className="text-2xl md:text-4xl font-serif font-bold">
          Find your desire meal from our Food Items
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-7 max-w-[1440px] my-7 mx-5 md:mx-20 justify-items-center">
        {data?.map((item) => (
          <div key={item.item} className="card w-full  shadow-xl ">
            <div className="relative">
              <div className="">
                <img src={item.img} alt={""} className="w-full h-60" />
                <div />
                {/* image  hover view button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <Link to="/login">
                    <button className="bg-slate-300 text-gray-800 font-bold py-2 px-4 rounded shadow">
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
                    </button>
                  </Link>
                </div>
                <div>
                  <div className="absolute top-6 text-xl bg-slate-200 p-3">
                    <p>৳ {item.price}</p>
                  </div>
                  <div className="bg-white text-gray-800 py-4 px-6">
                    <h3 className="text-2xl font-bold font-serif mb-2 text-center">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
