import { useEffect, useState } from "react";
import TitledBlock from "#components/TitledBlock/TitledBlock";
import CardList from "#components/CardList/CardList";
import IArtwork from "#types/IArtwork";
import { buildArtworksQuery } from "#utils/buildQuery/buildQuery";
import Error from "#components/Error/Error";
import ErrorBoundary from "#components/ErrorBoundary";
import generateEmptyArtworks from "#utils/generateEmptyArtworks/generateEmptyArtworks";

const OtherWorks = () => {
  const [artworks, setArtworks] = useState<IArtwork[]>(
    generateEmptyArtworks(12)
  );
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(buildArtworksQuery({ page: 1, limit: 12 }))
      .then((response) => response.json())
      .then((data) => {
        setArtworks(data.data);
      })
      .catch(() => setIsError(true));
  }, []);

  return (
    <TitledBlock title="Other works for you" subtitle="Here are some">
      {isError ? (
        <Error />
      ) : (
        <ErrorBoundary>
          <CardList artworks={artworks} />
        </ErrorBoundary>
      )}
    </TitledBlock>
  );
};

export default OtherWorks;
