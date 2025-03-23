import React from "react";
import '../styles/index.css'
import '../styles/reset1.css'
import '../styles/variables.css'
import Places from "./Places"

function PlacesContainer(){
    const places = [
        {
            image: "../images/place.png",
            type: "Water Activities",
            title: "Westminster to Greenwich River Thames",
            duration: "2 hours",
            cost: "$35.00",
            reviews: 584
        },
        {
            image: "../images/place2.png",
            type: "Water Activities",
            title: "Westminster to Greenwich River Thames",
            duration: "2 hours",
            cost: "$35.00",
            reviews: 584
        },
        {
            image: "../images/place3.png",
            type: "Water Activities",
            title: "Westminster to Greenwich River Thames",
            duration: "2 hours",
            cost: "$35.00",
            reviews: 584
        },
        {
            image: "../images/place4.png",
            type: "Water Activities",
            title: "Westminster to Greenwich River Thames",
            duration: "2 hours",
            cost: "$35.00",
            reviews: 584
        },
        {
            image: "../images/place5.png",
            type: "Water Activities",
            title: "Westminster to Greenwich River Thames",
            duration: "2 hours",
            cost: "$35.00",
            reviews: 584
        },
        {
            image: "../images/place6.png",
            type: "Water Activities",
            title: "Westminster to Greenwich River Thames",
            duration: "2 hours",
            cost: "$35.00",
            reviews: 584
        },
        {
            image: "../images/place7.png",
            type: "Water Activities",
            title: "Westminster to Greenwich River Thames",
            duration: "2 hours",
            cost: "$35.00",
            reviews: 584
        },
        {
            image: "../images/place8.png",
            type: "Water Activities",
            title: "Westminster to Greenwich River Thames",
            duration: "2 hours",
            cost: "$35.00",
            reviews: 584
        },
        {
            image: "../images/place9.png",
            type: "Water Activities",
            title: "Westminster to Greenwich River Thames",
            duration: "2 hours",
            cost: "$35.00",
            reviews: 584
        }
    ]

    return(
        <div className="places__container">
            <Places places={places}/>
            <button className="places__button">Load More</button>
        </div>
    )
}

export default PlacesContainer;