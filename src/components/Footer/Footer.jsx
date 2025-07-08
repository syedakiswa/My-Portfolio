import React from 'react'
import { FaFacebook, FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'

const Footer = () => {
  const handleScroll = sectionId => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behaviour: 'smooth' })
    }
  }
  return (
    <footer className='text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]'>
      <div className='container mx-auto text-center'>
        <h2 className='text-xl font-semibold text-purple-500'>Syeda Kiswa</h2>

        {/* Navigation Links */}
        <nav className='flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4'>
          {[
            { name: 'About', id: 'about' },
            { name: 'Skills', id: 'skills' },
            { name: 'Experience', id: 'experience' },
            { name: 'Work', id: 'work' },
            { name: 'Education', id: 'education' }
          ].map((item, index) => (
            <button
              onClick={() => handleScroll(item.id)}
              key={index}
              className='hover:text-purple-500 text-sm sm:text-base my-1'
            >
              {item.name}
            </button>
          ))}
        </nav>
        {/* Social Media Icons */}
        <div className='flex flex-wrap justify-center space-x-4 mt-6'>{[
          {icon: <FaFacebook/>, link: "https://www.facebook.com/sayeda.kiswa?mibextid=ZbWKwL"},
          {icon: <FaLinkedin/>, link: "https://www.linkedin.com/in/sayeda-kiswa-9a568233b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},
          {icon: <FaGithub/>, link:"https://github.com/syedakiswa"},
        ].map((item, index) => (
          <a key={index} href={item.link} target='_blank' rel='noopener noreferrer' className='text-xl hover:text-purple-500 transition-transform transform hover:scale-110' >
            {item.icon}
          </a>
        ))}
        
        
        </div>

        {/* Copyright text */}
        <p className='text-sm text-gray-400 mt-6'>
          © 2025 Syeda Kiswa. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
