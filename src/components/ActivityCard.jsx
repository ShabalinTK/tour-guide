import React from "react";
import { Link } from "react-router-dom";
import '../styles/main.css';
import '../styles/reset.css';
import '../styles/styles.css';

function ActivityCard({ id, image, title, duration, reviews, price }) {
    return (
        <Link to={`/tour/${id}`} className="card-link">
            <div className="cart_1_tim">
                <img src={image} alt={title}/>
                <div className="cart_title_tim">
                    <h3>{title}</h3>
                </div>
                <div className="cart_description_tim">
                    <div className="description_time_tim">
                        <img src="/img/carts_time_icon_tim.png" alt="duration" className="description_time_img_tim"/> 
                        <span>Duration {duration}</span>
                    </div>
                    <div className="description_transport_tim">
                        <img src="/img/carts_car_icon_tim.png" alt="transport" className="description_car_img_tim"/> 
                        <span>Transport Facility</span>
                    </div>
                    <div className="description_family_tim">
                        <img src="/img/carts_people_icon_tim.png" alt="family" className="description_family_img_tim"/> 
                        <span>Family Plan</span>
                    </div>
                </div>
                <hr className="cart_line_tim"/>
                <div className="cart_info_tim">
                    <div className="stars_tim">
                        <img src="/img/carts_stars_icon_tim.png" alt="rating"/>
                        <span>{reviews} reviews</span>
                    </div>
                    <div className="money_tim">
                        <span className="dol_tim">{price}</span>
                        <span className="per_tim">per person</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ActivityCard;