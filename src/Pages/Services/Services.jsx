import React,{ useContext } from 'react';
import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Card from '../../Components/Card/Card';
import { DataContext } from '../../Context/Context';
import UseTitle from '../../hooks/UseTitle';

const Services = () => {
  //reciving services from Datacontext
    const {
      services,
      dataLoader,
      datas,
      setDatas,
  } = useContext(DataContext);
  
 //seting title
  UseTitle("Services");

  /// showing loaer untill data is loaded
  if (dataLoader) {
     console.log("Loading...");
     return (
       <div className="bg-gray-100">
         <div className=" rounded relative">
           <div className="rounded-full bg-indigo-200 w-[190px] h-[190px] relative flex justify-center items-center mx-auto animate-spin">
             <svg
               className="absolute top-[2px] right-0"
               width={76}
               height={97}
               viewBox="0 0 76 97"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
             >
               <mask id="path-1-inside-1_2495_2146" fill="white">
                 <path d="M76 97C76 75.6829 69.2552 54.9123 56.7313 37.6621C44.2074 20.4118 26.5466 7.56643 6.27743 0.964994L0.0860505 19.9752C16.343 25.2698 30.5078 35.5725 40.5526 49.408C50.5974 63.2436 56.007 79.9026 56.007 97H76Z" />
               </mask>
               <path
                 d="M76 97C76 75.6829 69.2552 54.9123 56.7313 37.6621C44.2074 20.4118 26.5466 7.56643 6.27743 0.964994L0.0860505 19.9752C16.343 25.2698 30.5078 35.5725 40.5526 49.408C50.5974 63.2436 56.007 79.9026 56.007 97H76Z"
                 stroke="#4338CA"
                 strokeWidth={40}
                 mask="url(#path-1-inside-1_2495_2146)"
               />
             </svg>
             <div className="rounded-full bg-white w-[150px] h-[150px]" />
           </div>
           <p className="absolute mx-auto inset-x-0 my-auto inset-y-[80px] text-base font-medium text-gray-800 text-center">
             Loading ...
           </p>
         </div>
       </div>
     );
   }

  //searching services
    const handleSearch = (e) => {
      
        const searchText = e.target.value;
      const filtered = services.filter(service => service.name.toLowerCase().includes(searchText.toLowerCase()));
      
            if (filtered.length > 0) {
                setDatas(filtered);
            } else {
                setDatas([...services]);
                
            }
            
  }

    return (
      <div>
        <div
          className="hero h-[600px]"
          style={{
            backgroundImage: `url("https://placeimg.com/1000/800/arch")`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Welcome To Ac Solutions center here you will get all the services that you need to make your life easier and more comfortable. Be cool and enjoy your life with your cool AC .
              </p>
              <div>
                <div className="form-control flex flex-row w-full justify-center relative">
                  <input
                    onChange={handleSearch}
                    type="text"
                    name="search"
                    autoComplete="off"
                    placeholder="Write to Search Services"
                    className="input input-bordered rounded-full bg-white w-full text-black"
                  />
                  <button className=" bg-gray-100 absolute right-0 top-0  items-center text-center self-center flex justify-center btn-circle">
                    <BsSearch className="text-gray-400 font-bold text-xl "></BsSearch>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center xl:w-10/12 mx-auto mb-10 -mt-10">
          <div className="grid  sm:grid-cols-3 gap-4 justify-center items-center  -mt-20 m-4">
            
            {datas.map((service) => (
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
      </div>
    );
};

export default Services;