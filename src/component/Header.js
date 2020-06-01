import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu/Menu';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <Link to="" className="navbar-brand">API</Link>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <Menu />
                </div>
            </nav>
        );
    }
}

export default Header;