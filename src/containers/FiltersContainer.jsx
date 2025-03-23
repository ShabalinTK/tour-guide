import React from "react";
import '../styles/index.css'
import '../styles/reset1.css'
import '../styles/variables.css'
import Availability from "../components/Availability";
import Filter from "../components/Filter";

function FiltersContainer(){
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
            { title: "ort of Miami" },
            { title: "Everglades National Park" },
            { title: "Fisher Island" },
            { title: "Coconut Grove" }
        ];

    return(
        <div className="filters-container">
            <Availability/>
            <Filter name={"Theme"} items={filters1}/>
            <Filter name={"Duration"} items={filters2}/>
            <Filter name={"Destination"} items={filters3}/>
        </div>
    );
}

export default FiltersContainer;