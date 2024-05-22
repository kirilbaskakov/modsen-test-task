import React from "react";
import { useParams } from "react-router-dom";
import Details from "../components/Details/Details";

const DetailsPage = () => {
  const { id } = useParams();
  return (
    <div>
      <Details />
    </div>
  );
};

export default DetailsPage;
