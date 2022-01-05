import React, { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';

import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../../services/cryptoApi';
import { 
    CoinDetailContainer, 
    CoinHeadingContainer, 
    CoinName, CoinNameP, 
    SelectTimePeriod, 
    StatsContainer, 
    CoinValueStatistics, 
    CoinValueStatisticsHeading, 
    CoinValueStatisticsHeadingP, 
    CoinDetailsHeading,
    CoinStats,
    CoinStatsName,
    Stats,
    OtherStatsInfo, 
    CoinDescLink,
    CoinDesc,
    CoinLink,
    CoinLinks,
    LinkName,
    LinkNameA} from './CryptodetailsElements';
import LineChart from '../LineChart/LineChart';

const { Text } = Typography
const { Option } = Select

const Cryptodetails = () => {
    const { coinId } = useParams();
    const [timePeriod, setTimePeriod] = useState('7d')
    const { data, isFetching } = useGetCryptoDetailsQuery(coinId)
    const { data: coinHistory } = useGetCryptoHistoryQuery({coinId, timePeriod})
    const cryptoDetails = data?.data?.coin;

    if (isFetching) return 'Loading...'

    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

    const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails.price && millify(cryptoDetails.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptoDetails.rank, icon: <NumberOutlined /> },
    { title: '24h Volume', value: `$ ${cryptoDetails.volume && millify(cryptoDetails.volume)}`, icon: <ThunderboltOutlined /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails.marketCap && millify(cryptoDetails.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${millify(cryptoDetails.allTimeHigh.price)}`, icon: <TrophyOutlined /> },
    ];

    const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: cryptoDetails.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Aprroved Supply', value: cryptoDetails.approvedSupply ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${millify(cryptoDetails.totalSupply)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${millify(cryptoDetails.circulatingSupply)}`, icon: <ExclamationCircleOutlined /> },
    ];

    return (
        <CoinDetailContainer>
            <CoinHeadingContainer>
                <CoinName level={2}>
                    {cryptoDetails.name} ({cryptoDetails.slug}) Price
                </CoinName>
                <CoinNameP>
                    {cryptoDetails.name} live price in US dollars.
                    View value statistics, markey cap and supply.
                </CoinNameP>
            </CoinHeadingContainer>
            <SelectTimePeriod 
                defaultValue="7d"
                placeholder="Select Time Period"
                onChange={(value) => setTimePeriod(value)}    
            >
                {time.map((date) => <Option key={date}>{date}</Option>)}

            </SelectTimePeriod>
            <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails.price)} coinName={cryptoDetails.name}/>
            <StatsContainer>
                <CoinValueStatistics>
                    <CoinValueStatisticsHeading>
                        <CoinDetailsHeading level={3}>
                            {cryptoDetails.name} Value Statistics
                        </CoinDetailsHeading>
                        <CoinValueStatisticsHeadingP>
                            An overview showing the stats of {cryptoDetails.name}
                        </CoinValueStatisticsHeadingP>
                        {stats.map(({ icon, title, value}) => (
                            <CoinStats>
                                <CoinStatsName>
                                    <Text>{icon}</Text>
                                    <Text>{title}</Text>
                                </CoinStatsName>
                                <Stats>{value}</Stats>
                            </CoinStats>
                        ))}
                    </CoinValueStatisticsHeading>
                </CoinValueStatistics>
                <OtherStatsInfo>
                    <CoinValueStatisticsHeading>
                        <CoinDetailsHeading level={3}>
                            Other Statistics
                        </CoinDetailsHeading>
                        <CoinValueStatisticsHeadingP>
                            An overview showing the stats of all cryptocurrencies
                        </CoinValueStatisticsHeadingP>
                        {genericStats.map(({ icon, title, value}) => (
                            <CoinStats>
                                <CoinStatsName>
                                    <Text>{icon}</Text>
                                    <Text>{title}</Text>
                                </CoinStatsName>
                                <Stats>{value}</Stats>
                            </CoinStats>
                        ))}
                    </CoinValueStatisticsHeading>
                </OtherStatsInfo>
            </StatsContainer>
            <CoinDescLink>
                    <CoinDesc>
                        <CoinDetailsHeading level={3}>
                            What is {cryptoDetails.name}
                            {HTMLReactParser(cryptoDetails.description)}
                        </CoinDetailsHeading>
                    </CoinDesc>
                    <CoinLinks>
                        <CoinDetailsHeading level={3}>
                            {cryptoDetails.name} Links
                        </CoinDetailsHeading>
                        {cryptoDetails.links.map((link) => (
                            <CoinLink key={link.name}>
                                <LinkName level={5}>{link.type}</LinkName>
                                <LinkNameA href={link.url} target="_blank" rel="noreferrer">{link.name}</LinkNameA>
                            </CoinLink>
                        ))}
                    </CoinLinks>
                </CoinDescLink>
        </CoinDetailContainer>
    )
}

export default Cryptodetails
