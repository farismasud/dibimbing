import React from 'react';
import BannerImg from '../../assets/react.png';
import BgTexture from '../../assets/background.png';
import { BiAtom } from "react-icons/bi";

const bgImage = {
  backgroundImage: `url(${BgTexture})`,
  backgroundColor: '#270c03',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
};

const Banner = () => {
  return (
    <>
      <div style={bgImage}>
        <div className="container min-h-[500px] flex justify-center items-center py-12  sm:py-0">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Image Section */}
            <div data-aos="zoom-in">
              <img
                src={BannerImg}
                alt=""
                className="max-w-[430px] w-full mx-auto drop-shadow-xl spin"
              />
            </div>
            {/* Text Content Section */}
            <div className="flex flex-col justify-center gap-6 text-secondary sm:pt-0">
              <h1
                data-aos="fade-up"
                className="text-3xl font-bold sm:text-4xl font-cursive"
              >
                Programmer {' '}
                <span className="text-primary">Masa kini</span>
              </h1>
              <p
                data-aos="fade-up"
                className="text-sm leading-5 tracking-wide text-gray-500"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                tempora, aspernatur corporis, quas, amet eum quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi tempora, aspernatur corporis, quas, amet eum quibusdam. 
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-5">
                  <div data-aos="fade-up" className="flex items-center gap-3">
                    <BiAtom className="w-12 h-12 p-3 text-2xl rounded-full shadow-sm bg-gradient-to-r from-stone-500 to-secondary/90" />
                    <span>Premium</span>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="flex items-center gap-3"
                  >
                    <BiAtom className="w-12 h-12 p-3 text-2xl rounded-full shadow-sm bg-gradient-to-r from-stone-500 to-secondary/90" />
                    <span>Premium</span>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="500"
                    className="flex items-center gap-3"
                  >
                    <BiAtom className="w-12 h-12 p-3 text-2xl rounded-full shadow-sm bg-gradient-to-r from-stone-500 to-secondary/90" />
                    <span>Premium</span>
                  </div>
                </div>
                <div
                  data-aos="slide-left"
                  className="pl-6 space-y-3 border-l-4 border-secondary/50"
                >
                  <h1 className="text-2xl font-bold text-secondary">
                    Coding Lover{' '}
                  </h1>
                  <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                  tempora, aspernatur corporis, quas, amet eum quibusdam.
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
