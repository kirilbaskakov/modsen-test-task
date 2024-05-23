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
  width: 80px;
  height: 80px;
`;

const Text = styled.div`
  width: 70%;
  text-wrap: nowrap;
  overflow: hidden;
`;

const Title = styled.h3`
  margin: 0;
  padding: 0;
  color: #393939;
  font-size: 17px;
  font-weight: 500;
  text-align: start;
  line-height: 1.75em;
`;
const Author = styled.h4`
  margin: 0;
  padding: 0;
  color: #e0a449;
  font-size: 15px;
  text-align: start;
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
          <LoadingImage image_id={artwork.image_id} />
        </ImageWrapper>
      )}
      <Text>
        <Title>{artwork.title}</Title>
        <Author>
          {artwork.artist_title?.length ? artwork.artist_title : "Unknown"}
        </Author>
      </Text>
      <FavButton id={artwork.id} />
    </CardWrapper>
  );
};

export default CardDescription;
