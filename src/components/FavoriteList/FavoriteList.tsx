import React from "react";
import TitledBlock from "../TitledBlock/TitledBlock";
import CardList from "../CardList/CardList";

const FavoriteList = () => {
  return (
    <TitledBlock title="Your favorites list" subtitle="Saved by you">
      <CardList />
    </TitledBlock>
  );
};

export default FavoriteList;
