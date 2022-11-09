/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Link,useLoaderData } from "react-router-dom";
import Card from "../../Components/Card/Card";
import Slider from "../../Components/Slider/Slider";
import UseTitle from "../../hooks/UseTitle";

const Home = () => {
  // const { services } = useContext(DataContext)
  const services = useLoaderData();
  UseTitle("Home");
  //  const AscServices = [...services].sort((a, b) => b.id - a.id);

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
          
            tabIndex={0}
            className="text-base leading-normal text-center text-gray-600 my-5 mb-10"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the
          </h2>

          <div className="flex items-center justify-center xl:w-11/12 mx-auto">
            <div className="grid  sm:grid-cols-3 gap-4 justify-center items-center">
              {services.map((service) => (
                <Card service={service} key={service?._id}>
                  <Link
                    to={`/services/${service?._id}`}
                    className="px-4 py-1 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none text-sm"
                  >
                    View Details
                  </Link>
                </Card>
              ))}
            </div>
          </div>
          <div className="text-center">
            <Link to="/services" className="btn mt-5">
              view All
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 overflow-y-hidden">
        <div className="mx-auto container py-12 px-4">
          <div className="w-full flex justify-center">
            <div className="w-full md:w-11/12 xl:w-10/12 bg-gradient-to-r from-indigo-500 to-indigo-700 md:py-8 md:px-8 px-5 py-4 xl:px-12 xl:py-16">
              <div>
                <div className="flex flex-wrap items-center md:flex-row flex-col-reverse">
                  <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4">
                    <div>
                      <h1
                      
                        className="text-xl md:text-2xl lg:text-4xl xl:text-4xl lg:w-10/12 text-white font-black leading-6 lg:leading-10 md:text-left text-center"
                      >
                        Become a member and start building the next big thing
                      </h1>
                    </div>
                    <button
                   
                      aria-label="Join the community"
                      className="mt-5 lg:mt-8 py-3 lg:py-4 px-4 lg:px-8 bg-white font-bold text-indigo-700 rounded-lg text-sm lg:text-lg xl:text-xl hover:bg-opacity-90  focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none"
                    >
                      Join the community
                    </button>
                  </div>
                  <div className="md:w-1/3 w-2/3">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/CTA.png"
                      alt="cartoon avatars"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
