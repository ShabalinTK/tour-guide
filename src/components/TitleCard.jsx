import React from "react";
import "../styles/styles_rad.css";
import "../styles/reset1.css";

function TitleCard({ title, location, reviews }) {
    return (
        <div className="header-main_rad">
            <div className="header-main__text_rad">
                <h1 className="header-main__title_rad">{title}</h1>
            </div>
            <div className="header-main__bottom_rad">
                <div className="header-main__bottom-location_rad">
                    <img src="../icons_rad/Vector.svg" alt="location" className="header-main__icon-location_rad" />
                    <div className="header-main__bottom-location-name-container_rad">
                        <p className="header-main__bottom-location-name_rad">{location}</p>
                    </div>
                    <img src="../icons_rad/Rectangle 190.svg" alt="rectangle" />
                    <div className="header-main__assement_rad">
                        <div className="header-main__assement-stars_rad">
                            {[...Array(5)].map((_, i) => (
                                <img key={i} src="../icons_rad/Star 1.svg" alt="star" className="star_rad" />
                            ))}
                        </div>
                        <p className="assesment-reviews_rad">({reviews} reviews)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TitleCard;