import React,{ useContext,useState } from 'react';
import { useEffect } from 'react';
import { BsSearch } from "react-icons/bs";
import { DataContext } from '../../Context/Context';

const Services = () => {
    const { services } = useContext(DataContext)
  const [datas,setDatas] = useState([]);
  useEffect(() => {
    setDatas(services)
  },[services])
    
    const handleSearch = (e) => {
      
        const searchText = e.target.value;
        const filtered = services.filter(service => service.name.toLowerCase().includes(searchText.toLowerCase()));
    
       
            if (filtered.length > 0) {
                setDatas(filtered);
            } else {
                setDatas([...services]);
                
            }
            
            
       
  }
  console.log(datas);
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
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <div>
                <div className="form-control flex flex-row w-full justify-center relative">
                  
                    <input
                      onChange={handleSearch}
                      type="text"
                    name="search"
                    autocomplete="off"
                      placeholder="Write to Search Services"
                      className="input input-bordered rounded-full bg-white w-full"
                    />
                    <button
                      
                    className=" bg-gray-100 absolute right-0 top-0  items-center text-center self-center flex justify-center btn-circle"
                    
                    >
                      <BsSearch className="text-gray-400 font-bold text-xl "></BsSearch>
                    </button>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center xl:w-10/12 mx-auto mb-10 -mt-10">
          <div className="grid  sm:grid-cols-3 gap-4 justify-center items-center  -mt-20">
            {datas.map((service) => (
              <div className="card justify-center p-10 bg-white rounded-lg shadow-2xl md:min-h-[350px]">
                <div className="prod-title">
                  <p className="text-xl mb-3 uppercase text-gray-900 font-bold">
                    {service.name}
                  </p>
                  
                </div>
                <div className="prod-img">
                  <img
                    alt="/"
                    src={service.image}
                    className=" h-[200px] object-cover object-center w-full"
                  />
                </div>
                <div className="prod-info grid gap-10 mt-5">
                  <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                    <p className="font-bold text-xl">{service.price}</p>
                    <button className="px-4 py-1 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none text-sm">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Services;