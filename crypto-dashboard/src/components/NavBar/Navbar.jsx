import React, {useState, useEffect} from 'react';
import icon from '../../images/cryptocurrency.png';
import { Menu, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import { NavContainer, LogoContainer, TypographyTitle, MenuControlContainer } from './NavbarElements';

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)

        window.addEventListener('resize', handleResize)

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    })

    useEffect(() => {
        if (screenSize < 768) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true)
        }

    }, [screenSize])

    return (
        <NavContainer>
            <LogoContainer>
                <Avatar src={icon} size="large"/>
                <TypographyTitle level={2}>
                    <Link to='/'>Cryptoverse</Link>
                </TypographyTitle>
                <MenuControlContainer onClick={() => setActiveMenu(!activeMenu)}>
                    <MenuOutlined />
                </MenuControlContainer>
            </LogoContainer>
            {activeMenu && (
                <Menu theme="dark">
                    <Menu.Item icon={<HomeOutlined />}>
                        <Link to ="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined />}>
                        <Link to ="/cryptocurrencies">Cryptocurrencies</Link>
                    </Menu.Item>
                    <Menu.Item icon={<MoneyCollectOutlined />}>
                        <Link to ="/exchanges">Exchanges</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined />}>
                        <Link to ="/news">News</Link>
                    </Menu.Item>
                </Menu>
            )}
        </NavContainer>
    )
}

export default Navbar
