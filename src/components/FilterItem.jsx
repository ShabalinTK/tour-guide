import React from "react";
import '../styles/index.css'
import '../styles/reset1.css'
import '../styles/variables.css'

function FilterItem({ title }){
    return(
        <label className="filters__label">
            <input type="checkbox" />{title}
        </label>
    );
}

export default FilterItem;