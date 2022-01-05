import styled from 'styled-components';
import { Typography } from 'antd';

export const Title = styled(Typography.Title)`
    @media screen and (max-width: 500px){
        .heading{
            margin-top: 20px;
        }
    }
`;

export const HomeHeadingContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
`;

export const HomeTitle = styled(Title)`
    @media screen and (max-width:800px){
        font-size: 1.4rem !important;
    }
`;

export const ShowMoreTitle = styled(Title)`
    @media screen and (max-width:800px){
        font-size: 1.3rem !important;
    }
`;

