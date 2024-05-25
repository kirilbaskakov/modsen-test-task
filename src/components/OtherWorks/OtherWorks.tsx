import React, { useEffect, useState } from "react";
import TitledBlock from "../TitledBlock/TitledBlock";
import CardList from "../CardList/CardList";
import IArtwork from "../../types/IArtwork";
import { buildArtworksQuery } from "../../contsants/api";
import Error from "../Error";
import ErrorBoundary from "../ErrorBoundary";

const OtherWorks = () => {
  const skeletonArtworks: IArtwork[] = Array(12)
    .fill(0)
    .map((_, id) => ({
      id,
      title: "",
      artist_title: "",
      thumbnnail: { alt_text: "" },
      image_id: undefined,
    }));
  const [artworks, setArtworks] = useState<IArtwork[]>(skeletonArtworks);
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
