import '../styles/main.css'
import '../styles/reset.css'
import '../styles/styles.css'
import '../styles/last.css'
import '../styles/item.css'

function BookingCard(){
    return (
        <div class="booking-section">
            <h2 class="booking-header">Booking</h2>
            <hr class="booking-line"/>

            <div class="date-picker-container">
                <label for="date-input" class="date-label">From</label>
                <div class="date-input-wrapper">
                    <input type="text" id="date-input" class="date-input" value="10/12/2021" readonly/>
                    <img src="./icons/bx_bx-calendar.svg" alt="icon" class="calendar-icon"/>
                </div>
            </div>

            <div class="date-picker-container">
                <label for="date-input" class="date-label">To</label>
                <div class="date-input-wrapper">
                    <input type="text" id="date-input" class="date-input" value="10/12/2021" readonly/>
                    <img src="./icons/bx_bx-calendar.svg" alt="icon" class="calendar-icon"/>
                </div>
            </div>

            <div class="date-picker-container">
                <label for="date-input" class="date-label">No. of guest</label>
                <div class="date-input-wrapper">
                    <input type="text" id="date-input" class="date-input" value="2 adults" readonly/>
                    <img src="./icons/ant-design_caret-down-outlined.svg" alt="icon" class="calendar-icon"/>
                </div>
            </div>

            <p class="subtotal">Subtotal</p>
            <p class="price">$78.90</p>

            <button class="confirm-booking-btn confirm-green">Confirm Booking</button>

            <button class="wishlist-btn">
                <img src="./icons/like.svg" alt="icon"/>
                Save To Wishlist
            </button>
            
            <button class="wishlist-btn">
                <img src="./icons/share.svg" alt="icon"/>
                Share the activity
            </button>
        </div>
    );
}

export default BookingCard;