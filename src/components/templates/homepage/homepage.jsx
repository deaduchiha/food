import React from "react";

// components
import Attributes from "@/components/modules/attributes/attributes";
import Banner from "@/components/modules/banner/banner";
import Definition from "@/components/modules/definition/definition";
import Company from "@/components/modules/company/Company";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Attributes />
      <Definition />
      <Company />
    </>
  );
};

export default HomePage;
