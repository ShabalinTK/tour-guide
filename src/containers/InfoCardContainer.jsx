import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ContainerCard from "../containers/ContainerCard.jsx";
import TitleCard from '../components/TitleCard.jsx';
import "../styles/styles_rad.css";
import "../styles/reset1.css";

function InfoCardContainer() {
    const { id } = useParams();
    const [tour, setTour] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTour = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://localhost:7199/api/Tour/${id}`);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                setTour(data);
            } catch (err) {
                console.error('Fetch error:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTour();
    }, [id]); // Зависимость от id для повторной загрузки при изменении ID

    if (loading) {
        return <div className="loading">Loading tour details...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    if (!tour) {
        return <div className="not-found">Tour not found</div>;
    }

    return (
        <main className="main">
            <div className="container_all_page">
                <TitleCard 
                    title={tour.name}
                    location={tour.city}
                    reviews={tour.reviews}
                />
                <ContainerCard tour={tour}/>
            </div>
        </main>
    );
}

export default InfoCardContainer;