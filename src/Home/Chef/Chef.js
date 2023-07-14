import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
const Chef = () => {
  const chefs = [
    {
      name: "John Smith",
      designation: "Head Chef",
      img: "https://i.ibb.co/Tkrt5GL/chef-kitchen1.png",
    },
    {
      name: "Maria Rodriguez",
      designation: "Sous Chef",
      img: "https://i.ibb.co/J3jV5Xn/chef-kitchen2.png",
    },
    {
      name: "David Lee",
      designation: "Pastry Chef",
      img: "https://i.ibb.co/ZTBfWy6/chef-kitchen3.png",
    },
  ];

  return (
    <div>
      <div className="text-center">
        <span className=" flex justify-center text-xl md:text-2xl BerkshireSwash ">
          <img
            className="mr-2 w-5 md:w-10"
            src="https://demo.egenslab.com/html/restho/preview/assets/images/icon/sub-title-vec.svg"
            alt=""
          />
          Our Expertise
          <img
            className="ml-2 w-5 md:w-10"
            src="https://demo.egenslab.com/html/restho/preview/assets/images/icon/sub-title-vec.svg"
            alt=""
          />
        </span>
        <h1 className="text-2xl md:text-4xl font-serif font-bold">
          Foodo's Best Chef Team
        </h1>
      </div>
      {/* Chef team */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-7 max-w-[1440px] my-7 mx-5 md:mx-32 justify-items-center">
        {chefs?.map((item, i) => (
          <div
            key={i}
            className="card card-compact w-full bg-base-100 shadow-xl"
          >
            <figure>
              <img src={item.img} alt="Shoes" />
            </figure>
            <div className="card-body text-center">
              <h2 className=" font-serif font-semibold text-2xl">
                {item.name}
              </h2>
              <p className="text-lg">{item.designation}</p>
            </div>
            <div className="flex justify-evenly mb-5 ">
              <Link to={"https://www.facebook.com/"}>
                <BsFacebook className="w-7 h-7" />
              </Link>
              <Link to={"https://www.instagram.com/"}>
                <BsInstagram className="w-7 h-7" />
              </Link>
              <Link to={"https://www.linkedin.com/"}>
                <BsLinkedin className="w-7 h-7" />
              </Link>
              <Link to={"https://www.twitter.com/"}>
                <BsTwitter className="w-7 h-7" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chef;
