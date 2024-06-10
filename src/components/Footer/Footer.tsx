import MuseumLogoDark from '#assets/museum-logo-dark.svg';
import ModsenLogo from '#assets/logo-modsen.svg';
import * as S from './styled';

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.FooterStyled>
        <img src={MuseumLogoDark} alt="Museum logo" />
        <img src={ModsenLogo} alt="Modsen logo" />
      </S.FooterStyled>
    </S.FooterWrapper>
  );
};

export default Footer;
