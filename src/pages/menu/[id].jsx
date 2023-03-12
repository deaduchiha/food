import React from "react";

const Details = () => {
  return (
    <div>
      <span>details</span>
    </div>
  );
};
export default Details;

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:4000/data");
  const json = await res.json();
  const data = json.slice(0, 10);

  const paths = data.map((food) => ({ params: { id: food.id.toString() } }));

  return {
    paths,
    fallback: true,
  };
};
