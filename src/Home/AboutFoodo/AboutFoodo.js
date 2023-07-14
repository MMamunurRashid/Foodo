import React from "react";

const AboutFoodo = () => {
  return (
    <div className="  flex-row md:flex mx-5">
      {/* Picture part */}

      <div className="w-full">
        <img
          src="https://demo.egenslab.com/html/restho/preview/assets/images/bg/h2-about-img-full.png"
          alt=""
        />
      </div>

      {/* About part */}
      <div className="w-full md:mx-20 ">
        <span className=" flex text-2xl md:text-4xl BerkshireSwash">
          <img
            className="mr-2 w-5 md:w-10"
            src="https://demo.egenslab.com/html/restho/preview/assets/images/icon/sub-title-vec.svg"
            alt=""
          />
          About Foodo
          <img
            className="ml-2 w-5 md:w-10"
            src="https://demo.egenslab.com/html/restho/preview/assets/images/icon/sub-title-vec.svg"
            alt=""
          />
        </span>

        <h1 className="text-4xl  md:text-7xl font-bold CrimsonText ">
          Find Best Healthy & Tasty Food
        </h1>
        <p className="text-xl md:mt-20 mt-5 text-justify JosefinSans">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>

        <div className="flex mt-4 md:mt-8">
          <div className="flex items-center">
            <div className=" p-3 border-orange-300 border-[2px] rounded-md">
              <img
                className="w-16 h-14"
                src="https://demo.egenslab.com/html/restho/preview/assets/images/icon/h2-about1.svg"
                alt=""
              />
            </div>
            <div className="ml-2 ">
              <p className="text-xl font-semibold font-serif">
                Pure Fresh Food.
              </p>
              <p className="text-lg">
                We are serve different type of fresh food.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className=" p-3 border-orange-300 border-[2px] rounded-md">
              <img
                className="w-16 h-14"
                src="https://demo.egenslab.com/html/restho/preview/assets/images/icon/h2-about2.svg"
                alt=""
              />
            </div>
            <div className="ml-2 ">
              <p className="text-xl font-semibold font-serif">
                Expertise Chef.
              </p>
              <p className="text-lg">We have some brilliant chef team.</p>
            </div>
          </div>
        </div>
        <div className="mt-4 md:mt-8">
          <button className="btn btn-outline btn-xs px-1 transition-transform duration-500 transform ease-in-out hover:scale-110">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutFoodo;
