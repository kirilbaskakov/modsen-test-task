import Header from "#components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "#components/Footer/Footer";
import styled from "styled-components";
import ScrollToTop from "#components/ScrollToTop";

const MainWrapper = styled.div`
  background-color: #fafafa;
  min-height: 100vh;
  padding: 1rem;
`;

const Main = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: 5rem 0;
`;

const Layout = ({}) => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <MainWrapper>
        <Main>
          <Outlet />
        </Main>
      </MainWrapper>
      <Footer />
    </>
  );
};

export default Layout;
