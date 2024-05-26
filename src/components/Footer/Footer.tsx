import styled from "styled-components";
import MuseumLogoDark from "#assets/museum-logo-dark.svg";
import ModsenLogo from "#assets/logo-modsen.svg";

const FooterWrapper = styled.footer`
  padding: 2rem 1rem;
`;

const FooterStyled = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterStyled>
        <img src={MuseumLogoDark} />
        <img src={ModsenLogo} />
      </FooterStyled>
    </FooterWrapper>
  );
};

export default Footer;
