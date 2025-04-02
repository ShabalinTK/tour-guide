import "../styles/styles_rad.css"

function ImagesCard({ mainImage }){
    return (
        <div class="image-confirmation-section_rad">
            <div class="image-container_rad">
                <img src={mainImage} alt="Tour" id="main-img"/>

                <div className="small-images-container_rad">
                    <img src={mainImage} alt="Tour thumbnail" className="small-image_rad"/>
                    <img src={mainImage} alt="Tour thumbnail" className="small-image_rad"/>
                    <img src={mainImage} alt="Tour thumbnail" className="small-image_rad"/>
                    <img src={mainImage} alt="Tour thumbnail" className="small-image_rad"/>
                    <img src={mainImage} alt="Tour thumbnail" className="small-image_rad"/>
                </div>

                <div class="definition_rad">
                    <section class="def-section_rad">
                        <div class="def-part_rad">
                            <div class="def-title-container_rad">
                                <img src="../icons_rad/line-md_cancel.svg" alt="icon" class="def-icon_rad"/>
                                <h3 class="def-title_rad">Free cancellation</h3>
                            </div>
                            <p class="def-text_rad">
                                Cancel up to 24 hours in advance to receive a full refund
                            </p>
                        </div>

                        <div class="def-part_rad right-part_rad">
                            <div class="def-title-container_rad">
                                <img src="../icons_rad/bx_bx-spray-can.svg" alt="icon" class="def-icon_rad"/>
                                <h3 class="def-title_rad">Health precautions</h3>
                            </div>
                            <p class="def-text_rad">
                                Special health and safety measures apply. Learn more
                            </p>
                        </div>
                    </section>

                    <section class="def-section_rad">
                        <div class="def-part_rad">
                            <div class="def-title-container_rad">
                                <img src="../icons_rad/carbon_application-mobile.svg" alt="icon" class="def-icon_rad"/>
                                <h3 class="def-title_rad">Mobile ticketing</h3>
                            </div>
                            <p class="def-text_rad">
                                Use your phone or print your voucher                                    </p>
                        </div>

                        <div class="def-part_rad right-part_rad">
                            <div class="def-title-container_rad">
                                <img src="../icons_rad/ant-design_field-time-outlined.svg" alt="icon" class="def-icon_rad"/>
                                <h3 class="def-title_rad">Duration 3.5 hours</h3>
                            </div>
                            <p class="def-text_rad">
                                Check availability to see starting times.                                    </p>
                        </div>
                    </section>

                    <section class="def-section_rad">
                        <div class="def-part_rad">
                            <div class="def-title-container_rad">
                                <img src="../icons_rad/fluent_flash-checkmark-16-filled.svg" alt="icon" class="def-icon_rad"/>
                                <h3 class="def-title_rad">Instant confirmation</h3>
                            </div>
                            <p class="def-text_rad">
                                Don’t wait for the confirmation!                                    </p>
                        </div>

                        <div class="def-part_rad right-part_rad">
                            <div class="def-title-container_rad">
                                <img src="../icons_rad/healthicons_call-centre.svg" alt="icon" class="def-icon_rad"/>
                                <h3 class="def-title_rad">Live tour guide in English</h3>
                            </div>
                            <p class="def-text_rad">
                                English
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default ImagesCard;