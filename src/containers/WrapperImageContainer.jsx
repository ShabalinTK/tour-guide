import '../styles/styles_rad.css'
import React from "react";
import ImagesCard from "../components/ImagesCard";
import BookingCard from "../components/BookingCard";

function WrapperImageContainer({ mainImage, price }) {
    return (
        <div className="wrapper-image-section_rad">
            <ImagesCard mainImage={mainImage}/>
            <BookingCard price={price}/>
        </div>
    );
}

export default WrapperImageContainer;