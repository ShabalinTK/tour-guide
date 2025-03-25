import React, { useState } from "react";
import Heading from "../components/Heading";
import Container from "../containers/Container";

function Main() {
    const [sortOption, setSortOption] = useState('popularity');
    
    return (
        <main>
            <Heading sortOption={sortOption} setSortOption={setSortOption} />
            <Container sortOption={sortOption} />
        </main>
    );
}

export default Main;