import React, { useMemo } from "react";
import '../styles/index.css';
import '../styles/reset1.css';
import '../styles/variables.css';
import Places from "./Places";

function PlacesContainer({ sortOption }){
    const places = [
        {
            id: 1,
            image: "../images/place.png",
            type: "Water Activities",
            title: "Westminster to Greenwich River Thames",
            duration: "2 hours",
            cost: "$31.00",
            reviews: 584
        },
        {
            id: 2,
            image: "../images/place2.png",
            type: "Water Activities",
            title: "Westminster to Greenwich River Thames",
            duration: "2 hours",
            cost: "$45.00",
            reviews: 421
        },
        {
            id: 3,
            image: "../images/place3.png",
            type: "Water Activities",
            title: "Westminster to Greenwich River Thames",
            duration: "2 hours",
            cost: "$28.50",
            reviews: 318
        },
        {
            id: 4,
            image: "../images/place4.png",
            type: "Water Activities",
            title: "Westminster to Greenwich River Thames",
            duration: "2 hours",
            cost: "$35.00",
            reviews: 500
        },
        {
            id: 5,
            image: "../images/place5.png",
            type: "Water Activities",
            title: "Westminster to Greenwich River Thames",
            duration: "2 hours",
            cost: "$32.50",
            reviews: 723
        },
        {
            id: 6,
            image: "../images/place6.png",
            type: "Water Activities",
            title: "Westminster to Greenwich River Thames",
            duration: "2 hours",
            cost: "$19.00",
            reviews: 60
        },
        {
            id: 7,
            image: "../images/place7.png",
            type: "Water Activities",
            title: "Westminster to Greenwich River Thames",
            duration: "2 hours",
            cost: "$70.00",
            reviews: 1042
        },
        {
            id: 8,
            image: "../images/place8.png",
            type: "Water Activities",
            title: "Westminster to Greenwich River Thames",
            duration: "2 hours",
            cost: "$60.00",
            reviews: 853
        },
        {
            id: 9,
            image: "../images/place9.png",
            type: "Water Activities",
            title: "Westminster to Greenwich River Thames",
            duration: "2 hours",
            cost: "$53.00",
            reviews: 790
        }
    ]

    const sortedPlaces = useMemo(() => {
        const placesCopy = [...places];
        
        switch(sortOption) {
            case 'price-high':
                return placesCopy.sort((a, b) => {
                    const priceA = parseFloat(a.cost.replace('$', ''));
                    const priceB = parseFloat(b.cost.replace('$', ''));
                    return priceB - priceA;
                });
            case 'price-low':
                return placesCopy.sort((a, b) => {
                    const priceA = parseFloat(a.cost.replace('$', ''));
                    const priceB = parseFloat(b.cost.replace('$', ''));
                    return priceA - priceB;
                });
            case 'popularity':
            default:
                return placesCopy.sort((a, b) => b.reviews - a.reviews);
        }
    }, [sortOption, places]);

    return(
        <div className="places__container">
            <Places places={sortedPlaces}/>
            <button className="places__button">Load More</button>
        </div>
    )
}

export default PlacesContainer;