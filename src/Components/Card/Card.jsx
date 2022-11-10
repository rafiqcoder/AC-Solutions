import React from 'react';
import { PhotoProvider,PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Card = ({ service,children }) => {
  // reciving detail button and services from props
    return (
      <div className="card justify-center p-10 bg-white rounded-lg shadow-2xl md:min-h-[350px]">
        <div className="prod-title">
          <h2 className="text-xl mb-3 uppercase text-gray-900 font-bold">
            {service?.name}
          </h2>
        </div>
        <div className="prod-img">
          <PhotoProvider>
            <PhotoView src={service?.image}>
              <img
                alt="/"
                src={service.image}
                className=" h-[200px] object-cover object-center w-full"
              />
            </PhotoView>
          </PhotoProvider>
        </div>
        <div className="prod-info grid gap-10 mt-5">
          <p className="text-sm text-gray-400 font-thin">{service?.desc.slice(0-100)}</p>
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
            <h3 className="font-bold text-xl">{service?.price} $</h3>
            {children}
          </div>
        </div>
      </div>
    );
};

export default Card;