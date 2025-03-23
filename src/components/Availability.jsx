import React from "react";
import '../styles/index.css'
import '../styles/reset1.css'
import '../styles/variables.css'

function Availability(){
    return(
        <form className="availability">
              <h3 className="availability__title">Availability</h3>
              <div className="availability__info">
                <div className="availability__item">
                  <p className="availability__text">From</p>
                  <input
                    type="text"
                    className="availability__input"
                    placeholder="10/12/2021"
                  />
                </div>
                <div className="availability__item">
                  <p className="availability__text">To</p>
                  <input
                    type="text"
                    className="availability__input"
                    placeholder="10/12/2021"
                  />
                </div>
  
                <button className="availability__button">Check Availability</button>
              </div>
            </form>
    );
}

export default Availability;