import React from "react";
import "../styles/homepage.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import img1 from "../images/ps5.jpg";
import img2 from "../images/ps3.jpg";
import img3 from "../images/switch.jpg";
import img4 from "../images/xbox.jpg";
import img5 from "../images/ps4.jpg";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const HomePage = () => {
  return (
    <div className="news">
      <Splide
        options={{
          rewind: true,
          autoplay: true,
        }}
      >
        <SplideSlide>
          <div className="news__photo-container">
            <img className="news__photo" src={img1} alt="new product" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="news__photo-container">
            <img className="news__photo" src={img2} alt="new product" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="news__photo-container">
            <img className="news__photo" src={img3} alt="new product" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="news__photo-container">
            <img className="news__photo" src={img4} alt="new product" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="news__photo-container">
            <img className="news__photo" src={img5} alt="new product" />
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default HomePage;
