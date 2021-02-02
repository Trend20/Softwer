import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Cards from '../pages/Cards/Cards';
import Plans from '../pages/Plans/Plans';
import Registration from '../pages/Registration/Registration';

// import { Home, About, Cards, Plans, Registration} from './components/pages';

// icons
import { FaBars } from 'react-icons/fa';


// navbar styles

import './Navbar.css';

// logo image

function Navbar() {
    return (
        <Router>
            <div className="navbar">

                {/* logo  */}

                <Link to="/">
                    <img src="/img/logo.png" alt="logo" />
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
                </nav>

                <i className="toggle"> <FaBars /> </i>

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
            </div>
        </Router>
    )
}

export default Navbar
