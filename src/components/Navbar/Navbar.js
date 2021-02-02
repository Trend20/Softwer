import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

function Navbar() {
    return (
        <Router>
            <div className="navbar">
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

                {/* switch the routes */}

                <Switch>
                    {/* renders home page */}
                    <Route path="/">
                        <Home />
                    </Route>
                     
                      {/* renders home page */}

                    <Route path="/about">
                        <About />
                    </Route>

                     {/* renders home page */}
                    <Route path="/cards">
                        <Cards />
                    </Route>

                    {/* renders home page */}
                    <Route path="/plans">
                        <Plans />
                    </Route>

                    {/* renders home page */}
                    <Route path="/registration">
                        <Registration />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Navbar
