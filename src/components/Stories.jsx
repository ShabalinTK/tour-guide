import React from "react";
import '../styles/main.css'
import '../styles/reset.css'
import '../styles/styles.css'

function Stories({ image, title}){
    return(
        <div className="stories-image-container">
                    <div className="stories-image">
                        <img src={image} alt="image"/>
                    </div>

                    <div className="stories-content">
                        <div className="author-card">
                            <img className="content-author-icons" src="images/Ellipse 2.png" alt="icon"/>
                            <p className="author-name">Jackie Moncada</p>
                        </div>
                        <div className="stories-content-text-conteiner">
                            <p>{title}</p>
                        </div>
                    </div>
                </div>
    );
}

export default Stories;