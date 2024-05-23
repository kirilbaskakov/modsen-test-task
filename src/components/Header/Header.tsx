import styled from "styled-components";
import MuseumLogo from "../../assets/museum-logo.svg";
import Home from "../../assets/home.svg";
import Bookmark from "../../assets/bookmark.svg";
import { Link, NavLink } from "react-router-dom";

const HeaderWrapper = styled.header`
  background-color: black;
  padding: 2rem 0;
`;

const HeaderStyled = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 1rem;
`;

const LinkStyled = styled(NavLink)`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
`;

const DisappearingLink = styled(LinkStyled)`
  &.active {
    display: none;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderStyled>
        <Link to="/">
          <img src={MuseumLogo} />
        </Link>
        <nav>
          <LinkList>
            <li>
              <DisappearingLink to="/">
                <img src={Home} />
                <span>Home</span>
              </DisappearingLink>
            </li>
            <li>
              <LinkStyled to="/favorites">
                <img src={Bookmark} />
                <span>Your favorites</span>
              </LinkStyled>
            </li>
          </LinkList>
        </nav>
      </HeaderStyled>
    </HeaderWrapper>
  );
};

export default Header;
