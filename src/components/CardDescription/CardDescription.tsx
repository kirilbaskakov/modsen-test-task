import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import FavButton from "#components/FavButton/FavButton";
import IArtwork from "#types/IArtwork";
import LoadingImage from "#components/LoadingImage/LoadingImage";

const CardWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: #fff;
  padding: 0.75rem 0.5rem;
  min-width: 0;
  min-height: 80px;
`;

const ImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  flex: 0 0 auto;
`;

const Text = styled.div`
  flex: 1 0 0;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
  overflow: hidden;
  min-width: 0;
`;

const Title = styled.h3`
  margin: 0;
  padding: 0;
  width: 100%;
  color: #393939;
  font-size: 17px;
  font-weight: 500;
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
  margin-top: 0.5rem;
  margin-bottom: 0.75rem;
`;
const Domain = styled.span`
  margin-top: auto;
  justify-self: flex-end;
  font-size: 15px;
  font-weight: 700;
  color: #393939;
`;
const FavWrapper = styled.div`
  flex: 0 0 auto;
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
        <Author>{artwork.artist_title ?? "Unknown"}</Author>
        <Domain>Public</Domain>
      </Text>
      <FavWrapper>
        <FavButton id={artwork.id} />
      </FavWrapper>
    </CardWrapper>
  );
};

export default CardDescription;
