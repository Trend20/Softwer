import React from 'react';
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
						<input type="text" placeholder="First name*" />
					</div>
					<div className="form-group">
						<input type="text" placeholder="Last name*" />
					</div>
					<div className="form-group">
						<input type="email" placeholder="Email address*" />
					</div>

					<div className="form-group">
						<input type="text" placeholder="Day/Month/Year" />
					</div>

					<div className="form-group">
						<textarea placeholder="Message*" cols="20" rows="10"></textarea>
					</div>
				</div>

				<button>Registration Now</button>
			</form>

			<Footer />
		</div>
	);
}

export default Registration;
