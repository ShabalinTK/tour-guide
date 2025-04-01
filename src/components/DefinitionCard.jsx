import '../styles/main.css'
import '../styles/reset.css'
import '../styles/styles.css'
import '../styles/last.css'

function DefinitionCard(){
    return (
        <div class="definition">
            <section class="def-section">
                <div class="def-part">
                    <div class="def-title-container">
                        <img src="./icons/line-md_cancel.svg" alt="icon" class="def-icon"/>
                        <h3 class="def-title">Free cancellation</h3>
                    </div>
                    <p class="def-text">
                        Cancel up to 24 hours in advance to receive a full refund
                    </p>
                </div>

                <div class="def-part right-part">
                    <div class="def-title-container ">
                        <img src="./icons/bx_bx-spray-can.svg" alt="icon" class="def-icon"/>
                        <h3 class="def-title">Health precautions</h3>
                    </div>
                    <p class="def-text">
                        Special health and safety measures apply. Learn more
                    </p>
                </div>
            </section>

            <section class="def-section">
                <div class="def-part">
                    <div class="def-title-container">
                        <img src="./icons/carbon_application-mobile.svg" alt="icon" class="def-icon"/>
                        <h3 class="def-title">Mobile ticketing</h3>
                    </div>
                    <p class="def-text">
                        Use your phone or print your voucher                                    </p>
                </div>

                <div class="def-part right-part">
                    <div class="def-title-container ">
                        <img src="./icons/ant-design_field-time-outlined.svg" alt="icon" class="def-icon"/>
                        <h3 class="def-title">Duration 3.5 hours</h3>
                    </div>
                    <p class="def-text">
                        Check availability to see starting times.                                    </p>
                </div>
            </section>

            <section class="def-section">
                <div class="def-part">
                    <div class="def-title-container">
                        <img src="./icons/fluent_flash-checkmark-16-filled.svg" alt="icon" class="def-icon"/>
                        <h3 class="def-title">Instant confirmation</h3>
                    </div>
                    <p class="def-text">
                        Don’t wait for the confirmation!                                    </p>
                </div>

                <div class="def-part right-part">
                    <div class="def-title-container ">
                        <img src="./icons/healthicons_call-centre.svg" alt="icon" class="def-icon"/>
                        <h3 class="def-title">Live tour guide in English</h3>
                    </div>
                    <p class="def-text">
                        English
                    </p>
                </div>
            </section>
        </div>
    );
}

export default DefinitionCard;