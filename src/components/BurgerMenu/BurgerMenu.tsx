import React, { useState } from "react";
import styled from "styled-components";
import Home from "../../assets/home.svg";
import Bookmark from "../../assets/bookmark.svg";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

const Burger = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40px;
  height: 30px;
`;
const Line = styled.div`
  width: 100%;
  height: 3px;
  background-color: #e0a449;
  border-radius: 2px;
`;
const Dropdown = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 128px;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: ${(props) => (props.isOpen ? "135px" : "0px")};
  background-color: rgb(35, 35, 40);
  z-index: 2;
  transition: 0.2s ease-in;
`;

const DropdownItem = styled(Link)`
  padding: 1.5rem 0;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;
  text-decoration: none;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
`;

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <Burger onClick={() => setIsOpen((isOpen) => !isOpen)}>
        <Line />
        <Line />
        <Line />
      </Burger>
      {isOpen && <Overlay onClick={() => setIsOpen(false)} />}
      <Dropdown isOpen={isOpen}>
        <DropdownItem to="/" onClick={() => setIsOpen(false)}>
          <img src={Home} />
          <span>Home</span>
        </DropdownItem>
        <DropdownItem to="favorites" onClick={() => setIsOpen(false)}>
          <img src={Bookmark} />
          <span>Your favorites</span>
        </DropdownItem>
      </Dropdown>
    </Wrapper>
  );
};

export default BurgerMenu;
