import React from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import styled from 'styled-components';

const MainWrapper = styled.div`
    background-color: #FAFAFA;
    min-height: 100vh;
`

const Main = styled.main`
    max-width: 1280px;
    margin: 0 auto;
    padding: 5rem 0;
`

const Layout = ({}) => {
    return (
        <>
            <Header/>
            <MainWrapper>
                <Main>
                    <Outlet/>
                </Main>
            </MainWrapper>
            <Footer/>    
        </>
    );
};

export default Layout;