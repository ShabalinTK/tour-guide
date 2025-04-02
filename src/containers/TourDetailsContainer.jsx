import React from "react";
import DetailActivity from "../components/DetailActivity";
import DetailIncludes from "../components/DetailIncludes";
import DetailSafety from "../components/DetailSafety";
import DetailDetsils from "../components/DetailDetsils";
import DetailMeeting from "../components/DetailMeeting";
import DetailMaps from "../components/DetailMaps";

function TourDetailsContainer({ 
    activities, 
    includes, 
    safety, 
    details,
    address
}) {
    return (
        <div className="tour-details_rad">
            <DetailActivity activities={activities} />
            <DetailIncludes includes={includes} />
            <DetailSafety safety={safety} />
            <DetailDetsils details={details} />
            <DetailMeeting address={address} />
            <DetailMaps />
        </div>
    );
}

export default TourDetailsContainer;