import '../styles/main.css'
import '../styles/reset.css'
import '../styles/styles.css'
import '../styles/last.css'

function Mobile(){
    return (
        <div className="app_tim">
            <img src="/imggg/app_phone_tim.png" alt="" className="app_phone_tim"/>
            <div className="app_info_tim">
                <h1 className="Smart_tim">Smart City Tour Mobile App</h1>
                <h4 className="Available_tim">Available on IOS & Android</h4>
                <h7 className="Amet_tim">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                    officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </h7>
                <div className="app_button_tim">
                    <button className="app_button_IOS_tim"><img src="/imggg/app_apple_tim.png" alt=""/>Download For IOS
                    </button>
                    <button className="app_button_Android_tim"><img src="/imggg/app_android_tim.png" alt=""/>Download
                        For Android
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Mobile;