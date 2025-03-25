import React from "react";

function Heading({ sortOption, setSortOption }) {
    return (
        <header className="header-main">
            <div className="header-main__left">
                <h2 className="header-main__title">Things to do in London</h2>
                <p className="header-main__subtitle">49 activities found</p>
            </div>
            <div className="header-main__right">
                <label className="header-main__label" htmlFor="sort">Sort by:</label>
                <select 
                    className="header-main__select" 
                    id="sort"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                >
                    <option value="popularity">Popularity</option>
                    <option value="price-high">Price (High to Low)</option>
                    <option value="price-low">Price (Low to High)</option>
                </select>
            </div>
        </header>
    );
}

export default Heading;