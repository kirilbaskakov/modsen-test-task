import CardDescription from "#components/CardDescription/CardDescription";
import IArtwork from "#types/IArtwork";
import * as S from "./styled";

const CardList = ({ artworks }: { artworks: IArtwork[] }) => {
  return (
    <S.CardListWrapper>
      {artworks.map((artwork) => (
        <CardDescription key={artwork.id} artwork={artwork} withImage={true} />
      ))}
    </S.CardListWrapper>
  );
};

export default CardList;
