import React from "react";
import OutsideTim from "../containers/OutsideTim";
import '../styles/styles_rad.css'
import CustomerReview from "../containers/CustomerReview"

function TimContainer() {    
    return (
        <div class="Tim_tim">
            <OutsideTim />
            <OutsideTim />
            <CustomerReview />
        </div>
    );
}

export default TimContainer;