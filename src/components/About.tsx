import React from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend', icon: Palette, technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'] },
    { name: 'Backend', icon: Code, technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'] },
    { name: 'DevOps', icon: Zap, technologies: ['Docker', 'AWS', 'CI/CD', 'Linux'] },
    { name: 'Soft Skills', icon: Users, technologies: ['Leadership', 'Communication', 'Problem Solving', 'Team Work'] },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm a passionate developer with 5+ years of experience creating digital solutions 
            that combine functionality with beautiful design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-300">
              <p>
                My journey in web development started with a curiosity about how things work 
                under the hood. This led me to dive deep into both frontend and backend technologies, 
                always striving to create seamless user experiences.
              </p>
              <p>
                I believe in writing clean, maintainable code and staying up-to-date with the 
                latest industry trends. When I'm not coding, you'll find me exploring new 
                technologies, contributing to open source, or mentoring aspiring developers.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker', 'PostgreSQL'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-gray-800 text-cyan-400 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <skill.icon className="text-purple-400 mr-3" size={24} />
                  <h3 className="text-white font-semibold">{skill.name}</h3>
                </div>
                <div className="space-y-2">
                  {skill.technologies.map((tech) => (
                    <div key={tech} className="text-gray-400 text-sm">{tech}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;