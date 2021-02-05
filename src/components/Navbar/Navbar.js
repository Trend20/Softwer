import React, { useState } from 'react'

import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

import { Home, About, Cards, Plans, Registration} from "../index";


// icons
import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import logo from '../../assets/logo.png';


// navbar styles

import './Navbar.css';

// logo image

function Navbar() {

    const [ click, setClick ] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <Router>
            <div className="header">

                {/* logo  */}
                  <div className="logo-nav">
                    <div className="logo-container">
                       <Link to="/">
                         <a href="#">
                             <img src={logo} alt="logo" />
                         </a>
                       </Link>
                    </div>
                    <ul className={click ? "nav-options active" : "nav-options"}>

                        <li className="option" onClick={closeMobileMenu}>
                           <Link to="/" style={{
                               textDecoration: 'none',
                               fontSize: '1.2rem',
                               fontWeight: '700'
                           }}>Home</Link>
                        </li>

                        <li className="option" onClick={closeMobileMenu}>
                           <Link to="/about" style={{
                               textDecoration: 'none',
                               fontSize: '1.2rem',
                               fontWeight: '700'
                           }}>About</Link>
                        </li>

                        <li className="option" onClick={closeMobileMenu}>
                           <Link to="/cards" style={{
                               textDecoration: 'none',
                               fontSize: '1.2rem',
                               fontWeight: '700'
                           }}>Types of Cards</Link>
                        </li>

                        <li className="option" onClick={closeMobileMenu}>
                           <Link to="/plans"
                           style={{
                            textDecoration: 'none',
                            fontSize: '1.2rem',
                            fontWeight: '700'
                        }}>Plans</Link>
                        </li>

                        <li className="option" onClick={closeMobileMenu}>
                           <Link to="/registration" style={{
                               textDecoration: 'none',
                               fontSize: '1.2rem',
                               fontWeight: '700'
                           }}>Registration</Link>
                        </li>
                    </ul>
                 </div>

                 <div className="mobile-menu" onClick={handleClick}>
                    {click ? (
                     <CloseMenu className="menu-icon" />
                    ) : (
                     <MenuIcon className="menu-icon" />
                     )}
                 </div>
            </div>

             {/* switch the routes */}

                <Switch>

                    {/* renders home page */}
                    <Route exact path="/">
                        <Home />
                    </Route>
                     
                    {/* renders about page */}
                    <Route path="/about">
                        <About />
                    </Route>

                     {/* renders types of cards page */}
                    <Route path="/cards">
                        <Cards />
                    </Route>

                    {/* renders plans page */}
                    <Route path="/plans">
                        <Plans />
                    </Route>

                    {/* renders registration page */}
                    <Route path="/registration">
                        <Registration/>
                    </Route>
                </Switch>
        </Router>
    )
}

export default Navbar
