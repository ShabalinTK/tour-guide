import "../styles/styles_rad.css"

function RatingWrapperRad(){
    return (
        <div className="rating-wrapper-rad-all">
            <h2 className="review-header_rad">Customer Review</h2>

            <div className="rating-wrapper_rad">
                <div className="rating-container_rad">
                    <span className="rating-score_rad">4,30</span>
                    <span className="rating-reviews_rad">854 Reviews</span>
                    <div className="stars_rad">
                        <span className="star_rad full">★</span>
                        <span className="star_rad full">★</span>
                        <span className="star_rad full">★</span>
                        <span className="star_rad half_rad">★</span>
                    </div>
                </div>
                
                <div className="rating-bars_rad">
                    <div className="rating-item_rad">
                        <span className="rating-label_rad">Guide</span>
                        <div className="progress-bar_rad">
                            <div className="progress-fill_rad" style={{width: '96%'}}></div>
                        </div>
                        <span className="rating-value_rad">4.8</span>
                    </div>
                
                    <div className="rating-item_rad">
                        <span className="rating-label_rad">Transportation</span>
                        <div className="progress-bar_rad">
                            <div className="progress-fill_rad" style={{width: '30%'}}></div>
                        </div>
                        <span className="rating-value_rad">3.0</span>
                    </div>
                
                    <div className="rating-item_rad">
                        <span className="rating-label_rad">Value for money</span>
                        <div className="progress-bar_rad">
                            <div className="progress-fill_rad" style={{width: '90%'}}></div>
                        </div>
                        <span className="rating-value_rad">4.5</span>
                    </div>
                
                    <div className="rating-item_rad">
                        <span className="rating-label_rad">Safety</span>
                        <div className="progress-bar_rad">
                            <div className="progress-fill_rad" style={{width: '80%'}}></div>
                        </div>
                        <span className="rating-value_rad">4.0</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RatingWrapperRad;