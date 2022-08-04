import React, { useContext, useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, NavLink } from 'react-router-dom';

import { AuthContext } from '../context/auth';

function MenuBar() {
    const { user, logout } = useContext(AuthContext);
    const pathname = window.location.pathname;
    const path = pathname === '/' ? 'spacex' : pathname.substr(1);
    const [activeItem, setActiveItem] = useState(path);

    const handleItemClick = (e, { name }) => setActiveItem(name);

    const menuBar = user ? (
        <Menu pointing secondary color = "black" stackable className='mainMenu'>
            {/* <Menu.Item
                name='spacex'
                active={activeItem === 'spacex'}
                onClick={handleItemClick}
                as = {Link}
                to = "/"
            />
            <Menu.Item
                name='rockets'
                active={activeItem === 'rockets'}
                onClick={handleItemClick}
                as = {Link}
                to = "/rockets"
            />
            <Menu.Item
                name='forum'
                active={activeItem === 'forum'}
                onClick={handleItemClick}
                as = {Link}
                to = "/forum"
            />
            <Menu.Menu position='right'>
                <Menu.Item
                    name={user.username}
                    id="user"
                />
                <Menu.Item
                    name='logout'
                    onClick={logout}
                /> */}
                <NavLink to="/" activeClassName="active" className="item" exact>spacex</NavLink>
                <NavLink to="/rockets" activeClassName="active" className="item">rockets</NavLink>
                <NavLink to="/forum" activeClassName="active" className="item">forum</NavLink>
                <Menu.Menu position='right'>
                <Menu.Item
                    name={user.username}
                    id="user"
                />
                <Menu.Item
                    name='logout'
                    onClick={logout}
                />
                </Menu.Menu>
        </Menu>
    ) : (
        <Menu pointing secondary color = "black" stackable className='mainMenu'>
            {/* <Menu.Item
                name='spacex'
                active={activeItem === 'spacex'}
                onClick={handleItemClick}
                as = {Link}
                to = "/">
                <img src='https://upload.wikimedia.org/wikipedia/commons/9/96/SpaceX_Logo_Black.png' />
            </Menu.Item>
            <Menu.Item
                name='rockets'
                active={activeItem === 'rockets'}
                onClick={handleItemClick}
                as = {Link}
                to = "/rockets"
            />
            <Menu.Item
                name='forum'
                active={activeItem === 'forum'}
                onClick={handleItemClick}
                as = {Link}
                to = "/forum"
            />
            <Menu.Menu position='right'>
                <Menu.Item
                    name='login'
                    active={activeItem === 'login'}
                    onClick={handleItemClick}
                    as = {Link}
                    to = "/login"
                />
                <Menu.Item
                    name='register'
                    active={activeItem === 'register'}
                    onClick={handleItemClick}
                    as = {Link}
                    to = "/register"
                /> */}
                <NavLink to="/" activeClassName="active" className="item" exact>spacex</NavLink>
                <NavLink to="/rockets" activeClassName="active" className="item">rockets</NavLink>
                <NavLink to="/forum" activeClassName="active" className="item">forum</NavLink>
                <Menu.Menu position='right'>
                <NavLink to="/login" activeClassName="active" className="item">login</NavLink>
                <NavLink to="/register" activeClassName="active" className="item">register</NavLink>
            </Menu.Menu>
        </Menu>
    );


    return menuBar;
}


export default MenuBar;