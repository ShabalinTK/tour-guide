import '../styles/styles_rad.css'

import React from "react";
import WrapperImageContainer from "../containers/WrapperImageContainer"
import TourDetailsContainer from "../containers/TourDetailsContainer"
import DescriptionCard from "../components/DescriptionCard"
import TimContainer from "../containers/TimContainer"


function ContainerCard() {
    return (
        <div class="container_rad">
            <WrapperImageContainer/>
            <DescriptionCard/>
            <TourDetailsContainer/>
            <TimContainer />
        </div>
    );
}

export default ContainerCard;