import styled from 'styled-components';
import { Select, Typography, Card } from 'antd';

export const NewsCard = styled(Card)`
    min-height: 300px !important;
`;

export const NewsImageContainer = styled.div`
    display: flex !important;
    justify-content: space-between !important;
`;

export const NewsTitle = styled(Typography.Title)`
    width: 70%;
`;

export const ProviderContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ProviderName = styled(Typography.Text)`
    margin-left: 10px;
`;

export const SelectNews = styled(Select)`
    width: 180px;
`;