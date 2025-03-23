import React from "react";

function Heading(){
    return (
        <header className="header-main">
          <div className="header-main__left">
            <h2 className="header-main__title">Things to do in London</h2>
            <p className="header-main__subtitle">49 activities found</p>
          </div>
          <div className="header-main__right">
            <label className="header-main__label" htmlFor="popularity">Sort by:</label>
            <select className="header-main__select" name="popularity">
              <option>Popularity</option>
              <option>Price</option>
            </select>
          </div>
        </header>
    );
}

export default Heading;