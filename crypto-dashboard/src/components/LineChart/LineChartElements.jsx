import styled from 'styled-components';
import { Row, Col, Typography} from 'antd';

export const ChartHeader = styled(Row)`
    display: flex;
    justify-content: space-between;
    gap: 50px;
    color: #0071bd;
`;

export const ChartTitle = styled(Typography.Title)`
    color: #0071bd !important;
`;

export const PriceContainer = styled(Col)`
    display: flex !important;
    gap: 20px !important;
    align-items: center !important;
    flex-wrap: wrap !important;
`;

export const PriceChange = styled(Typography.Title)`
    font-weight: 900 !important;
`;

export const CurrentPrice = styled(Typography.Title)`
    margin-top: 0px !important;
    font-weight: 900 !important;
`;