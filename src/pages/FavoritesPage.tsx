import React from "react";
import FavoriteList from "../components/FavoriteList/FavoriteList";
import Title from "../components/Title";
import Highlighted from "../components/Highlighted";

const FavoritesPage = () => {
  return (
    <div>
      <Title>
        Here Are Your <Highlighted>Favorites</Highlighted>
      </Title>
      <FavoriteList />
    </div>
  );
};

export default FavoritesPage;
