import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto px-4">
      
      <div className="relative py-16 bg-gradient-to-b from-indigo-700 to-indigo-600 flex justify-center items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-10 text-white">
            How can we help you?
          </h1>
          <div className="bg-indigo-800 rounded relative mt-6 lg:mt-14 py-4 pl-4 flex items-center w-full">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-search"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx={10} cy={10} r={7} />
                <line x1={21} y1={21} x2={15} y2={15} />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search for answers"
              className=" ml-4 w-full bg-transparent text-base leading-none text-white placeholder-white focus:outline-none"
            />
          </div>
        </div>
      </div>
      <div className="pt-14 xl:px-0 px-4">
        <div className="w-full lg:flex">
          <div className="lg:w-1/2">
            <img
              alt=" "
              alt=""
              src="https://cdn.tuk.dev/assets/components/111220/blg-17/blog1.png"
              className="w-full"
            />
            <div className="mt-8 lg:mb-0 mb-8">
              <h1 className="f-m-m text-2xl font-semibold leading-7">
                Beautiful Italy, Travel Blog
              </h1>
              <p className="text-base f-m-m leading-loose mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It has survived not only five centuries. Lorem Ipsum
                is simply dummy text of the printing and typesetting industry.
              </p>
              <div className="mt-6">
                <a href>
                  <p className="text-indigo-700 underline text-base font-semibold f-m-m">
                    Read More
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:ml-8">
            <div className="lg:flex items-start mb-8">
              <img
                alt=" "
                src="https://cdn.tuk.dev/assets/components/111220/blg-17/blog2.png"
                className="w-full"
              />
              <div className="lg:ml-6">
                <h1 className="f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">
                  A Broken Backpack
                </h1>
                <p className="text-base f-m-m leading-loose mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. It has survived not only five centuries.
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="mt-4">
                  <a href>
                    <p className="text-indigo-700 underline text-base font-semibold f-m-m">
                      Read More
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:flex items-start mb-8">
              <img
                alt=" "
                src="https://cdn.tuk.dev/assets/components/111220/blg-17/blog3.png"
                className="w-full"
              />
              <div className="lg:ml-6">
                <h1 className="f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">
                  My life’s a Movie
                </h1>
                <p className="text-base f-m-m leading-loose mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. It has survived not only five centuries.
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="mt-4">
                  <a href>
                    <p className="text-indigo-700 underline text-base font-semibold f-m-m">
                      Read More
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:flex items-start mb-8">
              <img
                alt=" "
                src="https://cdn.tuk.dev/assets/components/111220/blg-17/blog4.png"
                className="w-full"
              />
              <div className="lg:ml-6">
                <h1 className="f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">
                  Lilii’s Travel Plans
                </h1>
                <p className="text-base f-m-m leading-loose mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. It has survived not only five centuries.
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="mt-4">
                  <a href>
                    <p className="text-indigo-700 underline text-base font-semibold f-m-m">
                      Read More
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-16 w-full">
        <button className=" hover:bg-gray-200 border border-indigo-700 border-2 lg:text-2xl md:text-lg text-sm rounded f-m-m font-semibold text-indigo-700 focus:outline-none lg:px-12 px-6 lg:py-6 py-3 xl:leading-4">
          Browse More
        </button>
      </div>
      <div />
    </div>
  );
};

export default Blog;
