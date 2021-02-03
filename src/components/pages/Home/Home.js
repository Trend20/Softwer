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


            {/* card section */}

            <div className="card">
                <div className="card-text">
                    <h3>Take control of your finances. With just one app.</h3>
                    <p>
                      No more worries about your cash expenses. With the help of our application, you will have the opportunity to check and regulate your finances anytime you want.
                    </p>
                </div>

                <div className="card-image">
                    <img src="/img/card.png" alt="card" />
                </div>
            </div>
        </div>
    )
}

export default Home
