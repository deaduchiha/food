import React from "react";

// components
import Attributes from "@/components/modules/attributes/attributes";
import Banner from "@/components/modules/banner/banner";
import Definition from "@/components/modules/definition/definition";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Attributes />
      <Definition />
    </>
  );
};

export default HomePage;
