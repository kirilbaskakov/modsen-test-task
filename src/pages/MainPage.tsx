import React from "react";
import CardDescription from "../components/CardDescription/CardDescription";
import LargeCard from "../components/LargeCard/LargeCard";
import TitledBlock from "../components/TitledBlock/TitledBlock";
import Gallery from "../components/Gallery/Gallery";
import CardList from "../components/CardList/CardList";
import OtherWorks from "../components/OtherWorks/OtherWorks";
import Search from "../components/Search/Search";

const MainPage = () => {
  return (
    <div>
      <Search />
      <Gallery />
      <OtherWorks />
    </div>
  );
};

export default MainPage;
