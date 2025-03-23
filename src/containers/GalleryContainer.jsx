import React from "react";
import '../styles/main.css'
import '../styles/reset.css'
import '../styles/styles.css'
import GalleryImage from "../components/GalleryImage";

function GalleryContainer({ images }){
    return(
        <>
        <div className="section-gallery">
            <div className="header-block-with-btn">
                <div className="header-text-block">
                    <h1 className="text-title">From The Gallery</h1>
                    <p className="gallery-text">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit
                    </p>
                </div>
    
                <div className="btn-view-all-images">
                    <button type="button" className="btn-view-all">
                        View All Images
                    </button>
                </div>
            </div>
            <div className="gallery-images-container">
            {
        images.map((image, index) => (
            <GalleryImage link={image.link} key={index}/>
        ))
    }
    </div>
    </div>
        </>
    );
}

export default GalleryContainer;