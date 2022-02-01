import React from 'react'
import {Link} from "react-router-dom";
import {
    useLocation
} from 'react-router-dom';
const Header = ()=>{
    const location = useLocation();
    return(
        <div className="row nav-container">
            <nav>
                <div className="nav-wrapper #42a5f5 blue lighten-1 ">
                    <a href="#!" data-target="mobile-demo" className="brand-logo" style={{marginLeft:"100px"}}>
                        <Link to="/">EduBot</Link>
                    </a>
                    <img src={require('../src/Assests/Images/edubBotLogo.gif')} width="auto" height="64" alt="loading..." />
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <Link to="/about">About Us</Link>{' '}
                        </li>
                        <li>
                            <Link to="/userGuide">User Guide</Link>{' '}
                        </li>
                        <li>
                            <Link to="/login">Login</Link>{' '}
                        </li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li>
                    <Link to="/about">About Us</Link>|{' '}
                </li>
                <li>
                    <Link to="/landing">User Guide</Link>
                </li>

                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>
    )
}
export default Header;
