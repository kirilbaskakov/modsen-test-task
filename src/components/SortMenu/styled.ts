import theme from "#theme";
import styled from "styled-components";

export const SortIconStyled = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 0.5rem;
  cursor: pointer;
`;

export const Dropdown = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 50px;
  right: 0;
  width: 280px;
  overflow: hidden;
  height: ${(props) => (props.isOpen ? "200px" : "0px")};
  background-color: ${theme.colors.bgDropdown};
  border-radius: 8px;
  z-index: 2;
  transition: 0.2s ease-in;
`;

export const DropdownItem = styled.div`
  cursor: pointer;
  padding: 1rem 0;
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
