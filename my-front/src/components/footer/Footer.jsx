import React from "react";
import "./Footer.css";
import twitter from"../../img/twitter.png";
import facebook from "../../img/facebook.png";
import linkedin from "../../img/linkedin.png";
import languge from "../../img/language.png"
import coin from "../../img/coin.png"
import accessibility from"../../img/accessibility.png" 
function Footer() {
  return (
    <div className="footer">
      <div className="containerr">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>
              Réparation électroménager
            </span>
            <span>
              Entretien et réparation
            </span>
            <span>
              Art

            </span>
            <span>
              Menage et nettoyage

            </span>
            <span>
              Beauty

            </span>
            <span>
              Services auto

            </span>
            <span>
              Programming & Tech
            </span>
            <span>
              Textile
            </span>
            <span>
              Lifestyle
            </span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
            <span>Contact Sales</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on GAG</span>
            <span>Buying on GAG</span>
          </div>
          
        </div>
        <hr></hr>
        <div className="bottom">
          <div className="leftt">
            <h2>liverr</h2>
            <span>Copyright ©2023 Give&Get®. All rights reserved.</span>
          </div>
          <div className="bright">
            <div className="social">
              <img src={twitter} alt="" />
              <img src={facebook} alt="" />
              <img src={linkedin} alt="" />
              
            </div>
            <div className="link">
              <img src={languge} alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src={coin} alt="" />
              <span>USD</span>
            </div>
            <img src={accessibility} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
