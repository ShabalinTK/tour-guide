import '../styles/styles_rad.css';
import React from "react";

function DetailMeeting({ address }){
    return (
        <div className="meeting_rad">
            <h3>Meeting Point Address</h3>
            <p id="meeting-text">
                ● {address || "Meeting point address will be provided after booking"}
            </p>
        </div>
    );
}

export default DetailMeeting;