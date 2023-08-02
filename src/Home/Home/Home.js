import React from "react";
import Categories from "../Categories/Categories";

import HomeSlide2 from "./HomeSlide2";
import HomeFoodCarousel from "./HomeFoodCarousel/HomeFoodCarousel";
import AboutFoodo from "../AboutFoodo/AboutFoodo";
import PhotoGallary from "../PhotoGallary/PhotoGallary";
import Chef from "../Chef/Chef";
import useTitle from "../../hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div id="home">
      {/* <div className="py-96 bg-gradient-to-r from-indigo-500"  style={{ backgroundImage: `url("https://i.ibb.co/fG1C9CD/h2-regular-items-bg-28bec6e3.png")` }}  >
            <h1 className='flex'>
               <img className='w-7 h-7' src={SVG} alt='' /> <small className='px-3 font-mono text-xl'>Welcome to Foodo</small><img className='w-7 h-7' src={SVG} alt='' /> 
            </h1>
            <div>
                <h1 className='text-7xl font-bold font-serif '>Find Your Best Healthy <br/> & Tasty Food</h1>
            </div>
            </div> */}

      <div>
        {/* <HomeSlider></HomeSlider> */}

        <HomeSlide2 />
        <HomeFoodCarousel />
        <AboutFoodo />
        <Categories />
        <PhotoGallary />
        <Chef />
      </div>
    </div>
  );
};

export default Home;
