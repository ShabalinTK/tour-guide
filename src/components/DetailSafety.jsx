import '../styles/styles_rad.css';
import React from "react";

function DetailSafety({ safety }){
    return (
        <div className="safety">
            <h2>Safety</h2>
            <h3>Health Precautions</h3>
            <ul className="list_rad">
                {safety?.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <hr className="line_rad"/>
        </div>
    );
}

export default DetailSafety;