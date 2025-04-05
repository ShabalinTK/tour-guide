import React from "react";
import '../styles/styles_rad.css';

function CommentItem({ comment }) {
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <img 
                    key={i}
                    src={i <= rating ? "../icons_rad/Star 1.svg" : "../icons_rad/white-star.svg"} 
                    alt="star" 
                    className="star_rad" 
                />
            );
        }
        return stars;
    };

    return (
        <>
            <div className="comment-container_rad">
                <div className="author-container_rad">
                    <img src={comment.avatarUrl} alt="avatar" className="author-img_rad"/>

                    <div className="author-description_rad">
                        {renderStars(comment.rating)}
                        
                        <div className="author-name-container_rad">
                            <h3 className="author-name_rad">{comment.userName}</h3>
                            <img src="../icons_rad/bi_check-all.svg" alt="verified" className="author-name-check_rad"/>
                        </div>

                        <p className="author-subtitle_rad">{comment.commentDate}</p>
                    </div>
                </div>
                <div className="comment-text-container_rad">
                    <p className="com-main-text_rad">
                        {comment.text}
                    </p>
                </div>
                <div className="comment-title__right-part-con_rad">
                    <p className="comment-title__right-part_rad">Полезно?</p>
                    <a href="#" className="comment-title__right-part-link_rad">Да</a>
                </div>
            </div>
            <hr className="line_rad"/>
        </>
    );
}

export default CommentItem;