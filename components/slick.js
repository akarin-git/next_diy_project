import React from "react";
import Slider from "react-slick";
 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
const SimpleSlider = () =>  {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const style = {
        margin: 100,
        height: 300,
        color: "#fff",
        background: "#3ab60b"
    };  
    return (
      <Slider {...settings}>
        <div>
          <h1 style={style}>1</h1>
        </div>
        <div>
          <h1 style={style}>2</h1>
        </div>
        <div>
          <h1 style={style}>3</h1>
        </div>
        <div>
          <h1 style={style}>4</h1>
        </div>
        <div>
          <h1 style={style}>5</h1>
        </div>        
      </Slider>
    );
  }
 
  export default SimpleSlider;