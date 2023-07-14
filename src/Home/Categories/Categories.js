import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import imglogo from "../../assest/logo-removebg.png";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch your local data here
        const response = await fetch("Items.json");
        const jsonData = await response.json();
        console.log(jsonData.items);
        setData(jsonData.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-7 max-w-[1440px] my-7 mx-5 md:mx-40 justify-items-center">
      {data?.map((item) => (
        <div key={item.item} className="card w-full  shadow-xl ">
          <div className="relative">
            <div className="">
              <img src={item.img} alt={""} className="w-full h-72" />
              <div />
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
              <div className="bg-white text-gray-800 py-4 px-6">
                <h3 className="text-2xl font-bold font-serif mb-2 text-center">
                  {item.title}
                </h3>
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
