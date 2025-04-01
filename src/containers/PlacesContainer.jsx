import React, { useMemo } from "react";
import '../styles/index.css';
import Places from '../containers/Places';

function PlacesContainer({ sortOption, themeFilters = [], durationFilters = [], destinationFilters = [] }) {
    const places = [
        {
            id: 1,
            image: "../images/place.png",
            type: "Food",
            title: "Westminster to Greenwich River Thames",
            duration: "6 hours",
            cost: "$31.00",
            reviews: 584
        },
        {
            id: 2,
            image: "../images/place2.png",
            type: "Food",
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

    const sortedAndFilteredPlaces = useMemo(() => {
        let filteredPlaces = [...places];
        
        // Фильтрация по теме (type)
        if (themeFilters.length > 0) {
            filteredPlaces = filteredPlaces.filter(place => 
                themeFilters.includes(place.type)
            );
        }
        
        // Фильтрация по продолжительности (duration)
        if (durationFilters.length > 0) {
            filteredPlaces = filteredPlaces.filter(place => {
                const duration = place.duration;
                return durationFilters.some(filter => {
                    if (filter === "0-3 hours") return parseInt(duration) <= 3;
                    if (filter === "3-5 hours") return parseInt(duration) > 3 && parseInt(duration) <= 5;
                    if (filter === "5-7 hours") return parseInt(duration) > 5 && parseInt(duration) <= 7;
                    if (filter === "Full day (7+ hours)") return parseInt(duration) > 7;
                    if (filter === "Multi-day") return parseInt(duration) > 24; // предположение для multi-day
                    return false;
                });
            });
        }
        
        // Фильтрация по направлению (title)
        if (destinationFilters.length > 0) {
            filteredPlaces = filteredPlaces.filter(place => 
                destinationFilters.some(destination => 
                    place.title.includes(destination)
                )
            );
        }

        // Сортировка
        switch(sortOption) {
            case 'price-high':
                return filteredPlaces.sort((a, b) => {
                    const priceA = parseFloat(a.cost.replace('$', ''));
                    const priceB = parseFloat(b.cost.replace('$', ''));
                    return priceB - priceA;
                });
            case 'price-low':
                return filteredPlaces.sort((a, b) => {
                    const priceA = parseFloat(a.cost.replace('$', ''));
                    const priceB = parseFloat(b.cost.replace('$', ''));
                    return priceA - priceB;
                });
            case 'popularity':
            default:
                return filteredPlaces.sort((a, b) => b.reviews - a.reviews);
        }
    }, [sortOption, themeFilters, durationFilters, destinationFilters, places]);

    return(
        <div className="places__container">
            <Places places={sortedAndFilteredPlaces}/>
            <button className="places__button">Load More</button>
        </div>
    );
}

export default PlacesContainer;