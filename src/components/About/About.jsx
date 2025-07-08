import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';

const About = () => {
  return (
    <section
      id='about'
      className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'
    >
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        {/* Left Side */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
          <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
            Hi, I am
          </h1>

          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-10 leading-4'>
            Syeda Kiswa
          </h2>

          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold text-[#8245ec] leading-tight mt-4 mb-4'>
            <span className='text-white'>I am a</span>
            <ReactTypingEffect
              className='ml-2'
              text={[
                'Web Developement',
                'Front-End Development',
                'Back-End Development',
                'Database Development',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={cursor => <span>{cursor}</span>}
            />
          </h3>

          <p className='text-base md:text-lg text-gray-400 mb-10 mt-4 leading-relaxed'>
    I'm a frontend web developer skilled in HTML, CSS, Tailwind CSS, JavaScript, React.js, and Next.js. I love transforming ideas into responsive, modern websites. I'm passionate about learning and always excited to build real-world projects that make an impact.
          </p>

          <a
            href='https://drive.google.com/file/d/1ZgJAwG9f_yxvqroEaMgQeY784gBTotm6/view?usp=drive_link'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block text-white py-3 px-8 rounded-full mt-3 text-lg font-bold transition duration-300 transform hover:scale-105'
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow:
                '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className='md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0'>
         
          <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} scale={1.05} perspective={1000} transitionSpeed={1000} gyroscope={true}>
            <img
    src={profileImage}
    alt='Syeda Kiswa'
    className='w-72 h-72 rounded-full object-cover shadow-[0_10px_20px_rgba(130,69,235,0.5)]'
  />
</Tilt>

        </div>
      </div>
    </section>
  );
};

export default About;
