import React from 'react'
import './Registration.css';

import Footer from '../../Footer/Footer';

function Registration() {
    return (
        <div className="account">
            <form id="form">
                <h1>Personal Information</h1>
                <p>To get started, tell us about yourself.</p>

                <div className="form-fields">
                    <div className="form-group">
                        <label for="firstname">First name</label>
                        <input type="text" placeholder="First name*" />
                    </div>
                    <div className="form-group">
                        <label for="lastname">Last name</label>
                        <input type="text" placeholder="Last name*" />
                    </div>
                    <div className="form-group">
                        <label for="email">Email address</label>
                        <input type="email" placeholder="Email address*" />
                    </div>

                    <div className="form-group">
                        <label for="Day/Month/Year">Day/Month/Year</label>
                        <input type="text" placeholder="Day/Month/Year" />
                    </div>

                    <div className="form-group">
                        <label for="message">Message</label>
                        <textarea placeholder="Message*" cols="20" rows="10"></textarea>
                    </div>
                </div>

                <button>Registration Now</button>
            </form>

            <Footer />
        </div>
    )
}

export default Registration
