import React from "react";
import AboutFoodo from "../../Home/AboutFoodo/AboutFoodo";

const AboutFoodoPage = () => {
  return (
    <div className="pt-28 pb-6">
      <AboutFoodo />
      <div>
        <div className="my-16">
          <h1 className="text-2xl text-center font-serif font-bold">
            How Foodo Food Delivery Service work
          </h1>
          <div className="flex flex-col  md:flex-row  justify-between items-center mx-10 text-center">
            <div className="flex flex-col items-center shadow-lg p-7 rounded-lg transition ease-in-out delay-100 hover:-translate-y-[784px, 1446px] hover:scale-110  duration-500  transition-transform">
              <img
                className="w-40 "
                src="https://i.ibb.co/2jr74RY/profile.gif"
                alt=""
              />
              <p className="font-serif text-xl">Create your Account</p>
            </div>
            <div className="flex flex-col items-center shadow-lg p-7 rounded-lg transition ease-in-out delay-100 hover:-translate-y-[784px, 1446px] hover:scale-110  duration-500  transition-transform">
              <img
                className="w-40"
                src="https://i.ibb.co/gzwTrKn/booking.gif"
                alt=""
              />
              <p className="font-serif text-xl">
                Order your desire Food Item's.
              </p>
            </div>
            <div className="flex flex-col items-center shadow-lg p-7 rounded-lg transition ease-in-out delay-100 hover:-translate-y-[784px, 1446px] hover:scale-110  duration-500  transition-transform">
              <img
                className="w-40"
                src="https://i.ibb.co/K0JtFxv/mobile-payment.gif"
                alt=""
              />
              <p className="font-serif text-xl">
                Make payment for your desire Food Item's.
              </p>
            </div>
            <div className="flex flex-col items-center shadow-lg p-7 rounded-lg transition ease-in-out delay-100 hover:-translate-y-[784px, 1446px] hover:scale-110  duration-500  transition-transform">
              <img
                className="w-40"
                src="https://i.ibb.co/HP3TydW/delivery.gif"
                alt=""
              />
              <p className="font-serif text-xl">

                Be ready to take you yummmmmy Food.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFoodoPage;
