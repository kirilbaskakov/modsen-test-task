import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import FavButton from "../FavButton/FavButton";
import IArtwork from "../../types/IArtwork";
import LoadingImage from "../LoadingImage/LoadingImage";

const CardWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: #fff;
  padding: 0.75rem 0.5rem;
  min-width: 0;
`;

const ImageWrapper = styled.div`
  width: 90px;
  height: 90px;
`;

const Text = styled.div`
  align-self: flex-start;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  text-align: start;
`;

const Title = styled.h3`
  margin: 0;
  padding: 0;
  width: 100%;
  color: #393939;
  font-size: 17px;
  font-weight: 500;
  line-height: 1.75em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Author = styled.span`
  color: #e0a449;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Domain = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: #393939;
  margin-top: 0.75rem;
`;

const CardDescription = ({
  artwork,
  withImage,
}: {
  artwork: IArtwork;
  withImage: boolean;
}) => {
  const navigate = useNavigate();

  return (
    <CardWrapper onClick={() => navigate(`/details/${artwork.id}`)}>
      {withImage && (
        <ImageWrapper>
          <LoadingImage
            image_id={artwork.image_id}
            alt={artwork?.thumbnnail?.alt_text ?? artwork.title}
          />
        </ImageWrapper>
      )}
      <Text>
        <Title>{artwork.title}</Title>
        <Author>
          {artwork.artist_title?.length ? artwork.artist_title : "Unknown"}
        </Author>
        <Domain>Public</Domain>
      </Text>
      <FavButton id={artwork.id} />
    </CardWrapper>
  );
};

export default CardDescription;
