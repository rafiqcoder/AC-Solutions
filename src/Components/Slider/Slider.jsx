import React from 'react';
import slider1 from '../../Assets/images/slider1.webp';
import slider2 from '../../Assets/images/slider2.jpg';

const Slider = () => {
    return (
      <div className="carousel ">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            alt=""
            src={slider2}
            className="object-cover w-full h-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        
        
        <div id="slide2" className="carousel-item relative w-full">
          <img
            alt=""
            src={slider1}
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    );
};

export default Slider;