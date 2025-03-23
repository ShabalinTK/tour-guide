import React from "react";
import '../styles/main.css'
import '../styles/reset.css'
import '../styles/styles.css'

function GalleryImage({ link }){
    return (
        <img src={link} alt="" />
    )
}

export default GalleryImage;