/* eslint-disable jsx-a11y/anchor-has-content */
import React,{ useContext } from "react";
import Slider from "../../Components/Slider/Slider";
import { DataContext } from "../../Context/Context";

const Home = () => {
  const { services } = useContext(DataContext)
  

    console.log(services);
  return (
    
    <div>
      <Slider></Slider>
      
    </div>
  );
};

export default Home;
