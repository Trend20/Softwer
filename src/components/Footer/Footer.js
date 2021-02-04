import React from 'react'

import { FaFacebook, FaTwitter, FaLinkedin,} from 'react-icons/fa';
import { MdCastConnected } from 'react-icons/md';

import './Footer.css';

function Footer() {
    return (
        <footer>
              <div className="footer-menu">
                  <h1>Connect with us</h1>
                  <div className="footer-nav">
                      <h3>Menu</h3>
                      <a href="#" className="active">Home</a>
                      <a href="#">About</a>
                      <a href="#">Types of cards</a>
                      <a href="#">Plans</a>
                      <a href="#">Registration</a>
                  </div>

                  <div className="footer-nav">
                      <h3>Information</h3>
                      <a href="#">Security</a>
                      <a href="#">Reviews</a>
                      <a href="#">Careers</a>
                      <a href="#">Affiliates</a>
                      <a href="#">Partnerships</a>
                      <a href="#">FAQ</a>
                  </div>
              </div>

              <div className="connect">
                  <p>email us at
                      <a href="softwer@demolink.org">softwer@demolink.org</a>
                  </p>
              </div>

              {/* social links */}
              <div className="footer-icons">
                  <p>Follow us:</p>
                  <div className="icon-fonts">
                          <i><MdCastConnected /></i>
                           <i><FaFacebook /></i>
                           <i><FaTwitter ></FaTwitter></i>
                           <i><FaLinkedin /></i>
                  </div>

                  <div className="footer-images">
                      <img src="/img/appstore.png" alt="appstore"/>
                      <img src="/img/googleplay.png" alt="googleplay"/>
                      <img src="/img/browser.png" alt="browser"/>
                  </div>
              </div>

              <p className="copyright">2020 © softwer. All Rights Reserved</p>
          </footer>
    )
}

export default Footer
