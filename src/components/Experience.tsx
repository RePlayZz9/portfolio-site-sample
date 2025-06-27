import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: [
        'Led development of microservices architecture serving 100k+ users',
        'Mentored junior developers and established coding standards',
        'Reduced application load time by 40% through optimization',
        'Implemented CI/CD pipelines using Docker and AWS'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupHub',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: [
        'Built and maintained React applications with TypeScript',
        'Developed RESTful APIs using Node.js and Express',
        'Collaborated with design team to implement pixel-perfect UIs',
        'Integrated third-party services and payment processing'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency',
      location: 'Remote',
      period: '2019 - 2020',
      description: [
        'Created responsive websites for various clients',
        'Worked with modern JavaScript frameworks and libraries',
        'Optimized websites for performance and SEO',
        'Collaborated with designers and backend developers'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My professional journey and the exciting projects I've worked on.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-cyan-400"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full border-4 border-gray-900"></div>
                  
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-cyan-400 font-semibold">{exp.company}</p>
                      </div>
                      <div className="flex flex-col md:text-right mt-2 md:mt-0">
                        <div className="flex items-center text-gray-400 mb-1">
                          <Calendar size={16} className="mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-gray-400">
                          <MapPin size={16} className="mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <span className="text-purple-400 mr-2 mt-1.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;