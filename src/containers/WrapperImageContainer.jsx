import '../styles/styles_rad.css'

import React from "react";
import ImagesCard from "../components/ImagesCard";
import BookingCard from "../components/BookingCard";

function WrapperImageContainer() {
    return (
        <div class="wrapper-image-section_rad">
            <ImagesCard/>
            <BookingCard/>
        </div>
    );
}

export default WrapperImageContainer;