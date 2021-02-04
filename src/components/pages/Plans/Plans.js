import React from 'react'
import { TiTick} from 'react-icons/ti';

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

                  <div className="price-card" id="standard">
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

                  <div className="price-card" id="standard">
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
        </div>
    )
}

export default Plans
