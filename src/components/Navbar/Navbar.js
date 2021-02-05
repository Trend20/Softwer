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

                {/* <Link to="/" className="logo">
                    <img src={logo} alt="logo" />
                </Link>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/about">About</Link>
                        </li>

                        <li>
                            <Link to="/cards">Types of Cards</Link>
                        </li>

                        <li>
                            <Link to="/plans">Plans</Link>
                        </li>

                        <li>
                            <Link to="/registration">Registration</Link>
                        </li>
                    </ul>
                </nav> */}
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
                           <Link to="/">Home</Link>
                        </li>

                        <li className="option" onClick={closeMobileMenu}>
                           <Link to="/about">About</Link>
                        </li>

                        <li className="option" onClick={closeMobileMenu}>
                           <Link to="/cards">Types of Cards</Link>
                        </li>

                        <li className="option mobile-option" onClick={closeMobileMenu}>
                           <Link to="/plans">Plans</Link>
                        </li>
                        
                        <li className="option mobile-option" onClick={closeMobileMenu}>
                           <Link to="/registration<">Registration</Link>
                        </li>
                    </ul>
                 </div>

                 <ul className="signin-up">
                    <li className="sign-in" onClick={closeMobileMenu}>
                        <a href="#">SIGN-IN</a>
                    </li>
                    <li onClick={closeMobileMenu}>
                        <a href="" className="signup-btn">
                           SIGN-UP
                        </a>
                    </li>
                 </ul>
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
