import '../styles/styles_rad.css'
import React from "react";
import WrapperImageContainer from "../containers/WrapperImageContainer"
import TourDetailsContainer from "../containers/TourDetailsContainer"
import DescriptionCard from "../components/DescriptionCard"
import TimContainer from "../containers/TimContainer"

function ContainerCard({ tour }) {
    return (
        <div className="container_rad">
            <WrapperImageContainer 
                mainImage={tour.imageUrls} 
                price={tour.price}
            />
            <DescriptionCard description={tour.description}/>
            <TourDetailsContainer 
                activities={tour.activities}
                includes={tour.includes}
                safety={tour.safety}
                details={tour.details}
                address={tour.address}
            />
            <TimContainer />
        </div>
    );
}

export default ContainerCard;