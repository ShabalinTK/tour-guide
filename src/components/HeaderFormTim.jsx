import React from "react";
import "../styles/last.css"

function HeaderFormTim(){
    return (
        <div class="form_tim">
            <div class="main_header_location_tim">
                <div class="main_block_location_tim">
                    <img src="./imggg/main_header_location_tim.png" alt=""/>
                    <div class="main_header_text_tim">Location</div>  
                </div>
                <div class="main_header_location_text_tim">
                    Search For A Destination 
                </div>
            </div>
            <div class="create_line_tim3"></div>
            <div class="main_header_guests_tim">
                <div class="main_block_guests_tim">
                    <img src="./imggg/main_header_guests_tim.png" alt=""/>
                    <dev class="main_header_text_tim">Guests</dev>
                </div>
                <div class="main_header_guests_text_tim">
                    How many Guests?
                </div>
            </div>
            <div class="create_line_tim3"></div>
            <div class="main_header_date_tim">
                <div class="main_block_data_tim">
                    <img src="./imggg/main_header_data_tim.png" alt=""/>
                    <div class="main_header_text_tim">Date</div>
                </div>
                <div class="main_header_data_text_tim">
                    Pick a date
                </div>
            </div>
            <div class="main_header_button_tim">
                <button class="main_header_button_block_tim">Search</button>
            </div>
        </div>
    );
}

export default HeaderFormTim;