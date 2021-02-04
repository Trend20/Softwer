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
        </div>
    )
}

export default About
