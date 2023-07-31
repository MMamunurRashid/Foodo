import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./styles.css";
import "../../Font/Font.css";
import { Link } from "react-router-dom";

const HomeSlide2 = () => {
  const content = [
    {
      title: "Welcome to Foodo",
      description: "Indulge in exquisite flavors from around the world.",
      image: "https://i.ibb.co/fG1C9CD/h2-regular-items-bg-28bec6e3.png",

      button: "Make a Reservation",
      buttonLink: "/table-reservation",
    },
    {
      title: "Enjoy a Memorable Dining Experience",
      description:
        "Immerse yourself in a cozy ambiance and exceptional service.",
      image: "https://i.ibb.co/m4Lzz8J/h2-reservation-bg-ca77ecb0.png",
      button: "View Our Menu",
      buttonLink: "/menu",
    },
    {
      title: "Find Best Healthy & Tasty Food",
      description:
        "Join us from 5 PM to 7 PM for discounted drinks and appetizers.",
      image: "https://i.ibb.co/q1GZFWT/bredcumb-bg-041384dd.png",
      button: "Explore Our Food",
      buttonLink: "/menu",
    },
  ];
  return (
    <div className="shadow-2xl shadow-slate-900 rounded-md pt-20">
      <div>
        <Slider autoplay={1500} className="slider-wrapper">
          {content.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{
                background: `url('${item.image}') no-repeat center center`,
                borderRadius: "5px",
              }}
            >
              <div className="inner">
                <h1 className="NotoSerif">{item.title}</h1>
                <p className="JosefinSans">{item.description}</p>
                <Link to={item.buttonLink} className="PtSerif">
                  <button> {item.button}</button>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeSlide2;
