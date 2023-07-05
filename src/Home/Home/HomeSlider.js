import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/vertical.css";

const HomeSlider = () => {
  const content = [
    {
      title: "Welcome to Foodo",
      description: "Indulge in exquisite flavors from around the world.",
      image: "https://i.ibb.co/fG1C9CD/h2-regular-items-bg-28bec6e3.png",

      button: "Make a Reservation",
      buttonLink: "/reservation",
    },
    {
      title: "Enjoy a Memorable Dining Experience",
      description:
        "Immerse yourself in a cozy ambiance and exceptional service.",
      image: "https://i.ibb.co/m4Lzz8J/h2-reservation-bg-ca77ecb0.png",
      button: "View Our Menu",
      buttonLink: "/reservation",
    },
    {
      title: "Find Best Healthy & Tasty Food",
      description:
        "Join us from 5 PM to 7 PM for discounted drinks and appetizers.",
      image: "https://i.ibb.co/q1GZFWT/bredcumb-bg-041384dd.png",
      button: "Explore Our Food",
      buttonLink: "/happy-hour",
    },
  ];
  return (
    <Slider autoplay={3000} direction="vertical">
      {content.map((item, index) => (
        <div
          key={index}
          style={{
            background: `url('${item.image}') no-repeat center center`,
            backgroundSize: '100% 700px' // Set the background image height here
          }}
        >
          <div className="ml-14 mt-32 ">
            <h1 className="md:text-7xl text-2xl text-yellow-50 font-['Noto Serif'] ">
              {item.title}
            </h1>
            <p>{item.description}</p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-2 px-4 rounded-full shadow-lg ml-32 my-10">
              {item.button}
            </button>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HomeSlider;
