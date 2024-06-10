import { useEffect, useState } from 'react';
import TitledBlock from '#components/TitledBlock/TitledBlock';
import CardList from '#components/CardList/CardList';
import IArtwork from '#types/IArtwork';
import { buildArtworksQuery } from '#utils/buildQuery/buildQuery';
import ErrorBoundary from '#components/ErrorBoundary';
import Error from '#components/Error/Error';
import generateEmptyArtworks from '#utils/generateEmptyArtworks/generateEmptyArtworks';
import useFavorites from '#hooks/useFavorites';

const FavoriteList = () => {
  const favorites = useFavorites();
  const [artworks, setArtworks] = useState<IArtwork[]>(
    generateEmptyArtworks(favorites.length, favorites)
  );
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (favorites.length) {
      setArtworks(generateEmptyArtworks(favorites.length, favorites));
      fetch(buildArtworksQuery({ ids: favorites.join(', ') }))
        .then((response) => response.json())
        .then((data) => setArtworks(data.data))
        .catch(() => setIsError(true));
    }
  }, []);

  useEffect(() => {
    setArtworks(artworks.filter((artwork) => favorites.includes(artwork.id)));
  }, [favorites]);

  return (
    <TitledBlock title="Your favorites list" subtitle="Saved by you">
      {isError ? (
        <Error />
      ) : (
        <ErrorBoundary>
          {artworks.length ? (
            <CardList artworks={artworks} />
          ) : (
            <>
              <h1>Your favorite list is empty</h1>
              <h2>Add your favorite artworks here</h2>
            </>
          )}
        </ErrorBoundary>
      )}
    </TitledBlock>
  );
};

export default FavoriteList;
