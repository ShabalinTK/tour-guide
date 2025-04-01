import React from "react";
import { AllPlaces } from "../containers/AllPlacesContainer.jsx";
import { useParams } from 'react-router-dom';
import ContainerCard from "../containers/ContainerCard.jsx"
import TitleCard from '../components/TitleCard.jsx'
import "../styles/styles_rad.css"
import "../styles/reset1.css"


function InfoCardContainer() {
    const { id } = useParams();
    const cityId = parseInt(id, 10);
    const city = AllPlaces.find(city => city.id === cityId);

    if (!city) {
        return <div>Palce not found</div>;
    }

    return (
        <main class="main">
            <div class="container_all_page">
                <TitleCard />
                <ContainerCard/>
            </div>
        </main>
    );
}

export default InfoCardContainer;