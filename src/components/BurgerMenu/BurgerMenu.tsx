import React, { useState } from "react";
import Home from "#assets/home.svg";
import Bookmark from "#assets/bookmark.svg";
import * as S from "./styled";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Wrapper>
      <S.Burger onClick={() => setIsOpen((isOpen) => !isOpen)}>
        <S.Line />
        <S.Line />
        <S.Line />
      </S.Burger>
      {isOpen && <S.Overlay onClick={() => setIsOpen(false)} />}
      <S.Dropdown isOpen={isOpen}>
        <S.DropdownItem to="/" onClick={() => setIsOpen(false)}>
          <img src={Home} />
          <span>Home</span>
        </S.DropdownItem>
        <S.DropdownItem to="favorites" onClick={() => setIsOpen(false)}>
          <img src={Bookmark} />
          <span>Your favorites</span>
        </S.DropdownItem>
      </S.Dropdown>
    </S.Wrapper>
  );
};

export default BurgerMenu;
