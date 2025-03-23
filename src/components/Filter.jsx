import React from "react";
import '../styles/index.css'
import '../styles/reset1.css'
import '../styles/variables.css'
import FilterItem from "./FilterItem";

function Filter({ name, items }){
    return(
        <div className="filters">
            <div className="filters__top">
                <h3 className="filters__title">{name}</h3>
            </div>
            <div className="filters__bottom">
                {
                    items.map((item, index) => (
                        <FilterItem
                        key={index}
                        title={item.title}
                        />
                    ))
                }
                { items.length >= 7 ? <a className="filters__link">Show More Destinations</a> : "" }
            </div>
        </div>
    );
}

export default Filter;