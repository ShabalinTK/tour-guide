import '../styles/styles_rad.css';
import React from "react";

function DetailDetsils({ details }){
    return (
        <div className="details">
            <h2>Details</h2>
            <div className="details__container_rad">
                <div className="details__column_rad">
                    <h3>Language</h3>
                    <ul className="list_rad">
                        {details?.Language?.map((lang, index) => (
                            <li key={index}>{lang}</li>
                        ))}
                    </ul>
                </div>
                <div className="details__column_rad">
                    <h3>Duration</h3>
                    <p>● {details?.Duration || "N/A"}</p>
                </div>
                <div className="details__column_rad">
                    <h3>Number Of People</h3>
                    <p>● {details?.GroupSize || "N/A"}</p>
                </div>
            </div>
        </div>
    );
}

export default DetailDetsils;