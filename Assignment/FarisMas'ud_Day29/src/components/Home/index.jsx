import React from 'react';
import HomeImg from '../../assets/react.png';

const Home = () => {
  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-gradient-to-r from-secondary/90 to-stone-100 flex justify-center items-center text-white">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Text Section */}
          <div className="flex flex-col justify-center order-2 gap-6 sm:order-1">
            <h1
              data-aos="fade-up"
              data-aos-once="true"
              className="text-5xl font-bold sm:text-6xl lg:text-7xl "
            >
              Learn how to build a website with {' '}
              <span
                data-aos="zoom-out"
                data-aos-delay="300"
                className="text-red-200"
              >
                React.js & Tailwind CSS
              </span>{' '}
            </h1>
            <div data-aos="fade-up" data-aos-delay="400">
              <button className="px-4 py-2 font-semibold text-white transition duration-300 ease-in-out rounded-full shadow-md bg-gradient-to-r from-stone-500 to-secondary/90 hover:scale-105 hover:bg-secondary ">
                Get Started
              </button>
            </div>
          </div>
          {/* Image Section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative"
          >
            <img
              data-aos-once="true"
              src={HomeImg}
              alt=""
              className="w-[300px] sm:w-[450px] sm:scale-110 m-auto spin"
            />
              <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
