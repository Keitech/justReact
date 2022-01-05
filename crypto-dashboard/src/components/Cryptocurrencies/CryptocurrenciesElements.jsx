import styled from 'styled-components';
import { Row, Col } from 'antd';

export const CryptoCardContainer = styled(Row)`
    min-height: 65vh !important;
`;

export const CryptoCard = styled(Col)`
    min-width: 250px;
`;

export const CryptoImage = styled.img`
    width:35px;
`;

export const SearchCrypto = styled.div`
    margin: 20px auto 30px auto;
    width: 250px;
`;