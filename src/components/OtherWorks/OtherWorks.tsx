import React, { useEffect, useState } from "react";
import TitledBlock from "../TitledBlock/TitledBlock";
import CardList from "../CardList/CardList";
import IArtwork from "../../types/IArtwork";
import Loader from "../Loader";

const OtherWorks = () => {
  const [artworks, setArtworks] = useState<IArtwork[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.artic.edu/api/v1/artworks?page=1&limit=9`)
      .then((response) => response.json())
      .then((data) => {
        setArtworks(data.data);
      })
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <TitledBlock title="Other works for you" subtitle="Here are some">
      {isLoading ? <Loader /> : <CardList artworks={artworks} />}
    </TitledBlock>
  );
};

export default OtherWorks;
