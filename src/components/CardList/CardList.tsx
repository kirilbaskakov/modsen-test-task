import styled from "styled-components";
import CardDescription from "#components/CardDescription/CardDescription";
import IArtwork from "#types/IArtwork";

const CardListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
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
