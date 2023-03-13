import React from "react";
import { useRouter } from "next/router";

import DetailsPage from "@/components/templates/details/details";

const Details = ({ data }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h2>Loading...</h2>;
  }

  return <DetailsPage {...data} />;
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

export const getStaticProps = async (context) => {
  const {
    params: { id },
  } = context;
  const res = await fetch(`http://localhost:4000/data/${id}`);
  const data = await res.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
    revalidate: 10,
  };
};
