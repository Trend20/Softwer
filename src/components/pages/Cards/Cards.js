import React from 'react'
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <div className="card-intro">
                <div className="card-intro-text">
                    <h1>Choose the card and package that suits you best</h1>
                    <p>We will help you make a decision on what card to choose. Depending on your needs, our team is ready to give you a piece of advice.</p>
                    <button className="card-btn">View all plans</button>
                </div>

                <div className="card-intro-img">
                    <img src="/img/cardintro.png" alt="card"/>
                </div>
            </div>
        </div>
    )
}

export default Cards
