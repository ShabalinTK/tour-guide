import '../styles/styles_rad.css'
import React from "react";

function DescriptionCard({ description }){
    return (
        <div className="description_rad">
            <h2 className="description__title">Description</h2>
            <p className="description__text_rad">
                {description || "No description available"}
            </p>
            <hr className="line_rad"/>
        </div>
    );
}

export default DescriptionCard;