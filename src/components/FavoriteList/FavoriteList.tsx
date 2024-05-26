import { useEffect, useState } from "react";
import TitledBlock from "#components/TitledBlock/TitledBlock";
import CardList from "#components/CardList/CardList";
import IArtwork from "#types/IArtwork";
import getLocalStorage from "#utils/getLocalStorage";
import { buildArtworksQuery } from "#contsants/api";
import ErrorBoundary from "#components/ErrorBoundary";
import Error from "#components/Error";

const FavoriteList = () => {
  const favorites = getLocalStorage("favorites", []);
  const skeletonArtworks: IArtwork[] = favorites.map((id) => ({
    id,
    title: "",
    artist_title: "",
    thumbnnail: { alt_text: "" },
    image_id: undefined,
  }));
  const [artworks, setArtworks] = useState<IArtwork[]>(skeletonArtworks);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (favorites.length) {
      fetch(buildArtworksQuery({ ids: favorites.join(", ") }))
        .then((response) => response.json())
        .then((data) => setArtworks(data.data))
        .catch(() => setIsError(true));
    }
  }, []);

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
