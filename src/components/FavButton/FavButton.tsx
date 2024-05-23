import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import Bookmark from "../../assets/bookmark-orange.svg";
import useLocalStorage from "../../hooks/useLocalStorage";

const FavButtonStyled = styled.button<{ selected?: boolean }>`
  cursor: pointer;
  background-color: ${(props) =>
    props.selected ? "rgba(256, 230, 193)" : "#f0f1f1"};
  border-radius: 50%;
  border: none;
  width: 59px;
  height: 59px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;

  &.selected {
    background-color: #fbd7b2;
  }
`;

const FavButton = ({ id }: { id: number }) => {
  const [favorites, setFavorites] = useLocalStorage<number[]>("favorites", []);
  const inFavorite = favorites.includes(id);

  const onClick: MouseEventHandler = (e) => {
    e.stopPropagation();
    if (inFavorite) {
      setFavorites(favorites.filter((i) => i != id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <FavButtonStyled onClick={onClick} selected={inFavorite}>
      <img src={Bookmark} />
    </FavButtonStyled>
  );
};

export default FavButton;
