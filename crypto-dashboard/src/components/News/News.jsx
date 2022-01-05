import React, {useState} from 'react';
import { Select, Typography, Row, Col, Avatar   } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../../services/cryptoApi';
import { NewsCard, NewsImageContainer, NewsTitle, ProviderContainer, ProviderName, SelectNews } from './NewsElements';

const { Text } = Typography;
const { Option } = Select;

const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg';

const News = ({ simplified }) => {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12})
    const {data} = useGetCryptosQuery(100)

    if(!cryptoNews?.value) return 'Loading...';

    return (
        <Row gutter={[24,24]}>
            {!simplified && (
                <Col span={24}>
                    <SelectNews
                        showSearch
                        placeholder="Select a Crypto"
                        optionFilterProp="children"
                        onChange={(value) => setNewsCategory(value)}
                        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        <Option value="Cryptocurrency">Cryptocurrency</Option>
                        {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
                    </SelectNews>
                </Col>
            )}
            {cryptoNews.value.map((news, i) => (
                <Col xs={24} sm={12} lg={8} key={i}>
                    <NewsCard hoverable>
                        <a href={news.url} target="_blank" rel="norefferrer">
                            <NewsImageContainer>
                                <NewsTitle level={4}>{news.name}</NewsTitle>
                                <img style={{maxWidth: '200px', maxHeight: '100px'}} src={news?.image?.thumbnail?.contentUrl || demoImage } alt="news"/>
                            </NewsImageContainer>
                            <p style={{marginTop: '10px'}}>
                                {news.description > 100 ? `${news.description.substring(0, 100)} ...`
                                : news.description    
                                }
                            </p>
                            <ProviderContainer>
                                <div>
                                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="news"/>
                                    <ProviderName>{news.provider[0]?.name}</ProviderName>
                                </div>
                                    <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                            </ProviderContainer>
                        </a>
                    </NewsCard>
                </Col>
            ))}
        </Row>
    )
}

export default News
