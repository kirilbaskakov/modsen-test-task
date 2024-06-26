import Header from '#components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '#components/Footer/Footer';
import ScrollToTop from '#components/ScrollToTop';
import * as S from './styled';
import { Suspense } from 'react';
import Loader from '#components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <S.MainWrapper>
        <S.Main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </S.Main>
      </S.MainWrapper>
      <Footer />
    </>
  );
};

export default Layout;
