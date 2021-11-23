import React from 'react';
import { useLocation } from 'react-router-dom'
import Button from './Button';

const Header = ( {title, onAdd, showAdd} ) => {
    const location = useLocation()

    return(
        <>
            <div class='header'>
                <h1>{title}</h1>
                {location.pathname === '/' && <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} >Add</Button>}
            </div>
        </>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

export default Header