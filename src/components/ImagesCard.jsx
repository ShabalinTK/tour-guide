import '../styles/main.css'
import '../styles/reset.css'
import '../styles/styles.css'
import '../styles/last.css'
import '../styles/item.css'

function ImagesCard(){
    return (
        <div class="image-confirmation-section">
            <div class="image-container">
                <img src="./images/Rectangle 129.png" alt="img" id="main-img"/>

                <div class="small-images-container">
                    <img src="./images/Rectangle 158.png" alt="img" class="small-image"/>
                    <img src="./images/Rectangle 159.png" alt="img" class="small-image"/>
                    <img src="./images/Rectangle 160.png" alt="img" class="small-image"/>
                    <img src="./images/Rectangle 161.png" alt="img" class="small-image"/>
                    <img src="./images/Rectangle 162.png" alt="img" class="small-image"/>
                    <img src="./images/Rectangle 163.png" alt="img" class="small-image"/>
                </div>
            </div>
        </div>
    );
}

export default ImagesCard;