import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import { Home, About, Cards, Plans, Registration} from "../index";

function Footer() {
    return (
        <Router>
            <div className="footer">
            <div className="nav-menu">
                <h1>Connect with us</h1>
                <div className="menu-links">
                    <h3>Menu</h3>
                    <nav>
                    <ul>
                        <li className="active">
                            <Link to="/"
                            style={{ fontWeight: '700',
                            textDecoration: 'none',
                            cursor: 'pointer'
                            }}>Home</Link>
                        </li>

                        <li>
                            <Link to="/about"
                            style={{ fontWeight: '700',
                            textDecoration: 'none',
                            cursor: 'pointer'
                            }}>About</Link>
                        </li>

                        <li>
                            <Link to="/cards"
                            style={{ fontWeight: '700',
                            textDecoration: 'none',
                            cursor: 'pointer'
                            }}>Types of Cards</Link>
                        </li>

                        <li>
                            <Link to="/plans"
                            style={{ fontWeight: '700',
                            textDecoration: 'none',
                            cursor: 'pointer'
                            }}>Plans</Link>
                        </li>

                        <li>
                            <Link to="/registration" 
                            style={{ fontWeight: '700',
                                     textDecoration: 'none',
                                     cursor: 'pointer'
                            }}>Registration</Link>
                        </li>
                    </ul>
                </nav>

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
            </div>
        </div>
        </Router>
    )
}

export default Footer
