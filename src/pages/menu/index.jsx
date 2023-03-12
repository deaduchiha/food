import React from "react";

import MenuPage from "@/components/templates/menu/menuPage";

const Menu = ({ data }) => {
  return <MenuPage data={data} />;
};

export default Menu;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:4000/data");
  const data = await res.json();

  return {
    props: { data },
    revalidate: 10, // second
  };
};
