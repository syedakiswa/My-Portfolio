
import React from 'react';
import { FaSchool, FaUniversity, FaLaptopCode } from 'react-icons/fa';

const educationData = [
  {
    id: 0,
    icon: <FaSchool className="text-purple-500 text-3xl" />,
    title: 'The Academy of Excellence',
    location: 'Khairpur Mirus sindh pakistan ',
    date: 'Nursery to Class 7',
    description: 'Completed early education up to class 7 in Khairpur Mirus at The Academy of Excellence. Built a strong academic foundation and interest in computers during this phase.'
  },
  {
    id: 1,
    icon: <FaSchool className="text-purple-500 text-3xl" />,
    title: 'Pakistan Grammar School',
    location: 'Karachi sindh pakistan',
    date: 'Class 8 to Class 10',
    description: 'Continued studies from class 8 to 10 at Pakistan Grammar School in Karachi. Alongside school, started learning HTML, CSS, and JavaScript through online platforms.'
  },
  {
    id: 2,
    icon: <FaLaptopCode className="text-purple-500 text-3xl" />,
    title: 'Saylani Mass IT Training Program',
    location: 'Karachi sindh pakistan',
    date: 'Current',
    description: 'Currently enrolled at Saylani Mass IT Training program where I am learning Full Stack Web Development (MERN stack), building real-world projects, and practicing with hands-on coding.'
  }
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[10vw] font-sans bg-[#0c061b] relative"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My academic journey and learning milestones from school to tech training.
        </p>
      </div>

      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-white opacity-30 z-0"></div>

        {educationData.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative z-10 flex flex-col sm:flex-row items-center mt-20 ${
              index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'
            }`}
          >
            {/* Timeline Dot with Icon */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-[45%] w-14 h-14 rounded-full border-[3px] border-white bg-[#0c061b] flex justify-center items-center z-20">
              {edu.icon}
            </div>

            {/* Card */}
            <div
              className={`w-full sm:max-w-[500px] bg-[#1a1230] border border-purple-600 rounded-2xl shadow-lg p-6 sm:p-8 backdrop-blur-lg text-white ${
                index % 2 === 0 ? 'sm:ml-[40px]' : 'sm:mr-[40px]'
              }`}
            >
              <h3 className="text-2xl font-semibold text-white mb-1">{edu.title}</h3>
              <p className="text-purple-400 text-sm font-medium">{edu.location}</p>
              <p className="text-gray-400 text-sm mb-4">{edu.date}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
