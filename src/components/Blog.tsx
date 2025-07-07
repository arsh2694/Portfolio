import React from 'react';
import { ExternalLink, Calendar, User } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPost = {
    title: 'BMW + Kubernetes = Driving the Future of Automotive Tech',
    excerpt: 'BMW Group is proving traditional industries can be tech leaders — embracing Kubernetes to power smart factories, connected vehicles, and scalable cloud-native platforms.',
    date: 'December 2024',
    author: 'Arsh Sharma',
    link: 'https://www.linkedin.com/posts/arsh-sharma-932b2a2a5_bmw-kubernetes-devops-activity-7347742432672870400-vH_O',
    tags: ['BMW', 'Kubernetes', 'DevOps', 'Automotive Tech']
  };

  return (
    <section id="blog" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Latest <span className="text-blue-400">Blog</span>
          </h2>
          
          <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden hover:border-blue-400 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/20 group">
            <div className="p-8">
              <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>{blogPost.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User size={16} />
                  <span>{blogPost.author}</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {blogPost.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {blogPost.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {blogPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 bg-gray-700 text-gray-300 rounded-full border border-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <a
                href={blogPost.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
              >
                <span>Read More</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;