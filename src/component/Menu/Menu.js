import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { menus } from '../../routes';

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? 'active' : '';
            return (
                <li className={`nav-item ${active}`}>
                    <Link to={to} className='nav-link'> {label} </Link>
                </li>
            )
        }} />
    )
}

class Menu extends Component {
    showMenu = (menus) => {
        var result = null;

        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} />
                )
            })
        }

        return result;
    }

    render() {
        return (
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                {this.showMenu(menus)}
            </ul>
        );
    }
}

export default Menu;