import React from "react";
import AboutFoodo from "../../Home/AboutFoodo/AboutFoodo";
import useTitle from "../../hooks/useTitle";

const AboutFoodoPage = () => {
  useTitle("About");
  return (
    <div className="pt-28 pb-6">
      <AboutFoodo />
    </div>
  );
};

export default AboutFoodoPage;
