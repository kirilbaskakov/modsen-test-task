import React from "react";
import CardDescription from "../CardDescription/CardDescription";
import styled from "styled-components";
import { Link } from "react-router-dom";
import IArtwork from "../../types/IArtwork";
import LoadingImage from "../LoadingImage/LoadingImage";

const CardWrapper = styled.div`
  width: 100%;
  cursor: pointer;
  min-width: 0;
`;

const DescriptionWrapper = styled.div`
  position: relative;
  transform: translateY(-50%);
  padding: 1rem;
`;

const LargeCard = ({ artwork }: { artwork: IArtwork }) => {
  return (
    <CardWrapper>
      <Link to={`/details/${artwork.id}`}>
        <LoadingImage
          image_id={artwork.image_id}
          alt={artwork?.thumbnnail?.alt_text ?? artwork.title}
        />
      </Link>
      <DescriptionWrapper>
        <CardDescription artwork={artwork} withImage={false} />
      </DescriptionWrapper>
    </CardWrapper>
  );
};

export default LargeCard;
