import React from "react";
import styled from "styled-components";
import CardDescription from "../CardDescription/CardDescription";
import IArtwork from "../../types/IArtwork";

const CardListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const CardList = ({ artworks }: { artworks: IArtwork[] }) => {
  return (
    <CardListWrapper>
      {artworks.map((artwork) => (
        <CardDescription key={artwork.id} artwork={artwork} withImage={true} />
      ))}
    </CardListWrapper>
  );
};

export default CardList;
