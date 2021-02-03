import React from 'react'
import './Home.css';

function Home() {
    return (
        <div className="home-page">
            <div className="hero">
                <div className="hero-text">
                    <h5>The mobile bank</h5>
                    <h1>The world at your fingertips</h1>
                    <button>Open bank account</button>
                </div>

                <div className="hero-slides">
                        <img src="/img/hero-mg1.png" alt="slide1" />
                </div>
            </div>
        </div>
    )
}

export default Home
