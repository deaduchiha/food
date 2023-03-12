import React from "react";

// components
import Attributes from "@/components/modules/landing/attributes/attributes";
import Banner from "@/components/modules/landing//banner/banner";
import Definition from "@/components/modules/landing//definition/definition";
import Company from "@/components/modules/landing//company/Company";
import Instruction from "@/components/modules/landing//instruction/instruction";
import Guide from "@/components/modules/landing//guide/guide";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Attributes />
      <Definition />
      <Company />
      <Instruction />
      <Guide />
    </>
  );
};

export default HomePage;
