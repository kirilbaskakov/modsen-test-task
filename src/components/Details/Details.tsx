import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FavButton from "../FavButton/FavButton";
import IArtwork from "../../types/IArtwork";
import LoadingImage from "../LoadingImage/LoadingImage";
import Loader from "../Loader";

const DetailsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;

  @media (min-width: 768px) {
    width: 60%;
  }

  @media (min-width: 1280px) {
    width: 45%;
  }
`;

const FavButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 0.75rem;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #393939;
  margin: 0;
  font-weight: 400;
`;

const Author = styled.h2`
  color: #e0a449;
  font-size: 24px;
  margin: 0;
  margin-top: 1.5rem;
`;

const Year = styled.span`
  color: #393939;
  font-size: 16px;
  font-weight: 700;
  line-height: 2.5em;
`;

const OverviewWrapper = styled.div`
  margin-top: 2rem;

  @media (min-width: 768px) {
    margin-top: 0;
    position: absolute;
    bottom: 0;
  }
`;

const OverviewList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  margin-top: 2rem;
`;

const OverviewItem = styled.li`
  margin-top: 1rem;
  font-size: 16px;
`;

const Hightlighted = styled.span`
  color: #e0a449;
`;

const Details = ({ id }: { id: number }) => {
  const [artwork, setArtwork] = useState<IArtwork | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.artic.edu/api/v1/artworks/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setArtwork(data.data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <DetailsWrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ImageWrapper>
            <LoadingImage image_id={artwork?.image_id} />
            <FavButtonWrapper>
              <FavButton id={id} />
            </FavButtonWrapper>
          </ImageWrapper>
          <div>
            <Title>{artwork?.title}</Title>
            <Author>
              {artwork?.artist_title ? artwork?.artist_title : "Unknown"}
            </Author>
            <Year>
              {artwork?.date_start}-{artwork?.date_end}
            </Year>
            <OverviewWrapper>
              <Title>Overview</Title>
              <OverviewList>
                <OverviewItem>
                  <Hightlighted>Artist nationality:</Hightlighted> German
                </OverviewItem>
                <OverviewItem>
                  <Hightlighted>Dimensions Sheet:</Hightlighted>{" "}
                  {artwork?.dimensions}
                </OverviewItem>
                <OverviewItem>
                  <Hightlighted>Credit Line:</Hightlighted>{" "}
                  {artwork?.credit_line}
                </OverviewItem>
                <OverviewItem>
                  <Hightlighted>Repository:</Hightlighted>{" "}
                  {artwork?.credit_line}
                </OverviewItem>
              </OverviewList>
            </OverviewWrapper>
          </div>
        </>
      )}
    </DetailsWrapper>
  );
};

export default Details;
