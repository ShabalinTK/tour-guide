import React from "react";
import '../styles/index.css';
import '../styles/reset1.css';
import '../styles/variables.css';
import PlacesContainer from "./PlacesContainer";
import FiltersContainer from "./FiltersContainer";

function Container({ 
    sortOption,
    themeFilters,
    setThemeFilters,
    durationFilters,
    setDurationFilters,
    destinationFilters,
    setDestinationFilters
}) {
    return (
        <div className="container_kol">
            <div className="container">
                <FiltersContainer 
                    themeFilters={themeFilters}
                    setThemeFilters={setThemeFilters}
                    durationFilters={durationFilters}
                    setDurationFilters={setDurationFilters}
                    destinationFilters={destinationFilters}
                    setDestinationFilters={setDestinationFilters}
                />
                <PlacesContainer 
                    sortOption={sortOption}
                    themeFilters={themeFilters}
                    durationFilters={durationFilters}
                    destinationFilters={destinationFilters}
                />
            </div>
        </div>
    );
}

export default Container;