import React, { useState } from 'react';
import Home from '#assets/home.svg';
import Bookmark from '#assets/bookmark.svg';
import * as S from './styled';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const switchIsOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <S.Wrapper>
      <S.Burger onClick={switchIsOpen}>
        <S.Line />
        <S.Line />
        <S.Line />
      </S.Burger>
      {isOpen && <S.Overlay onClick={switchIsOpen} />}
      <S.Dropdown isOpen={isOpen}>
        <S.DropdownItem to="/" onClick={switchIsOpen}>
          <img src={Home} alt="Home" />
          <span>Home</span>
        </S.DropdownItem>
        <S.DropdownItem to="favorites" onClick={switchIsOpen}>
          <img src={Bookmark} alt="Bookmark" />
          <span>Your favorites</span>
        </S.DropdownItem>
      </S.Dropdown>
    </S.Wrapper>
  );
};

export default BurgerMenu;
