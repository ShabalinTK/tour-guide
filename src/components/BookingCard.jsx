import "../styles/styles_rad.css"
import React from "react";

function BookingCard({ price }){
    return (
        <div className="booking-section_rad">
            <h2 className="booking-header_rad">Booking</h2>
            <hr className="booking-line_rad"/>

            <div className="date-picker-container_rad">
                <label htmlFor="date-input_rad" className="date-label_rad">From</label>
                <div className="date-input-wrapper_rad">
                    <input type="text" id="date-input_rad" className="date-input_rad" defaultValue="10/12/2021" readOnly/>
                    <img src="../icons_rad/bx_bx-calendar.svg" alt="icon" className="calendar-icon_rad"/>
                </div>
            </div>

            <div className="date-picker-container_rad">
                <label htmlFor="date-input_rad" className="date-label_rad">To</label>
                <div className="date-input-wrapper_rad">
                    <input type="text" id="date-input_rad" className="date-input_rad" defaultValue="10/12/2021" readOnly/>
                    <img src="../icons_rad/bx_bx-calendar.svg" alt="icon" className="calendar-icon_rad"/>
                </div>
            </div>

            <div className="date-picker-container_rad">
                <label htmlFor="date-input_rad" className="date-label_rad">No. of guest</label>
                <div className="date-input-wrapper_rad">
                    <input type="text" id="date-input_rad" className="date-input_rad" defaultValue="2 adults" readOnly/>
                    <img src="../icons_rad/ant-design_caret-down-outlined.svg" alt="icon" className="calendar-icon_rad"/>
                </div>
            </div>

            <p className="subtotal_rad">Subtotal</p>
            <p className="price_rad">${price?.toFixed(2)}</p>

            <button className="confirm-booking-btn_rad confirm-green">Confirm Booking</button>

            <button className="wishlist-btn_rad">
                <img src="../icons_rad/like.svg" alt="icon"/>
                Save To Wishlist
            </button>
            
            <button className="wishlist-btn_rad">
                <img src="../icons_rad/share.svg" alt="icon"/>
                Share the activity
            </button>
        </div>
    );
}

export default BookingCard;