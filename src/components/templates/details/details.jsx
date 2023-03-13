import FoodDetails from "@/components/modules/menu/details/details";
import Introduction from "@/components/modules/menu/details/introduction";
import React from "react";

const DetailsPage = (props) => {
  return (
    <>
      <FoodDetails {...props} />
      <Introduction {...props} />
    </>
  );
};

export default DetailsPage;
