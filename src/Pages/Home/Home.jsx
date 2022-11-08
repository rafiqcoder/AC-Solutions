/* eslint-disable jsx-a11y/anchor-has-content */
import React,{ useContext } from "react";
import { Link } from "react-router-dom";
import Slider from "../../Components/Slider/Slider";
import { DataContext } from "../../Context/Context";

const Home = () => {
  const { services } = useContext(DataContext)
  

    console.log(services);
  return (
    <div>
      <Slider></Slider>
      <div className="bg-gray-50 py-20 flex flex-col items-center justify-center">
        <div className="w-11/12">
          <h1
            tabIndex={0}
            className="text-6xl font-bold 2xl:leading-10 leading-0 text-center text-gray-800"
          >
            Featured Services
          </h1>

          <h2
            role="contentinfo"
            tabIndex={0}
            className="text-base leading-normal text-center text-gray-600 my-5 mb-10"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the
          </h2>

          <div className="flex items-center justify-center xl:w-11/12 mx-auto">
            <div className="grid  sm:grid-cols-3 gap-4 justify-center items-center">
              {services.slice(0 - 3).map((service) => (
                <div className="card justify-center p-10 bg-white rounded-lg shadow-2xl md:min-h-[400px]">
                  <div className="prod-title">
                    <p className="text-xl mb-2 uppercase text-gray-900 font-bold">
                      {service.name}
                    </p>
                  </div>
                  <div className="prod-img">
                    <img
                      alt="/"
                      src={service.image}
                      className="w-full object-cover object-center max-h-[200px]"
                    />
                  </div>

                  <div className="prod-info grid gap-5 mt-5">
                    <p className="text-sm text-gray-400">
                      {service.desc.slice(0 - 150)}
                    </p>
                    <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                      <p className="font-bold text-xl">{service.price} $</p>
                      <button className="px-4 py-1 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none text-sm">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <Link to="/services" className="btn mt-5">view All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
