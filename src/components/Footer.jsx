import React from "react";
import '../styles/main.css'
import '../styles/reset.css'
import '../styles/styles.css'

function Footer(){
    console.log("Footer render")
    return(
        <footer>
        <div className="footer_tim">
            <div className="footer_language_currency_tim">
                <div>
                    <label htmlFor="language">Language</label> <br/>
                    <select id="language" name="language" className="footer_language_tim">
                      <option value="English">English (UK)</option>
                      <option value="Russia">Russia (RU)</option>
                    </select>
                </div>
                <div style={{ marginTop: 12 }}>
                    <label htmlFor="Currency">Currency</label> <br/>
                    <select id="Currency" name="Currency"  className="footer_currency_tim">
                      <option value="Dollar">U.S. Dollar ($)</option>
                    </select>
                </div>
            </div>
            <div className="footer_company_tim">
                <a>Company</a> <br/>
                <a href="">About Us</a> <br/>
                <a href="">Blog</a> <br/>
                <a href="">Press Room</a> <br/>
                <a href="">Careers</a>
            </div>
            <div className="footer_help_tim">
                <a>Help</a> <br/>
                <a href="">Contact us</a> <br/>
                <a href="">FAQs</a> <br/>
                <a href="">Terms and conditions</a> <br/>
                <a href="">Privacy policy</a> <br/>
                <a href="">Sitemap</a> 
            </div>
            <div className="footer_pay_tim">
                <a>Payment methods possible</a> <br/> <br/>
                <img src="/img/footer_pay1_tim.png" alt=""/> <br/>
                <img src="/img/footer_pay2_tim.png" alt=""/> <br/> <br/>
                <a>Company</a> <br/>
                <a>Become a Tour guide for Us</a>
            </div>
        </div>
        <div className="footer_footer_tim">
            <div className="footer_footer_text_tim">
                <a>Copyright 2021 Tour Guide. All Rights Reserved</a> 
            </div>
            <img src="/img/footer_footer_tim.png" alt=""/>
        </div>
    </footer>
    );
}

export default Footer;