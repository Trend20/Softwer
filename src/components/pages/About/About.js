import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about">
            <div className="about-intro">
                <div className="intro-text">
                    <h1>Application that simplify your life</h1>
                    <p>Tired of puzzling out how to track your charges or plan your finances? Our application introduces you the simplest and 
                        softwerest way to start taking control of your money.</p>
                        <button>Open bank account</button>
                </div>

                <div className="intro-image">
                    <img src="/img/intro.png" alt="intro" />
                </div>
            </div>

            {/* creators */}

            <div className="creators">
                <div className="head">
                    <div className="head-title">
                        <h3>Our creators</h3>
                        <h1>It`s different working with us</h1>
                    </div>

                    <div className="head-description">
                        <p>The team of knowledgeable developers has made the solution to simplify your life. We take care of every customer and work on upgrading the application.</p>
                    </div>
                </div>

                {/* team members */}

                <div className="team">
                    <div className="member">
                        <img src="/img/team1.png" alt="team" />
                        <h3>Adam Smith</h3>
                    </div>

                    <div className="member">
                        <img src="/img/team2.png" alt="team" />
                        <h3>Tom Green</h3>
                    </div>

                    <div className="member">
                        <img src="/img/team3.png" alt="team" />
                        <h3>Robert Lee</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
