import '../styles/styles_rad.css';
import React from "react";

function DetailIncludes({ includes }){
    return (
        <div className="includes">
            <h2>What Is Included / Not Included</h2>
            <div className="includes__container_rad">
                <div className="includes__column_rad">
                    <h3>Includes</h3>
                    <ul className="list_rad">
                        {includes?.Includes?.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="includes__column_rad">
                    <h3>Not Includes</h3>
                    <ul className="list_rad">
                        {includes?.NotIncludes?.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <hr className="line_rad"/>
        </div>
    );
}

export default DetailIncludes;