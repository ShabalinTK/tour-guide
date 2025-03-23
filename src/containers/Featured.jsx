import '../styles/main.css'
import '../styles/reset.css'
import '../styles/styles.css'
import '../styles/last.css'
import ActivityCard from "../components/ActivityCard.jsx";

function Featured(){
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
        },
        {
            image: "/img/cart_5_tim.png",
            title: "Alaska: Westminster to Greenwich River Thames",
            duration: "2 hours",
            reviews: 584,
            price: "$35.00"
        }
    ]
    return (
        <div className="Featured_tim">
            <div className="Featured_info_tim">
                <div className="Featured_more_info_tim">
                    <h1 className="Featured_text_tim">Featured Destinations</h1>
                    <h7 className="Featured_Amet_tim">Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                        amet sint. Velit officia consequat duis enim velit mollit
                    </h7>
                </div>
                <div className="button_right_tim">
                    <button className="button_right1_tim"><img src="/img/button_right1_tim.png" alt=""/></button>
                    <button className="button_right2_tim"><img src="/img/button_right2_tim.png" alt=""/></button>
                </div>
            </div>
            <div className="carts_tim">
                {
                    cards.map((card, index) => (
                        <>
                           <ActivityCard
                               key={index}
                               image={card.image}
                               duration={card.duration}
                               title={card.title}
                               price={card.price}
                               reviews={card.reviews}
                           />
                        </>
                    ))
                }
            </div>
        </div>
    );
}

export default Featured;