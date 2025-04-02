// const places = [
//     {
//         id: 1,
//         image: "../images/place.png",
//         type: "Food",
//         title: "Westminster to Greenwich River Thames",
//         duration: "6 hours",
//         cost: "$31.00",
//         reviews: 584
//     },
//     {
//         id: 2,
//         image: "../images/place2.png",
//         type: "Food",
//         title: "Westminster to Greenwich River Thames",
//         duration: "2 hours",
//         cost: "$45.00",
//         reviews: 421
//     },
//     {
//         id: 3,
//         image: "../images/place3.png",
//         type: "Water Activities",
//         title: "Westminster to Greenwich River Thames",
//         duration: "2 hours",
//         cost: "$28.50",
//         reviews: 318
//     },
//     {
//         id: 4,
//         image: "../images/place4.png",
//         type: "Water Activities",
//         title: "Westminster to Greenwich River Thames",
//         duration: "2 hours",
//         cost: "$35.00",
//         reviews: 500
//     },
//     {
//         id: 5,
//         image: "../images/place5.png",
//         type: "Water Activities",
//         title: "Westminster to Greenwich River Thames",
//         duration: "2 hours",
//         cost: "$32.50",
//         reviews: 723
//     },
//     {
//         id: 6,
//         image: "../images/place6.png",
//         type: "Water Activities",
//         title: "Westminster to Greenwich River Thames",
//         duration: "2 hours",
//         cost: "$19.00",
//         reviews: 60
//     },
//     {
//         id: 7,
//         image: "../images/place7.png",
//         type: "Water Activities",
//         title: "Westminster to Greenwich River Thames",
//         duration: "2 hours",
//         cost: "$70.00",
//         reviews: 1042
//     },
//     {
//         id: 8,
//         image: "../images/place8.png",
//         type: "Water Activities",
//         title: "Westminster to Greenwich River Thames",
//         duration: "2 hours",
//         cost: "$60.00",
//         reviews: 853
//     },
//     {
//         id: 9,
//         image: "../images/place9.png",
//         type: "Water Activities",
//         title: "Westminster to Greenwich River Thames",
//         duration: "2 hours",
//         cost: "$53.00",
//         reviews: 790
//     }
// ]
import React, { useEffect, useMemo, useState } from "react";
import '../styles/index.css';
import Places from '../containers/Places';

function PlacesContainer({ sortOption, themeFilters = [], durationFilters = [], destinationFilters = [] }) {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Загрузка данных с API
    useEffect(() => {
        const fetchTours = async () => {
            try {
                const response = await fetch('https://localhost:7199/api/Tour');
                console.log('Response status:', response.status);
                const data = await response.json();
                console.log('API data:', data);  // Inspect the actual data structure
                setPlaces(data);
            } catch (err) {
                console.error('Fetch error:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchTours();
    }, []);

    // Преобразование данных тура в формат, ожидаемый компонентом Places
    const transformTourData = (tour) => ({
        id: tour.id,
        image: tour.imageUrls || "../images/place.png", // Теперь imageUrls - это строка
        type: tour.theme,
        title: tour.name,
        duration: tour.details?.Duration || "N/A",
        cost: `$${tour.price?.toFixed(2) || "0.00"}`,
        reviews: tour.reviews || 0
    });

    const sortedAndFilteredPlaces = useMemo(() => {
        if (loading || error) return [];
        
        let filteredPlaces = places.map(transformTourData);
        
        // Фильтрация по теме (type)
        if (themeFilters.length > 0) {
            filteredPlaces = filteredPlaces.filter(place => 
                themeFilters.includes(place.type)
            );
        }
        
        // Фильтрация по продолжительности (duration)
        if (durationFilters.length > 0) {
            filteredPlaces = filteredPlaces.filter(place => {
                const durationHours = parseInt(place.duration);
                return durationFilters.some(filter => {
                    if (filter === "0-3 hours") return durationHours <= 3;
                    if (filter === "3-5 hours") return durationHours > 3 && durationHours <= 5;
                    if (filter === "5-7 hours") return durationHours > 5 && durationHours <= 7;
                    if (filter === "Full day (7+ hours)") return durationHours > 7;
                    if (filter === "Multi-day") return durationHours > 24;
                    return false;
                });
            });
        }
        
        // Фильтрация по направлению (title)
        if (destinationFilters.length > 0) {
            filteredPlaces = filteredPlaces.filter(place => 
                destinationFilters.some(destination => 
                    place.title.toLowerCase().includes(destination.toLowerCase())
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
    }, [sortOption, themeFilters, durationFilters, destinationFilters, places, loading, error]);

    if (loading) {
        return <div className="loading">Loading tours...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    return(
        <div className="places__container">
            <Places places={sortedAndFilteredPlaces}/>
            {sortedAndFilteredPlaces.length > 0 && (
                <button className="places__button">Load More</button>
            )}
        </div>
    );
}

export default PlacesContainer;