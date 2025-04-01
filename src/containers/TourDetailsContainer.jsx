import React from "react";
import DetailActivity from "../components/DetailActivity"
import DetailIncludes from "../components/DetailIncludes"
import DetailSafety from "../components/DetailSafety"
import DetailDetsils from "../components/DetailDetsils"
import DetailMeeting from "../components/DetailMeeting"
import DetailMaps from "../components/DetailMaps"

function TourDetailsContainer() {
    return (
        <div class="tour-details_rad">
            <DetailActivity />
            <DetailIncludes />
            <DetailSafety />
            <DetailDetsils />
            <DetailMeeting />
            <DetailMaps />
        </div>
    );
}

export default TourDetailsContainer;