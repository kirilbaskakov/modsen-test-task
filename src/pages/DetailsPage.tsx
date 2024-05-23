import React from "react";
import { useParams } from "react-router-dom";
import Details from "../components/Details/Details";

const DetailsPage = () => {
  const { id }: { id?: number } = useParams();
  return <div>{id && <Details id={id} />}</div>;
};

export default DetailsPage;
