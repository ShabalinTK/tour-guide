import React from "react";
import RatingWrapperRad from "../components/RatingWrapperRad";
import FilterCommentRad from "../components/FilterCommentRad"
import CommentsContainerRad from "../containers/CommentsContainerRad"
import '../styles/styles_rad.css'

function CustomerReview() {    
    return (       
        <div class="customer-review-container_rad">
            <RatingWrapperRad />
            <FilterCommentRad /> 
            <CommentsContainerRad />
        </div>
    );
}

export default CustomerReview;