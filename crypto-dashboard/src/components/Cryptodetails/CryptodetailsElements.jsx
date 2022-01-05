import styled from 'styled-components';
import { Col, Typography, Row, Select } from 'antd';

export const CoinDetailContainer = styled(Col)`
    margin: 30px;
    @media screen and (max-width: 500px){
        margin: 0;
    }
`;

export const CoinHeadingContainer = styled(Col)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-bottom: 1px solid #d9d9d9;
    padding-top: 20px;
    padding-bottom: 20px;
    gap: 10px;
`;

export const CoinName = styled(Typography.Title)`
    font-weight: 900;
    color: var(--pink);
`;

export const CoinNameP = styled.p`
    font-size: 1rem;
    opacity: 0.9;
    margin-bottom: 20px;
`;

export const SelectTimePeriod = styled(Select)`
    width: 200px !important;
    margin-top: 20px !important;
`;

export const StatsContainer = styled(Col)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 40px;
    h2{
        font-weight: 700;
        font-size: 1.4rem;
        margin-top: 20px;
        color: var(--pink);
    }
    @media screen and (max-width:1000px){
        flex-direction: column;
        h2{
            margin-top: 0px;
        }
    }
`;

export const CoinValueStatistics = styled(Col)`

`;

export const CoinValueStatisticsHeading = styled(Col)`
    /* font-size: 1rem;
    opacity: 0.9; */
`;

export const CoinValueStatisticsHeadingP = styled.p`
    font-size: 1rem;
    opacity: 0.9;
`;

export const CoinDetailsHeading = styled(Typography.Title)`
    font-weight: 700 !important;
    margin-top: 20px !important;
    color: #0071bd !important;
`;

export const CoinStats = styled(Col)`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #d9d9d9;
    font-size: 1rem;
    opacity: 0.9;
    padding: 20px;
    &:hover{
        background-color: #F9F9F9;;
    }
`;

export const CoinStatsName = styled(Col)`
    display: flex;
    gap: 10px;
    font-size: 1rem;
`;

export const Stats = styled(Typography.Text)`
    font-weight: 800;
`;

export const OtherStatsInfo = styled(Col)`

`;

export const CoinDescLink = styled(Col)`
    display: flex;
    gap: 40px;
    margin-top: 40px;
    padding-top: 20px;
    p{
        font-size: 1rem;
        opacity: 0.9;
    }
    h2{
        font-weight: 700;
        color: #0071bd;
    }
    h3{
        font-weight: 700;
    }
    @media screen and (max-width:1000px){
            flex-direction: column;
        }
`;

export const CoinDesc = styled(Row)`
    flex: 0.5;
`;

export const CoinLinks = styled(Col)`
    padding: 0px 20px;
    flex: 0.5;
    @media screen and (max-width: 500px){
        padding: 0px;
    }
`;

export const CoinLink = styled(Row)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #d9d9d9;
    padding: 20px;
    &:hover{
        background-color: #F9F9F9;
    }
`;

export const LinkName = styled(Typography.Title)`
    text-transform: capitalize;
    font-size: 1rem;
`;

export const LinkNameA = styled.a`
    color: #0071bd;
    font-weight: 700;
    font-size: 1rem;
`;