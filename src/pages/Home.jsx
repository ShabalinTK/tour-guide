import Trending from "../components/Trending.jsx";
import Mobile from "../components/Mobile.jsx";
import Wrapper from "../containers/Wrapper.jsx";
import Featured from "../containers/Featured.jsx";
import PopularCities from "../containers/PopularCities.jsx";
import MainAlaskaTim from "../components/MainAlaskaTim.jsx";
import MainExploreTim from "../components/MainExploreTim.jsx";
import HomeHeaderTim from "../containers/HomeHeaderTim.jsx";


function Home(){
    return (
        <>
            <HomeHeaderTim />
            <MainExploreTim />
            <MainAlaskaTim />
            <PopularCities />
            <Trending />
            <Featured />
            <Mobile />
            <Wrapper />
        </>
    );
}

export default Home;