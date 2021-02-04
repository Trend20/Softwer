import React from 'react'
import './Home.css';

import { FaFacebook, FaTwitter, FaLinkedin,} from 'react-icons/fa';
import { MdCastConnected } from 'react-icons/md';

function Home() {
    return (
        <div className="home-page">
            <div className="hero">
                <div className="hero-text">
                    <h5>The mobile bank</h5>
                    <h1>The world at your fingertips</h1>
                    <button className="button">Open bank account</button>
                </div>

                <div className="hero-slides">
                        <img src="/img/hero-mg1.png" alt="slide1" />
                </div>
            </div>


            {/* card section */}

            <div className="card">
                <div className="card-text">
                    <h3>Take control of your finances. With just one app.</h3>
                    <p className="card-description">
                      No more worries about your cash expenses. With the help of our application, you will have the opportunity to check and regulate your finances anytime you want.
                    </p>
                </div>

                <div className="card-image">
                    <img src="/img/card.png" alt="card" />
                </div>
            </div>

            {/* travel section */}

            <div className="travel">
                <div className="travel-img">
                    <img src="/img/travel.png" alt="travel" />
                </div>

                <div className="travel-text">
                    <h1>Travel like you never left</h1>
                    <h5>Spend anywhere</h5>
                    <p>Feel the unique advantages of using the application in every corner of the world</p>
                    <h5>Get up and go</h5>
                    <p>Wherever you are, you are one click apart from making any purchase you want</p>
                </div>
            </div>

            {/* account info*/}

            <div className="account-demo">
                <div className="demo-text">
                    <h1>Get clarity over your money, in ways you`d never expect</h1>
                    <p>
                      In case you ever feel worried about the safety of your accounts, our application will give you completely clear report based on your charges.
                    </p>
                </div>

                <div className="demo-image">
                    <img src="/img/demo.png" alt="demo" />
                </div>
            </div>

            {/* chat section */}

            <div className="chat">
                <div className="chat-image">
                    <img src="/img/chatbg.png" />
                </div>

                <div className="chat-text">
                    <h1>Chat us, tweet us, email us</h1>
                    <p>
                      An experienced team of friendly and reliable technical support specialists will help you in solving complicated and urgent questions.
                    </p>

                    <img src="/img/chat.png"  alt="chat"/>

                    <div className="social">

                       <div className="head">
                            <p>Follow Us:</p>
                        </div>

                        <div className="icons">
                           <i><MdCastConnected /></i>
                           <i><FaFacebook /></i>
                           <i><FaTwitter ></FaTwitter></i>
                           <i><FaLinkedin /></i>
                        </div>
                    </div>
                </div>
            </div>

            {/* sign-up */}
            <div className="sign-up">
                <h1>Sign up and get your bank account in 8 minutes</h1>
                <p>Sign up right now and enjoy the wide variety of possibilities which our application provides.</p>
                <button className="button">Open bank account</button>
            </div>

            {/* footer */}

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
        </div>
    )
}

export default Home
