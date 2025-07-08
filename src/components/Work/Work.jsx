import React, { useState } from 'react'
import { projects } from '../../constants'

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const handleOpenModal = project => {
    setSelectedProject(project)
  }

  const handleCloseModal = project => {
    setSelectedProject(null)
  }
  return (
    <section
      id='work'
      className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative '
      style={{
        backgroundImage: `linear-gradient(38.73deg, rgba(204,0,187,0.15) 0%, rgba(201,32,184,0) 50%), linear-gradient(141.27deg, rgba(44,0,120,0.15) 0%, rgba(44,0,120,0) 50%)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      {/* Section title  */}

      <div className='text-center mb-16 '>
        <h2 className='text-4xl font-bold text-white'>PROJECTS</h2>
        <div className='w-32 h-1 bg-purple-500 mx-auto mt-4'></div>
        <p className='text-lg font-semibold text-gray-400 mt-4 '>
          A Showcase of the project . I have worked on , highlighting my skills
          and experience in various techonologies.
        </p>
      </div>
      {/* project grid  */}
      <div className='grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map(project => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className='bg-gray-900 border border-white  background-blur-md rounded-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 trasition-transform duration-300'
          >
            <div className='p-4'>
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-48 object-cover rounded-xl'
              />
            </div>
            <div className='p-6'>
              <h3 className='font-bold text-white mb-2 text-2xl'>
                {project.title}
              </h3>
              <p className='text-gray-500 mb-4 pt-5 line-clamp-3'>
                {project.description}
              </p>

              <div className='mb-4'>
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className='text-xs font-semibold inline-block text-purple-500 rounded-full px-2 py-1 mb-2 mr-2 bg-[#251f38]'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}

      {selectedProject && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4'>
          <div className='bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative'>
            <div className='flex justify-end p-4'>
              <button
                onClick={handleCloseModal}
                className='text-white text-3xl font-bold hover:text-purple-500 '
              >
                &times;
              </button>
            </div>
            <div className='flex flex-col'>
              <div className='w-full flex justify-center bg-gray-900 px-4'>
                <img
                  src={selectedProject.image}
                  alt={setSelectedProject.title}
                  className='lg:w-full w-[95%] object-contain rounded-2xl shadow-2xl'
                />
              </div>
              <div className='lg:p-8 p-6'>
                <h3 className='lg:text-3xl font-bold text-white mb-4 text-md'>
                  {selectedProject.title}
                </h3>
                <p className='text-gray-400 mb-6 lg:text-base text-xs'>
                  {selectedProject.description}
                </p>
                <div className='flex flex-wrap gap-2 mb-6'>
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className='text-xs font-semibold  text-purple-500 rounded-full px-2 py-1  bg-[#251f38]'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className='flex gap-4'>
                  <a
                    href={selectedProject.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center'
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center'
               >
                View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Work
