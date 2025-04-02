import '../styles/styles_rad.css';
import React from "react";

function DetailActivity({ activities }){
    return (
        <div className="activity">
            <h2>Activity</h2>
            <h3>What You Will Do</h3>
            <ul className="list_rad">
                {activities?.map((activity, index) => (
                    <li key={index}>{activity}</li>
                ))}
            </ul>
            <hr className="line_rad"/>
        </div>
    );
}

export default DetailActivity;