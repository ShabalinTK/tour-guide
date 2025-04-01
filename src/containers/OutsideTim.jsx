import '../styles/main.css'
import '../styles/reset.css'
import '../styles/styles.css'
import '../styles/last.css'
import '../styles/styles_rad.css'
import ActivityCard from "../components/ActivityCard.jsx";

function OutsideTim(){
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
        <div class="outside_tim">
            <div class="button_outside_tim iskl_tim">
                <h1 class="title_tim">
                    Related tours in Today
                </h1>
                <div class="button_right_tim">
                    <button class="button_right1_tim"><img src="../img/button_right1_tim.png" alt=""/></button>
                    <button class="button_right2_tim"><img src="../img/button_right2_tim.png" alt=""/></button>
                </div>
            </div>
            <div class="carts_tim">
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
            <hr class="line_rad"></hr>
        </div>
    );
}

export default OutsideTim;