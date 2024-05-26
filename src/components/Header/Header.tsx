import MuseumLogo from "#assets/museum-logo.svg";
import Home from "#assets/home.svg";
import Bookmark from "#assets/bookmark.svg";
import { Link } from "react-router-dom";
import BurgerMenu from "#components/BurgerMenu/BurgerMenu";
import * as S from "./styled";

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderStyled>
        <Link to="/">
          <img src={MuseumLogo} />
        </Link>
        <nav>
          <BurgerMenu />
          <S.LinkList>
            <li>
              <S.DisappearingLink to="/">
                <img src={Home} />
                <span>Home</span>
              </S.DisappearingLink>
            </li>
            <li>
              <S.LinkStyled to="/favorites">
                <img src={Bookmark} />
                <span>Your favorites</span>
              </S.LinkStyled>
            </li>
          </S.LinkList>
        </nav>
      </S.HeaderStyled>
    </S.HeaderWrapper>
  );
};

export default Header;
