import React, { useEffect, useState } from "react";
import '../styles/main.css';
import '../styles/reset.css';
import '../styles/styles.css';
import ActivityCardContainer from "./ActivityCardContainer";

function ActivitiesContainer() {
    const [toursByTheme, setToursByTheme] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // 3 ключевые темы
    const MAIN_THEMES = {
        'Adventure': ['Adventure', 'Trekking', 'Desert', 'Safari'],
        'Nature': ['Nature', 'Waterfall', 'National Park'],
        'Wildlife': ['Wildlife', 'Animals', 'Birdwatching']
    };

    useEffect(() => {
        const fetchTours = async () => {
            try {
                const response = await fetch('https://localhost:7199/api/Tour');
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const data = await response.json();

                // Группируем туры по 3 основным темам
                const groupedTours = groupToursIntoMainThemes(data);
                setToursByTheme(groupedTours);

            } catch (err) {
                console.error('Fetch error:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTours();
    }, []);

    const groupToursIntoMainThemes = (tours) => {
        const result = [];
        
        // Для каждой основной темы
        Object.entries(MAIN_THEMES).forEach(([mainTheme, subThemes], index) => {
            const themeTours = tours.filter(tour => 
                subThemes.includes(tour.theme)
            ).map(tour => ({
                image: tour.imageUrls || "./img/default_tour.png",
                title: tour.name,
                duration: tour.details?.Duration || "N/A",
                reviews: tour.reviews || 0,
                price: `$${tour.price?.toFixed(2) || "0.00"}`
            }));

            if (themeTours.length > 0) {
                result.push({
                    theme: mainTheme,
                    color: index === 0 ? "" : index === 1 ? "b1_tim" : "b2_tim",
                    isFirst: index === 0,
                    activities: themeTours.slice(0, 4) // Берем первые 4 тура
                });
            }
        });

        return result;
    };

    if (loading) return <div>Loading tours...</div>;
    if (error) return <div>Error: {error}</div>;
    if (toursByTheme.length === 0) return <div>No outside activities found</div>;

    return (
        <div className="Tim_tim">
            <div className="outside_tim">
                <h1 className="title_tim">Outside The City Specials</h1>
                <hr className="line_tim"/>
                {toursByTheme.map((group, index) => (
                    <div key={group.theme}>
                        <div className={`button_outside_tim ${group.isFirst ? 'iskl_tim' : ''}`}>
                            <button className={`button_left_tim ${group.color}`}>
                                {group.theme} ({group.activities.length})
                            </button>
                            <div className="button_right_tim">
                                <button className="button_right1_tim">
                                    <img src="/img/button_right1_tim.png" alt="Previous"/>
                                </button>
                                <button className="button_right2_tim">
                                    <img src="/img/button_right2_tim.png" alt="Next"/>
                                </button>
                            </div>
                        </div>
                        <ActivityCardContainer activities={group.activities}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ActivitiesContainer;