import React from 'react';
import { experiences } from '../../constants';

const Experience = () => {
  return (
    <section
      id='skills'
      className='py-24 pb-24 px-[17vw] md:px-[7vw] lg:px-[16vw] font-sans .clip-path-custom-2 '
      style={{
        backgroundImage: `linear-gradient(38.73deg, rgba(204,0,187,0.15) 0%, rgba(201,32,184,0) 50%), linear-gradient(141.27deg, rgba(44,0,120,0.15) 0%, rgba(44,0,120,0) 50%)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* Section Title */}
      <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold text-white'>EXPERIENCE</h2>
        <div className='w-32 h-1 bg-purple-500 mx-auto mt-4'></div>
        <p className='text-gray-400 mt-4 text-lg font-semibold'>
          A collection of my work experience and the roles I have taken in
          various organizations.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className='relative'>
        {/* Vertical Line */}
        <div className='absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:translate-x-0 w-1 bg-white h-full'></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mt-16 ${
              index % 2 === 0 ? 'sm:justify-end' : 'sm:justify-start'
            }`}
          >
          
            {/* Content Box */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? 'sm:ml-0 ' : 'sm:mr-0'
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Header */}
              <div className='items-center flex space-x-6'>
                <div className='w-16 h-16 bg-white rounded-md overflow-hidden'>
                  <img
                    className='w-full h-full object-cover'
                    src={experience.img}
                    alt={experience.company}
                  />
                </div>

                <div className='flex flex-col justify-between'>
                  <h3 className='text-xl sm:text-2xl font-semibold text-white'>
                    {experience.role}
                  </h3>
                  <p className='text-purple-400 text-sm font-medium'>
                    {experience.company}
                  </p>
                  <p className='text-gray-400 text-sm'>{experience.date}</p>
                </div>
              </div>

              {/* Description */}
              <p className='text-gray-300 mt-4 text-sm leading-relaxed'>
                {experience.desc}
              </p>

              {/* Skills List */}
              {experience.skills && (
                <div className='flex flex-wrap gap-2 mt-4'>
                  {experience.skills.map((skill, i) => (
                    <span
                      key={i}
                      className='bg-purple-700 text-white px-2 py-1 text-xs rounded-full'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;






