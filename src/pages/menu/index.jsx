import React from "react";

import MenuPage from "@/components/templates/menu/menuPage";

const Menu = ({ data }) => {
  return <MenuPage data={data} />;
};

export default Menu;

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();

  return {
    props: { data },
    revalidate: 1800, // second => 30min
  };
};
