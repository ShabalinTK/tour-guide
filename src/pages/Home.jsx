import Trending from "../components/Trending.jsx";
import Mobile from "../components/Mobile.jsx";
import Wrapper from "../containers/Wrapper.jsx";
import Featured from "../containers/Featured.jsx";
import PopularCities from "../containers/PopularCities.jsx";


function Home(){
    return (
        <>
            <PopularCities />
            <Trending />
            <Featured />
            <Mobile />
            <Wrapper />
        </>
    );
}

export default Home;