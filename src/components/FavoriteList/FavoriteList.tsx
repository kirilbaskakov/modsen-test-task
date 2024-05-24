import React, { useEffect, useState } from "react";
import TitledBlock from "../TitledBlock/TitledBlock";
import CardList from "../CardList/CardList";
import IArtwork from "../../types/IArtwork";
import Loader from "../Loader";
import getLocalStorage from "../../utils/getLocalStorage";
import { buildArtworksQuery } from "../../contsants/api";

const FavoriteList = () => {
  const [artworks, setArtworks] = useState<IArtwork[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const favorites = getLocalStorage("favorites", []);

  useEffect(() => {
    fetch(buildArtworksQuery({ ids: favorites.join(", ") }))
      .then((response) => response.json())
      .then((data) => setArtworks(data.data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <TitledBlock title="Your favorites list" subtitle="Saved by you">
      {isLoading ? <Loader /> : <CardList artworks={artworks} />}
    </TitledBlock>
  );
};

export default FavoriteList;
