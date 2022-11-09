import moment from "moment";
import React,{ useContext,useState } from 'react';
import toast from 'react-hot-toast';
import { Link,useLoaderData,useLocation } from 'react-router-dom';

import { DataContext,UserContext } from '../../Context/Context';
import UseTitle from "../../hooks/UseTitle";

const ServiceDetails = () => {
    const {services,reviews} = useLoaderData();
    const [newReviews, setNewReviews] = useState(reviews);
    UseTitle('Service Details');
    const [service] = services;
   
    
  const {refresh,setRefresh} = useContext(DataContext);
    const { user } = useContext(UserContext);
    const location = useLocation();
    // const service = data;
    
   
          
    const handleAddReview = (e) => {
        e.preventDefault();
        const form = e.target;
        const reviewMsg = form.review.value;
        const name = user.displayName;
        const email = user.email;
        const img = user.photoURL;
        const serviceId = service._id;
        const serviceName = service.name;

        const reviewTime = moment().format("MMMM Do YYYY, h:mm:ss a");
        
        const review = {
          reviewMsg,
          reviewTime,
          
          name,
          email,
          img,
            serviceId,
            serviceName
        };
        fetch("http://localhost:5000/add-review", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(review),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.data.acknowledged) {
                  toast.success("Review Added Successfully");
                    setRefresh(!refresh);
                    form.reset();
                }
            })
      
      fetch(`http://localhost:5000/services/${service._id}`)
        .then((res) => res.json())
        .then((data) => {
           setNewReviews(data.reviews);
          console.log(data.reviews);
        });
    }
  

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
            <p className="text-sm text-gray-400 text-center">{service.desc}</p>
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
              <p className="font-bold text-xl">{service.price} $</p>
            </div>
          </div>

          {user?.email ? (
            <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-yellow-200 text-gray-100 w-full">
              <div className="flex flex-col items-center w-full">
                <h2 className="text-3xl font-semibold text-center text-black">
                  Your opinion matters!
                </h2>
                <div className="flex flex-col items-center py-6 space-y-3 text-black">
                  <span className="text-center">How was your experience?</span>
                </div>
                <div className="flex flex-col w-full">
                  <form onSubmit={handleAddReview}>
                    <textarea
                      rows="3"
                      placeholder="Message..."
                      name="review"
                      className="p-4 rounded-md resize-none text-gray-100 bg-gray-200 border"
                    ></textarea>
                    <button
                      type="submit"
                      className="py-4 my-8 font-semibold rounded-md text-gray-900 bg-blue-400"
                    >
                      Leave feedback
                    </button>
                  </form>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button className="text-sm text-gray-400">Maybe later</button>
              </div>
            </div>
          ) : (
            <p className="text-center text-red-500">
              Please Login to Add Review
              <Link
                to="/login"
                state={{ from: location }}
                replace
                className="btn"
              >
                Login
              </Link>
            </p>
          )}
          {newReviews.map((review) => (
            <div
              key={review._id}
              className="sm:flex mt-10 shadow-lg border rounded"
            >
              <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100">
                <div className="flex justify-between p-4">
                  <div className="flex space-x-4">
                    <div>
                      <img
                        src={review.img}
                        alt=""
                        className="object-cover w-12 h-12 rounded-full dark:dark:bg-gray-500"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{review.name}</h4>
                      <span className="text-xs dark:dark:text-gray-400">
                        {review.reviewTime}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 dark:dark:text-yellow-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fill-current"
                    >
                      <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                    </svg>
                    <span className="text-xl font-bold">4.5</span>
                  </div>
                </div>
                <div className="p-4 space-y-2 text-sm dark:dark:text-gray-400">
                  <p>{review.reviewMsg}</p>
                </div>
              </div>
            </div>
          ))}
        
        </div>
      </div>
    );
};

export default ServiceDetails;