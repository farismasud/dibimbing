import React from 'react';

const Navbar = ({ Menus }) => {
  return (
    <div className="text-white bg-gradient-to-r from-stone-500 to-secondary/90">
      <div className="container py-2">
        <div className="flex items-center justify-center gap-4">
        
          {/* Links section */}
          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            className="flex items-center justify-between gap-4"
          >
            <ul className="items-center hidden gap-4 sm:flex item">
              {Menus.map((menu, index) => (
                <li key={index}>
                  <a
                    href={menu.link}
                    className="inline-block px-4 py-4 text-lg duration-200 text-white/70 hover:text-white"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
