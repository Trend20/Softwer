import React from 'react'
import { TiTick} from 'react-icons/ti';
import Footer from '../../Footer/Footer';

import './Plans.css';

function Plans() {
    return (
        <div className="plans">
            <div className="plans-card">
              <div className="plans-head">
                <h1>Find a plan that works for you</h1>
                <h3>More than a bank account</h3>
              </div>
              <div className="card-container">
                  <div className="price-card" id="standard">
                      <h3>Standard Card</h3>
                      <h1>
                          <sub>$</sub>99<sub>/mon</sub>
                      </h1>
                      <div className="price-list">
                          <p>
                              <i><TiTick /></i>Foreign medical expenses
                          </p>
                          <p>
                              <i><TiTick /></i>Pellentesque vehicul
                          </p>
                          <p>
                              <i><TiTick /></i>Cras pretium vestibulum
                          </p>
                          <p>
                              <i><TiTick /></i>Curabitur rhoncus
                          </p>
                      </div>
                      <button>Open account</button>
                  </div>

                  <div className="price-card" id="business">
                      <h3>Business Card</h3>
                      <h1>
                          <sub>$</sub>119<sub>/mon</sub>
                      </h1>
                      <div className="price-list">
                          <p>
                              <i><TiTick /></i>Foreign medical expenses
                          </p>
                          <p>
                              <i><TiTick /></i>Pellentesque vehicul
                          </p>
                          <p>
                              <i><TiTick /></i>Cras pretium vestibulum
                          </p>
                          <p>
                              <i><TiTick /></i>Curabitur rhoncus
                          </p>
                      </div>
                      <button>Open account</button>
                  </div>

                  <div className="price-card" id="platinum">
                      <h3>Platinum Card</h3>
                      <h1>
                          <sub>$</sub>149<sub>/mon</sub>
                      </h1>
                      <div className="price-list">
                          <p>
                              <i><TiTick /></i>Foreign medical expenses
                          </p>
                          <p>
                              <i><TiTick /></i>Pellentesque vehicul
                          </p>
                          <p>
                              <i><TiTick /></i>Cras pretium vestibulum
                          </p>
                          <p>
                              <i><TiTick /></i>Curabitur rhoncus
                          </p>
                      </div>
                      <button>Open account</button>
                  </div>
              </div>
            </div>

            {/* sign-up */}
            <div className="sign-up">
                <h1>Sign up and get your bank account in 8 minutes</h1>
                <p>Sign up right now and enjoy the wide variety of possibilities which our application provides.</p>
                <button className="button">Open bank account</button>
            </div>


            <Footer />
        </div>
    )
}

export default Plans
