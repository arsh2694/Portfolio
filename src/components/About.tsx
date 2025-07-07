import React from 'react';
import { Code, Server, Cloud, Zap, User, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
            About <span className="text-blue-400">Me</span>
          </h2>
          
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Side - Personal Info */}
            <div className="space-y-8">
              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-blue-400 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 p-3 rounded-lg mr-4">
                    <User size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Who I Am</h3>
                </div>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    My passion lies at the intersection of <span className="text-blue-400 font-semibold">DevOps and Full Stack Development</span>, where I bring ideas to life through code and automation.
                  </p>
                  <p>
                    I specialize in building scalable systems, automating deployment pipelines, and crafting user-friendly web applications that solve real-world problems.
                  </p>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-green-400 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-green-600 p-3 rounded-lg mr-4">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Education</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Currently pursuing <span className="text-green-400 font-semibold">B.E. in Computer Science and Engineering</span> from Model Institute of Engineering and Technology.
                </p>
              </div>
            </div>

            {/* Right Side - Journey & Philosophy */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-purple-400 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Over the past year, I've worked on a range of projects — from CI/CD pipeline automation to AI-based prompt tools — that reflect both my technical skills and curiosity for innovation.
                </p>
                <p>
                  I'm always exploring new technologies, contributing to open source, and pushing the boundaries of what's possible through efficient, well-structured code.
                </p>
                <p>
                  When I'm not coding, you'll find me reading about cloud-native architectures or writing blogs to simplify tech for others.
                </p>
              </div>
            </div>
          </div>

          {/* Expertise Cards */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              What I <span className="text-blue-400">Specialize</span> In
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300 group hover:transform hover:scale-105 text-center">
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <Code size={40} />
                </div>
                <h4 className="text-white font-semibold mb-2">Full Stack</h4>
                <p className="text-gray-400 text-sm">Complete web applications from frontend to backend</p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-400 transition-all duration-300 group hover:transform hover:scale-105 text-center">
                <div className="text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <Server size={40} />
                </div>
                <h4 className="text-white font-semibold mb-2">DevOps</h4>
                <p className="text-gray-400 text-sm">Automating deployment pipelines and infrastructure</p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-purple-400 transition-all duration-300 group hover:transform hover:scale-105 text-center">
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <Cloud size={40} />
                </div>
                <h4 className="text-white font-semibold mb-2">Cloud Native</h4>
                <p className="text-gray-400 text-sm">Scalable cloud solutions and architectures</p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-yellow-400 transition-all duration-300 group hover:transform hover:scale-105 text-center">
                <div className="text-yellow-400 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <Zap size={40} />
                </div>
                <h4 className="text-white font-semibold mb-2">Innovation</h4>
                <p className="text-gray-400 text-sm">Cutting-edge technologies and AI integration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;