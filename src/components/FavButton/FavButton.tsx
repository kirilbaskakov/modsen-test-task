import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import Bookmark from "../../assets/bookmark.svg";

const FavButtonStyled = styled.button`
  cursor: pointer;
  background-color: #f0f1f1;
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

const FavButton = () => {
  const toFavorite: MouseEventHandler = (e) => {
    e.stopPropagation();
  };

  return (
    <FavButtonStyled onClick={toFavorite}>
      <img src={Bookmark} />
    </FavButtonStyled>
  );
};

export default FavButton;
