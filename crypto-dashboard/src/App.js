import React from 'react';
import { AppContainer, NavbarContainer, MainContainer, FooterContainer, RoutesContainer } from './AppElements'
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, Cryptodetails } from './components';


const App = () => {
    return (
        <AppContainer>
            <NavbarContainer>
                <Navbar />
            </NavbarContainer>
            <MainContainer>
                <Layout>
                    <RoutesContainer>
                        <Routes>
                            <Route exact path="/" 
                                element={  <Homepage /> }>
                            </Route>  
                            <Route exact path="/exchanges" 
                                element ={ <Exchanges /> }>
                            </Route>  
                            <Route exact path="/cryptocurrencies" 
                                element={ <Cryptocurrencies /> }>
                            </Route>  
                            <Route exact path="/crypto/:coinId"
                                element={ <Cryptodetails />}>
                            </Route>
                            <Route exact path="/news" 
                                element={ <News /> }>
                            </Route>             
                        </Routes>
                    </RoutesContainer>
                </Layout>
            
                <FooterContainer >
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                        Cryptoverse < br/>
                        All rights reserved
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/exchanges">Exchanges</Link>
                        <Link to="/news">News</Link>
                    </Space>
                </FooterContainer>
            </MainContainer>
        </AppContainer>
    )
}

export default App
