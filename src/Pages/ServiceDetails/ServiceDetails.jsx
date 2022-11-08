import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const [data] = useLoaderData();
  
    const service = data;
    return (
      <div>
        <div className="card justify-center p-10 bg-white rounded-lg shadow-2xl md:min-h-[350px] text-center items-center content-center">
          <div className="prod-title">
            <p className="text-xl mb-3 uppercase text-gray-900 font-bold">
              {service.name}
            </p>
          </div>
          <div className="prod-img">
            <img
              alt="/"
              src={service.image}
              className="  object-cover object-center"
            />
          </div>
          <div className="prod-info grid gap-10 mt-5">
            <p className="text-sm text-gray-400 text-center">
              {service.desc}
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
              <p className="font-bold text-xl">{service.price} $</p>
              
            </div>
          </div>
        </div>
      </div>
    );
};

export default ServiceDetails;