import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 99;
  background: linear-gradient(to right, #343333 50%, #484848 60%, #282828 80%);
  padding: 2rem 1rem;
`;

export const HeaderStyled = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LinkList = styled.ul`
  list-style-type: none;
  display: none;
  gap: 1rem;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const LinkStyled = styled(NavLink)`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
`;

export const DisappearingLink = styled(LinkStyled)`
  &.active {
    display: none;
  }
`;
