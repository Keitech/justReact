import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../../services/cryptoApi';
import { Cryptocurrencies, News } from '../../components'

import { Title, HomeHeadingContainer, HomeTitle, ShowMoreTitle } from './HomepageElements';


const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats

    if(isFetching) return 'Loading...';

    return (
        <>
            <Title level={2}>Global Crypto Stats</Title> 
            <Row>
                <Col span={12}><Statistic title="Total Crpytocurrencies" value={globalStats.total}/></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
                <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}/></Col>
                <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
            </Row>
            <HomeHeadingContainer>
                <HomeTitle level={2}>Top 10 CryptoCurrencies in the world</HomeTitle>
                <ShowMoreTitle level={3}><Link to="/cryptocurrencies">Show More</Link></ShowMoreTitle>
            </HomeHeadingContainer>
            <Cryptocurrencies simplified={true}/>
            <HomeHeadingContainer>
                <HomeTitle level={2}>Latest Crypto News</HomeTitle>
                <ShowMoreTitle level={3}><Link to="/news">Show More</Link></ShowMoreTitle>
            </HomeHeadingContainer>
            <News simplified/>
        </>
    )
}

export default Homepage
