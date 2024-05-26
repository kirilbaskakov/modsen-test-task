import MuseumLogoDark from "#assets/museum-logo-dark.svg";
import ModsenLogo from "#assets/logo-modsen.svg";
import * as S from "./styled";

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.FooterStyled>
        <img src={MuseumLogoDark} />
        <img src={ModsenLogo} />
      </S.FooterStyled>
    </S.FooterWrapper>
  );
};

export default Footer;
