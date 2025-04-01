import React from "react";
import '../styles/index.css';
import '../styles/reset1.css';
import '../styles/variables.css';
import PlacesContainer from "./PlacesContainer";
import FiltersContainer from "./FiltersContainer";

function Container({ sortOption }) {
    return (
        <div className="container_kol">
            <div className="container">
                <FiltersContainer />
                <PlacesContainer sortOption={sortOption} />
            </div>
        </div>
    );
}

export default Container;