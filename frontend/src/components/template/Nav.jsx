import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom'
const Nav = () => (
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/login">
                <i className="fa fa-sign-in"></i> Login
            </Link>
            <Link to="/register">
                <i className="fa fa-user-plus"></i> Cadastro
            </Link>
            <Link to="/">
                <i className="fa fa-home"></i> Início 
                {/* coloquei inicio */}
            </Link>
            <Link to="/users">
                <i className="fa fa-users"></i> Usuários
                {/* coloquei usuarios */}
            </Link>
        </nav>
    </aside>
)
export default Nav;