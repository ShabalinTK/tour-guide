import React, { useState, useEffect } from "react";
import Heading from "../components/Heading";
import Container from "../containers/Container";
import { useSearchParams } from "react-router-dom";

function Main() {
    const [searchParams, setSearchParams] = useSearchParams();
    
    // Получаем параметры из URL или используем значения по умолчанию
    const [sortOption, setSortOption] = useState(
        searchParams.get('sort') || 'popularity'
    );
    const [themeFilters, setThemeFilters] = useState(
        searchParams.get('themes') ? searchParams.get('themes').split(',') : []
    );
    const [durationFilters, setDurationFilters] = useState(
        searchParams.get('durations') ? searchParams.get('durations').split(',') : []
    );
    const [destinationFilters, setDestinationFilters] = useState(
        searchParams.get('destinations') ? searchParams.get('destinations').split(',') : []
    );

    // Обновляем URL при изменении любых фильтров
    useEffect(() => {
        const params = {};
        if (sortOption !== 'popularity') params.sort = sortOption;
        if (themeFilters.length > 0) params.themes = themeFilters.join(',');
        if (durationFilters.length > 0) params.durations = durationFilters.join(',');
        if (destinationFilters.length > 0) params.destinations = destinationFilters.join(',');
        
        setSearchParams(params);
    }, [sortOption, themeFilters, durationFilters, destinationFilters, setSearchParams]);

    return (
        <main>
            <Heading sortOption={sortOption} setSortOption={setSortOption} />
            <Container 
                sortOption={sortOption}
                themeFilters={themeFilters}
                setThemeFilters={setThemeFilters}
                durationFilters={durationFilters}
                setDurationFilters={setDurationFilters}
                destinationFilters={destinationFilters}
                setDestinationFilters={setDestinationFilters}
            />
        </main>
    );
}

export default Main;