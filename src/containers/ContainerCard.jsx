import '../styles/main.css'
import '../styles/reset.css'
import '../styles/styles.css'
import '../styles/last.css'
import '../styles/item.css'

import React from "react";
import WrapperImageContainer from "../containers/WrapperImageContainer"
import TourDetailsContainer from "../containers/TourDetailsContainer"
import DescriptionCard from "../components/DescriptionCard"


function ContainerCard() {
    return (
        <div class="container">
            <WrapperImageContainer/>
            <DescriptionCard/>
            <TourDetailsContainer/>
        </div>
    );
}

export default ContainerCard;