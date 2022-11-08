import React from 'react';
import slider1 from '../../Assets/images/slider1.webp';
import slider2 from '../../Assets/images/slider2.jpg';
import slider3 from '../../Assets/images/slider3.png';

const Slider = () => {
    return (
      <div className="carousel w-full h-[600px] object-cover">
        <div id="slide1" className="carousel-item relative w-full">
          <img alt="" src={slider2} className="object-cover w-full h-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className=" text-4xl text-sky-500">
              ❮
            </a>
            <a href="#slide2" className="text-4xl text-sky-500">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img alt="" src={slider3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="text-4xl text-sky-500">
              ❮
            </a>
            <a href="#slide3" className="text-4xl text-sky-500">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img alt="" src={slider1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="text-4xl text-sky-500">
              ❮
            </a>
            <a href="#slide1" className="text-4xl text-sky-500">
              ❯
            </a>
          </div>
        </div>
      </div>
    );
};

export default Slider;