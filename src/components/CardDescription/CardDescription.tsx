import { useNavigate } from "react-router-dom";
import FavButton from "#components/FavButton/FavButton";
import IArtwork from "#types/IArtwork";
import LoadingImage from "#components/LoadingImage/LoadingImage";
import * as S from "./styled";

const CardDescription = ({
  artwork,
  withImage,
}: {
  artwork: IArtwork;
  withImage: boolean;
}) => {
  const navigate = useNavigate();

  return (
    <S.CardWrapper onClick={() => navigate(`/details/${artwork.id}`)}>
      {withImage && (
        <S.ImageWrapper>
          <LoadingImage
            image_id={artwork.image_id}
            alt={artwork?.thumbnnail?.alt_text ?? artwork.title}
          />
        </S.ImageWrapper>
      )}
      <S.Text>
        <S.Title>{artwork.title}</S.Title>
        <S.Author>{artwork.artist_title ?? "Unknown"}</S.Author>
        <S.Domain>Public</S.Domain>
      </S.Text>
      <S.FavWrapper>
        <FavButton id={artwork.id} />
      </S.FavWrapper>
    </S.CardWrapper>
  );
};

export default CardDescription;
