import React from "react";
import FavoriteList from "../components/FavoriteList/FavoriteList";
import Title from "../components/Title";
import Highlighted from "../components/Highlighted";
import BookmarkLarge from "../assets/bookmark-large.svg";

const FavoritesPage = () => {
  return (
    <div>
      <Title>
        Here Are Your <br />{" "}
        <img src={BookmarkLarge} style={{ verticalAlign: "middle" }} />
        <Highlighted>Favorites</Highlighted>
      </Title>
      <FavoriteList />
    </div>
  );
};

export default FavoritesPage;
