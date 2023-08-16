import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <div>
            <header id="masthead" className="site-header" role="banner">
                <hgroup>
                    <h1 className="site-title">Матусина поезія</h1>
                    <h2 className="site-description">вірші та проза Тамари Кржемінської</h2>
                </hgroup>
            </header>
            <div id="nav-menu-wrapper">
                <nav role="navigation" className="site-navigation main-navigation">
                    <div className="menu-menu-1-container">
                        <ul id="menu-menu-1" className="menu">
                            <li className="menu-item">
                                <NavLink className="header" to="/" aria-current="page">Головна</NavLink></li>
                            <li className="menu-item">
                                <NavLink className="header" to="/about">Про матусю</NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink className="header" to="/collections">Матусини збірки</NavLink>
                            </li>
                            <li className="menu-item ">
                                <NavLink className="header" to="/public">Громадські заходи</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Header;