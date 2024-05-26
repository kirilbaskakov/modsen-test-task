import CardDescription from "#components/CardDescription/CardDescription";
import { Link } from "react-router-dom";
import IArtwork from "#types/IArtwork";
import LoadingImage from "#components/LoadingImage/LoadingImage";
import * as S from "./styled";

const LargeCard = ({ artwork }: { artwork: IArtwork }) => {
  return (
    <S.CardWrapper>
      <Link to={`/details/${artwork.id}`}>
        <LoadingImage
          image_id={artwork.image_id}
          size="large"
          alt={artwork?.thumbnnail?.alt_text ?? artwork.title}
        />
      </Link>
      <S.DescriptionWrapper>
        <CardDescription artwork={artwork} withImage={false} />
      </S.DescriptionWrapper>
    </S.CardWrapper>
  );
};

export default LargeCard;
