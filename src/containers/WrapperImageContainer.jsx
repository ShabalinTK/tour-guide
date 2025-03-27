import '../styles/main.css'
import '../styles/reset.css'
import '../styles/styles.css'
import '../styles/last.css'
import '../styles/item.css'

import React from "react";
import ImagesCard from "../components/ImagesCard";
import BookingCard from "../components/BookingCard";

function WrapperImageContainer() {
    return (
        <div class="wrapper-image-section">
            <ImagesCard/>
            <BookingCard/>
        </div>
    );
}

export default WrapperImageContainer;