import React, {useState, useEffect} from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import { CryptoCardContainer, CryptoCard, CryptoImage, SearchCrypto } from './CryptocurrenciesElements';

import { useGetCryptosQuery } from '../../services/cryptoApi';


const Cryptocurrencies = ({ simplified }) => {
    const count = simplified ? 10 : 100;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count); 
    const [ cryptos, setCryptos] = useState(cryptosList?.data?.coins);
    const [ searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))

        setCryptos(filteredData)

    }, [cryptosList, searchTerm])

    if (isFetching) return 'Loading...';

    return (
        <>
            <SearchCrypto>
                <Input placeholder="Search Cryptocurrency" onChange={(e) => setSearchTerm(e.target.value)}/>
            </SearchCrypto>
            <CryptoCardContainer gutter={[32, 32]}>
                {cryptos?.map((currency) => (
                    <CryptoCard xs={24} sm={12} lg={6} key={currency.id}>
                        <Link to={`/crypto/${currency.id}`}>
                            <Card 
                                title={`${currency.rank}. ${currency.name}`}
                                extra={<CryptoImage src={currency.iconUrl}/>} 
                                hoverable
                            >
                                <p>Price: {millify(currency.price)}</p>
                                <p>Market Cap: {millify(currency.marketCap)}</p>
                                <p>Daily Change: {millify(currency.change)}</p>
                            </Card>
                        </Link>
                    </CryptoCard>
                ))}
            </CryptoCardContainer>
        </>
    )
}

export default Cryptocurrencies
