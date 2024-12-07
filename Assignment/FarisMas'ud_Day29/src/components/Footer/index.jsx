import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import FooterBg from '../../assets/background.png';

const bgImage = {
  backgroundImage: `url(${FooterBg})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  minHeight: '400px',
  width: '100%',
};

const Footer = ({ Footers }) => {
  return (
    <div style={bgImage} className="text-white">
      <div className="bg-black/40 min-h-[400px]">
        <div className="container grid pt-5 pb-20 md:grid-cols-3">
          {/* Company Details */}
          <div className="px-4 py-8">
            <a href="#" className="text-2xl font-semibold sm:text-3xl ">
              Tanyoe Rasa
            </a>
            <p className="pt-4 ">
              {''}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          {/* Footer Links */}
          <div className="grid grid-cols-2 col-span-2 sm:grid-cols-3 md:pl-10">
            {/* First Column Links */}
            <div className="px-4 py-8">
              <h1 className="mb-3 text-xl font-semibold sm:text-left">
                Main Links
              </h1>
              <ul className="space-y-3">
                {Footers.map((footer, index) => (
                  <li key={index}>
                    <a
                      href={footer.link}
                      className="inline-block duration-200 hover:scale-105"
                    >
                      {footer.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Second Column Links */}
            <div className="px-4 py-8">
              <h1 className="mb-3 text-xl font-semibold sm:text-left">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {Footers.map((footer, index) => (
                  <li key={index}>
                    <a
                      href={footer.link}
                      className="inline-block duration-200 hover:scale-105"
                    >
                      {footer.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 px-4 py-8 sm:col-auto">
              <h1 className="mb-3 text-xl font-semibold sm:text-left">
                Address
              </h1>
              <div>
                <p className="mb-3">
                  Jl. Kebon Jeruk No. 1, Jakarta Utara, DKI Jakarta
                </p>
                <p>(+62) 822-3344-556</p>

                {/* social links */}
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl duration-300 hover:text-secondary hover:scale-105" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl duration-200 hover:text-secondary hover:scale-105" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl duration-200 hover:text-secondary hover:scale-105" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
