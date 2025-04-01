import "../styles/styles_rad.css"

function BookingCard(){
    return (
        <div class="booking-section_rad">
            <h2 class="booking-header_rad">Booking</h2>
            <hr class="booking-line_rad"/>

            <div class="date-picker-container_rad">
                <label for="date-input_rad" class="date-label_rad">From</label>
                <div class="date-input-wrapper_rad">
                    <input type="text" id="date-input_rad" class="date-input_rad" value="10/12/2021" readonly/>
                    <img src="../icons_rad/bx_bx-calendar.svg" alt="icon" class="calendar-icon_rad"/>
                </div>
            </div>

            <div class="date-picker-container_rad">
                <label for="date-input_rad" class="date-label_rad">To</label>
                <div class="date-input-wrapper_rad">
                    <input type="text" id="date-input_rad" class="date-input_rad" value="10/12/2021" readonly/>
                    <img src="../icons_rad/bx_bx-calendar.svg" alt="icon" class="calendar-icon_rad"/>
                </div>
            </div>

            <div class="date-picker-container_rad">
                <label for="date-input_rad" class="date-label_rad">No. of guest</label>
                <div class="date-input-wrapper_rad">
                    <input type="text" id="date-input_rad" class="date-input_rad" value="2 adults" readonly/>
                    <img src="../icons_rad/ant-design_caret-down-outlined.svg" alt="icon" class="calendar-icon_rad"/>
                </div>
            </div>

            <p class="subtotal_rad">Subtotal</p>
            <p class="price_rad">$78.90</p>

            <button class="confirm-booking-btn_rad confirm-green">Confirm Booking</button>

            <button class="wishlist-btn_rad">
                <img src="../icons_rad/like.svg" alt="icon"/>
                Save To Wishlist
            </button>
            
            <button class="wishlist-btn_rad">
                <img src="../icons_rad/share.svg" alt="icon"/>
                Share the activity
            </button>
        </div>
    );
}

export default BookingCard;