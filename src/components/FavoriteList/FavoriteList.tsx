import React, { useEffect, useState } from "react";
import TitledBlock from "../TitledBlock/TitledBlock";
import CardList from "../CardList/CardList";
import IArtwork from "../../types/IArtwork";
import useLocalStorage from "../../hooks/useLocalStorage";
import Loader from "../Loader";

const FavoriteList = () => {
  const [artworks, setArtworks] = useState<IArtwork[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [favorites] = useLocalStorage<number[]>("favorites", []);

  useEffect(() => {
    fetch(`https://api.artic.edu/api/v1/artworks?ids=${favorites.join(", ")}`)
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
