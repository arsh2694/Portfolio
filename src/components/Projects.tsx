import React, { useState } from 'react';
import { Github, ExternalLink, ChevronDown, ChevronRight, Star } from 'lucide-react';

const Projects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(0);

  const projects = [
    {
      title: 'CI/CD Pipelines Automation',
      subtitle: 'Major Project',
      tech: ['Linux', 'Docker', 'Python', 'Flask', 'Jenkins'],
      description: 'End-to-end automation of CI/CD process with comprehensive pipeline management and deployment strategies.',
      github: 'https://github.com/arsh2694/Devops_Project1.git',
      isHighlight: true
    },
    {
      title: 'DestXam - Prompt Engineering / AI',
      subtitle: 'Major Project',
      tech: ['Prompt Engineering', 'Gemini AI'],
      description: 'Simplifies complex topics into short, memorable explanations using advanced AI prompt engineering techniques.',
      linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7205375225421211648/',
      isHighlight: false
    },
    {
      title: 'TechDash - Python Tools',
      subtitle: 'Minor Project',
      tech: ['Python', 'Streamlit'],
      description: 'Comprehensive dashboard featuring Docker Dashboard, Photogation, and HTML Interpreter tools.',
      github: 'https://github.com/arsh2694/TechDash.git',
      isHighlight: false
    },
    {
      title: 'Photogation Interpreter',
      subtitle: 'Minor Project',
      tech: ['HTML', 'CSS', 'JavaScript'],
      description: 'Location + camera + social integration for enhanced photo sharing and geolocation features.',
      github: 'https://github.com/arsh2694/PhotoGation_Interpreter.git',
      live: 'https://arsh2694.github.io/PhotoGation_Interpreter/',
      isHighlight: false
    }
  ];

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`relative bg-gray-900 rounded-lg border transition-all duration-300 overflow-hidden ${
                  project.isHighlight 
                    ? 'border-blue-400 shadow-lg shadow-blue-400/20 hover:shadow-xl hover:shadow-blue-400/30' 
                    : 'border-gray-700 hover:border-gray-600'
                } ${expandedProject === index ? 'transform scale-105' : ''}`}
              >
                {project.isHighlight && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star size={14} className="mr-1" />
                    Featured
                  </div>
                )}
                
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => toggleProject(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                        <span className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded">
                          {project.subtitle}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded border border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-gray-400 ml-4">
                      {expandedProject === index ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
                    </div>
                  </div>
                </div>
                
                {expandedProject === index && (
                  <div className="px-6 pb-6 border-t border-gray-800">
                    <div className="pt-6">
                      <p className="text-gray-300 mb-6">{project.description}</p>
                      <div className="flex flex-wrap gap-4">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200"
                          >
                            <Github size={16} />
                            <span>GitHub</span>
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                          >
                            <ExternalLink size={16} />
                            <span>Live Demo</span>
                          </a>
                        )}
                        {project.linkedin && (
                          <a
                            href={project.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors duration-200"
                          >
                            <ExternalLink size={16} />
                            <span>LinkedIn</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;