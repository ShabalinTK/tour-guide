import React from "react";
import "../styles/styles_rad.css"
import "../styles/reset1.css"

function TitleCard(){
    return (
        <div class="header-main_rad">
            <div class="header-main__text_rad">
                <h1 class="header-main__title_rad">Vintage Double Decker Bus Tour & Thames River Cruise</h1>
            </div>
            <div class="header-main__bottom_rad">
                <div class="header-main__bottom-location_rad">
                    <img src="../icons_rad/Vector.svg" alt="location" class="header-main__icon-location_rad"/>
                    <div class="header-main__bottom-location-name-container_rad">
                        <p class="header-main__bottom-location-name_rad">Gothenburg</p>
                    </div>
                    <img src="../icons_rad/Rectangle 190.svg" alt="rectangle"/>
                    <div class="header-main__assement_rad">
                        <div class="header-main__assement-stars_rad">
                            <img src="../icons_rad/Star 1.svg" alt="star" class="star_rad"/>
                            <img src="../icons_rad/Star 1.svg" alt="star" class="star_rad"/>
                            <img src="../icons_rad/Star 1.svg" alt="star" class="star_rad"/>
                            <img src="../icons_rad/Star 1.svg" alt="star" class="star_rad"/>
                            <img src="../icons_rad/Star 1.svg" alt="star" class="star_rad"/>
                        </div>
                        <p class="assesment-reviews_rad">(348 reviews)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TitleCard;