import React from 'react'
import { BiRightArrow } from 'react-icons/bi'
import './Cards.css';

import Footer from '../../Footer/Footer';

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


            {/* standard card */}

            <div className="standard">
                <div className="standard-img">
                    <img src="/img/standard.png" alt="standard" />
                </div>

                <div className="standard-text">
                    <h1>Standard Card</h1>
                    <p>Such type will be useful for people who want to start checking their casual cherges</p>

                    <div className="options">
                        <p>
                        <i><BiRightArrow /></i>
                            Theft insurance</p>
                        <p>
                        <i><BiRightArrow /></i>
                            Foreign medical expenses</p>
                        <p>
                        <i><BiRightArrow /></i>
                            Extended goods warranty</p>
                    </div>

                    <button className="card-btn">Open bank account</button>
                </div>
            </div>


            {/* business */}
            <div className="business">

                <div className="standard-text">
                    <h1>Business Card</h1>
                    <p>Such type will be useful for people who want to start checking their casual cherges</p>

                    <div className="options">
                        <p>
                        <i><BiRightArrow /></i>
                        Flight & luggage delay cover</p>
                        <p>
                        <i><BiRightArrow /></i>
                            Foreign medical expenses</p>
                        <p>
                        <i><BiRightArrow /></i>
                            Extended goods warranty</p>
                    </div>

                    <button className="card-btn">Open bank account</button>
                </div>

                <div className="business-img">
                    <img src="/img/business.png" alt="business" />
                </div>
            </div>

            {/* platinum */}
            <div className="standard">
                <div className="standard-img">
                    <img src="/img/platinum.png" alt="standard" />
                </div>

                <div className="standard-text">
                    <h1>Platinum Card</h1>
                    <p>Such type will be useful for people who want to start checking their casual cherges</p>

                    <div className="options">
                        <p>
                        <i><BiRightArrow /></i>
                        Purchase protection</p>
                        <p>
                        <i><BiRightArrow /></i>
                            Foreign medical expenses</p>
                        <p>
                        <i><BiRightArrow /></i>
                            Extended goods warranty</p>
                    </div>

                    <button className="card-btn">Open bank account</button>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Cards
