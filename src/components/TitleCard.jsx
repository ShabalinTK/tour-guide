import React from "react";
import '../styles/item.css'

function TitleCard({ city }){
    return (
        <div class="header-main">
            <div class="header-main__text">
                <h1 class="header-main__title">
                    {city.title}
                </h1>
            </div>
            <div class="header-main__bottom">
                <div class="header-main__bottom-location">
                    <img src="/iconsss/Vector.svg" alt="location" class="header-main__icon-location"/>
                    <div class="header-main__bottom-location-name-container">
                        <p class="header-main__bottom-location-name">Gothenburg</p>
                    </div>
                    <img src="/iconsss/Rectangle 190.svg" alt="rectangle"/>
                    <div class="header-main__assement">
                        <div class="header-main__assement-stars">
                            <img src="/iconsss/Star 1.svg" alt="star" class="star"/>
                            <img src="/iconsss/Star 1.svg" alt="star" class="star"/>
                            <img src="/iconsss/Star 1.svg" alt="star" class="star"/>
                            <img src="/iconsss/Star 1.svg" alt="star" class="star"/>
                            <img src="/iconsss/Star 1.svg" alt="star" class="star"/>
                        </div>
                        <p class="assesment-reviews">({city.reviews} reviews)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TitleCard;