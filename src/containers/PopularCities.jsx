import '../styles/main.css'
import '../styles/reset.css'
import '../styles/styles.css'
import '../styles/last.css'
import ActivityCard from "../components/ActivityCard.jsx";

function PopularCities() {
    const cards = [
        {
            image: "/img/cart_1_tim.png",
            title: "Alaska: Westminster to Greenwich River Thames",
            duration: "2 hours",
            reviews: 584,
            price: "$35.00"
        },
        {
            image: "/img/cart_2_tim.png",
            title: "Alaska: Westminster to Greenwich River Thames",
            duration: "2 hours",
            reviews: 584,
            price: "$35.00"
        },
        {
            image: "/img/cart_3_tim.png",
            title: "Alaska: Westminster to Greenwich River Thames",
            duration: "2 hours",
            reviews: 584,
            price: "$35.00"
        },
        {
            image: "/img/cart_4_tim.png",
            title: "Alaska: Westminster to Greenwich River Thames",
            duration: "2 hours",
            reviews: 584,
            price: "$35.00"
        }
        ]
    return (
        <div className="carts_tim first_tim">
        {
            cards.map((card, index) => (
                <ActivityCard
                    image={card.image}
                    title={card.title}
                    price={card.price}
                    reviews={card.reviews}
                    duration={card.duration}
                    key={index}
                />
            ))
        }
        </div>
    );
}

export default PopularCities;