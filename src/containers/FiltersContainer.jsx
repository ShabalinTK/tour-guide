import React from "react";
import '../styles/index.css';
import '../styles/reset1.css';
import '../styles/variables.css';
import Availability from "../components/Availability";
import Filter from "../components/Filter";

function FiltersContainer({
    themeFilters,
    setThemeFilters,
    durationFilters,
    setDurationFilters,
    destinationFilters,
    setDestinationFilters
}) {
    const filters1 = [
        { title: "Water activities" },
        { title: "Good for social distancing" },
        { title: "Adrenaline" },
        { title: "Nature" },
        { title: "Hidden gems" },
        { title: "Street art & grafitti" },
        { title: "Food" }
    ];

    const filters2 = [
        { title: "0-3 hours" },
        { title: "3-5 hours" },
        { title: "5-7 hours" },
        { title: "Full day (7+ hours)" },
        { title: "Multi-day" }
    ];

    const filters3 = [
        { title: "Biscayne Bay" },
        { title: "Downtown Miami" },
        { title: "Wynwood Arts District" },
        { title: "Port of Miami" },
        { title: "Everglades National Park" },
        { title: "Fisher Island" },
        { title: "Coconut Grove" }
    ];

    const handleFilterChange = (filterType, filterTitle, isChecked) => {
        const updateFilterState = (prevFilters) => {
            if (isChecked) {
                return [...prevFilters, filterTitle];
            } else {
                return prevFilters.filter(item => item !== filterTitle);
            }
        };

        switch(filterType) {
            case 'theme':
                setThemeFilters(prev => updateFilterState(prev, filterTitle, isChecked));
                break;
            case 'duration':
                setDurationFilters(prev => updateFilterState(prev, filterTitle, isChecked));
                break;
            case 'destination':
                setDestinationFilters(prev => updateFilterState(prev, filterTitle, isChecked));
                break;
            default:
                break;
        }
    };

    return(
        <div className="filters-container">
            <Availability/>
            <Filter 
                name={"Theme"} 
                items={filters1}
                selectedItems={themeFilters}
                onChange={(title, checked) => handleFilterChange('theme', title, checked)}
            />
            <Filter 
                name={"Duration"} 
                items={filters2}
                selectedItems={durationFilters}
                onChange={(title, checked) => handleFilterChange('duration', title, checked)}
            />
            <Filter 
                name={"Destination"} 
                items={filters3}
                selectedItems={destinationFilters}
                onChange={(title, checked) => handleFilterChange('destination', title, checked)}
            />
        </div>
    );
}

export default FiltersContainer;