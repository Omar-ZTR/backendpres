import React, { useEffect } from "react";
import "./Home.css";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data";
import chek from "../../img/check.png"
import art from "../../img/art.png"
import auto from "../../img/auto.png"
import beauty from "../../img/beauty.png"
import ch from "../../img/ch.png"
import dhina from "../../img/dhina.png"
import netoy from "../../img/nt.png"
import plom from "../../img/plom.png"
import prog from "../../img/prog.png"
import rep from "../../img/rep.png"
import textile from "../../img/textile.png"
import trans from "../../img/transport.png"
import fflickity from "flickity"
import Carousel from "../../components/carousel/Carousel";
import AOS from 'aos'
import 'aos/dist/aos.css'
function Home() {

useEffect(()=> {
  AOS.init({duration: 2000})
})
  return (
    <div className="home">
      <Featured />
      <div className="cont">
        {/* <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <p><code>wrapAround: true</code></p> */}


        <div className="sl" data-aos="fade-up">
          <h2>Popular sellers:</h2>
          <Carousel show={4} infiniteLoop={true} >


            {projects.map((card) => (
              <ProjectCard key={card.id} card={card} />
            ))}

          </Carousel>
        </div>

        <div className="features" data-aos="fade-up">

          <div className="h-container1">
<div >
            <div className="list" >
              <h1>Many service providers at your fingertips</h1>
              <div> <div className="titl">
                <img src={chek} alt="" />
                Stick to your budget</div>
                <p>
                  Find the right service for every price point.
                  No hourly rates, just project-based pricing.
                </p>
                <div className="titl">
                  <img src={chek} alt="" />
                  Get quality work done quickly</div>

                <p>
                  Hand your project over to a talented
                  freelancer in minutes, get long-lasting results.
                </p>

                <div className="titl">
                  <img src={chek} alt="" />
                  Count on 24/7 support
                </div>
                <p>
                  Our round-the-clock support team is
                  available to help anytime, anywhere.
                </p>
              </div>
            </div></div>

          </div>
        </div>
        <div className="explore" data-aos="fade-up">
          <div className="hcontainer2">
            <h1>Explore the marketplace</h1>
            <div className="items">
              <div className="item">
                <img
                  src={auto}
                  alt=""
                />
                <div className="line"></div>
                <span>Auto service</span>
              </div>
              <div className="item">
                <img
                  src={plom}
                  alt=""
                />
                <div className="line"></div>

                <span>plumber</span>
              </div>
              <div className="item">
                <img
                  src={rep}
                  alt=""
                />
                <div className="line"></div>
                <span>repair & maintenance</span>
              </div>
              <div className="item">
                <img
                  src={dhina}
                  alt=""
                />
                <div className="line"></div>
                <span>Video & Animation</span>
              </div>
              <div className="item">
                <img
                  src={netoy}
                  alt=""
                />
                <div className="line"></div>
                <span>cleaning</span>
              </div>
              <div className="item">
                <img
                  src={ch}
                  alt=""
                />
                <div className="line"></div>
                <span>Programming & Tech</span>
              </div>
              <div className="item">
                <img
                  src={prog}
                  alt=""
                />
                <div className="line"></div>
                <span>Programming & Tech</span>
              </div>
              <div className="item">
                <img
                  src={trans}
                  alt=""
                />
                <div className="line"></div>
                <span>transport</span>
              </div>
              <div className="item">
                <img
                  src={beauty}
                  alt=""
                />
                <div className="line"></div>
                <span>beauty</span>
              </div>
              <div className="item">
                <img
                  src={textile}
                  alt=""
                />
                <div className="line"></div>
                <span>textile</span>
              </div>
            </div>
          </div>
        </div>

        <div className="features dark" data-aos="fade-up">
          <div className="hcontainer3">
            <div className="hc-item">
              <h1>
                Join ijeni, the essential platform to find
                new customers and increase your online visibility.
              </h1>

              <div className="titl">
                <img src={chek} alt="" />
                Create your free account now
              </div>

              <div className="titl">
                <img src={chek} alt="" />
                gain visibility and notoriety
              </div>

              <div className="titl">
                <img src={chek} alt="" />
                Stand out from the competition and grow your business
              </div>
              <div className="titl">
                <img src={chek} alt="" />
                community of users looking for home services and qualified service providers
              </div>
              <button>Explore Give&Get Business</button>
            </div>
            <div className="hc-item">
              <img
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
                alt=""
              />
            </div>

          </div>
        </div>
        {/* <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide> */}
      </div>
    </div>
  );
}

export default Home;
