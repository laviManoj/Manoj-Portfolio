import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Codosphere from "../../img/codosphere.png";
import Wyzebulb from "../../img/wyzebulb.png";
import AutomateFlow from "../../img/automateflow.png";
import AdminWyzebulb from "../../img/adminwyzebulb.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Codosphere} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Wyzebulb} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={AutomateFlow} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={AdminWyzebulb} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
