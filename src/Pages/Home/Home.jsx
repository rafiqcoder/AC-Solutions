/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Link,useLoaderData } from "react-router-dom";
import Card from "../../Components/Card/Card";
import Slider from "../../Components/Slider/Slider";

const Home = () => {
  // const { services } = useContext(DataContext)
  const services = useLoaderData();
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
            role="contentinfo"
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
    </div>
  );
};

export default Home;
