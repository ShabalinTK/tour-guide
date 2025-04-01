import React from "react";
import '../styles/index.css';
import '../styles/reset1.css';
import '../styles/variables.css';

function FilterItem({ title, checked, onChange }) {
    return (
        <label className="filters__label">
            <input 
                type="checkbox" 
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                className="filters__checkbox"
            />
            <span className="filters__text">{title}</span>
        </label>
    );
}

export default FilterItem;