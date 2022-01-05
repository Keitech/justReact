import styled from 'styled-components';
import { Typography } from 'antd';

export const NavContainer = styled.div`
    flex: 0.2;
    background-color: rgb(0, 21, 41);
`;

export const LogoContainer = styled.div`
    background-color: #001529;
    display: flex;
    padding: 20px;
    align-items: center;
    width: 100%;
`;

export const TypographyTitle = styled(Typography.Title)`
    margin:0 0 0 15px;
    a {
        color: white;
    }
`;

export const MenuControlContainer = styled.button`
    display: none !important;
    position: absolute !important;
    right: 10px !important;
    top: 25px !important;
    font-size: 1.2rem !important;
    background-color: var(--bgSecondary) !important;
    border: none !important;
`;