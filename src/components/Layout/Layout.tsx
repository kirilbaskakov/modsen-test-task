import Header from "#components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "#components/Footer/Footer";
import ScrollToTop from "#components/ScrollToTop";
import * as S from "./styled";

const Layout = ({}) => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <S.MainWrapper>
        <S.Main>
          <Outlet />
        </S.Main>
      </S.MainWrapper>
      <Footer />
    </>
  );
};

export default Layout;
