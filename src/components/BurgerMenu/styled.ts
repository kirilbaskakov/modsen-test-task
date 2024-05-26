import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "#theme";

export const Wrapper = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Burger = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40px;
  height: 30px;
`;

export const Line = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${theme.colors.highligtedPrimary};
  border-radius: 2px;
`;

export const Dropdown = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 128px;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: ${(props) => (props.isOpen ? "135px" : "0px")};
  background-color: ${theme.colors.bgDropdown};
  z-index: 2;
  transition: 0.2s ease-in;
`;

export const DropdownItem = styled(Link)`
  padding: 1.5rem 0;
  color: ${theme.colors.primary};
  font-size: ${theme.fs.small};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 500;
  text-decoration: none;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
`;
