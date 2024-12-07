import React from 'react';

const Skills = ({ Skills }) => {
  return (
    <>
      <span id="skills"></span>
      <div className="py-10">
        <div className="container">
          {/* Header Title */}
          <div className="mb-20 text-center">
            <h1 className="pb-8 text-4xl font-bold font-cursive text-secondary">
              My Skills
            </h1>
          </div>
          {/* Skill Card Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-14 md:gap-5 place-items-center">
            {Skills.map((data, index) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  key={index}
                  className="rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-high max-w-[300px] group relative"
                >
                  {/* Image Section */}
                  <div className="h-[122px]">
                    <img
                      src={data.img}
                      alt=""
                      className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                    />
                  </div>
                  {/* Text Content */}
                  <div className="p-4 text-center">
                    <h1 className="text-xl font-bold">{data.name}</h1>
                    <p className="text-sm text-gray-500 duration-300 group-hover:text-white line-clamp-2">
                      {data.description}
                    </p>
                  </div>
                </div>
              );
            })}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
