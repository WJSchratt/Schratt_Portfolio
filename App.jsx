import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Globe, Briefcase } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Unity Farming Simulator",
      description: "Full-featured farming game with crop management, day/night cycles, foraging system, and merchant trading. Built entirely in Unity with C#.",
      tech: ["Unity", "C#", "Game Development"],
      features: ["Crop growing system", "Day/night cycle", "NPC merchant", "Inventory management"],
      link: "#",
      github: "https://github.com/yourusername/farming-sim"
    },
    {
      title: "Full-Stack Web Application",
      description: "Modern web application showcasing React frontend with Node.js backend integration.",
      tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      features: ["User authentication", "RESTful API", "Responsive design"],
      link: "#",
      github: "#"
    }
  ];

  const skills = {
    "Frontend": ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
    "Backend": ["Node.js", "Python", "RESTful APIs", "Database Design"],
    "Game Dev": ["Unity", "C#", "Game Mechanics", "2D Development"],
    "Tools": ["Git", "GitHub", "VS Code", "Debugging", "Agile"]
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-stone-50/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-2xl font-bold tracking-tight">
              <span className="text-amber-600">F</span>
              <span className="text-stone-900">C</span>
            </a>
            <div className="flex gap-8">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium hover:text-amber-600 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 pb-32 px-6">
        <div className="max-w-6xl mx-auto w-full">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="flex items-center gap-3 text-sm font-medium text-amber-700 bg-amber-50 px-4 py-2 rounded-full border border-amber-200">
                <Globe className="w-4 h-4" />
                <span>German Citizen • Bilingual Developer</span>
              </div>
            </div>
            
            <h1 className="text-7xl font-bold leading-tight tracking-tight">
              Full-Stack Developer<br />
              <span className="text-amber-600">& Game Creator</span>
            </h1>
            
            <p className="text-xl text-stone-600 max-w-2xl leading-relaxed">
              Building dynamic web applications and interactive game experiences. 
              Fluent in German and English, specializing in React, Node.js, and Unity development.
            </p>

            <div className="flex gap-4 pt-4">
              <a 
                href="#projects" 
                className="bg-amber-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-amber-700 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="border-2 border-stone-900 text-stone-900 px-8 py-4 rounded-lg font-medium hover:bg-stone-900 hover:text-white transition-all"
              >
                Get in Touch
              </a>
            </div>

            <div className="flex gap-6 pt-8">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-amber-600 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-amber-600 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:your.email@example.com" className="text-stone-600 hover:text-amber-600 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">About Me</h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  I'm a full-stack developer with a passion for creating engaging digital experiences. 
                  Currently pursuing my degree in Computer Science at the University of Florida (graduating December 2025), 
                  I bring a unique international perspective to every project.
                </p>
                <p>
                  As a German citizen fluent in both German and English, I bridge cultures and technologies. 
                  My experience spans from building interactive Unity games to developing modern web applications 
                  with React and Node.js.
                </p>
                <p>
                  When I'm not coding, I'm tutoring students in programming and math, helping others discover 
                  the joy of problem-solving through technology.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="space-y-2">
                  <Code2 className="w-8 h-8 text-amber-600" />
                  <h3 className="font-bold">Full-Stack</h3>
                  <p className="text-sm text-stone-600">React to Database</p>
                </div>
                <div className="space-y-2">
                  <Globe className="w-8 h-8 text-amber-600" />
                  <h3 className="font-bold">Bilingual</h3>
                  <p className="text-sm text-stone-600">German & English</p>
                </div>
                <div className="space-y-2">
                  <Briefcase className="w-8 h-8 text-amber-600" />
                  <h3 className="font-bold">EU Ready</h3>
                  <p className="text-sm text-stone-600">German Citizen</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-amber-100 to-stone-100 rounded-2xl p-12 border-2 border-stone-200">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-bold text-amber-700 mb-2">EDUCATION</h3>
                    <p className="font-semibold">University of Florida</p>
                    <p className="text-sm text-stone-600">B.S. Computer Science</p>
                    <p className="text-sm text-stone-600">Expected: December 2025</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-amber-700 mb-2">LOCATION</h3>
                    <p className="text-sm text-stone-600">Gainesville, FL</p>
                    <p className="text-sm text-stone-600">Open to Remote & Relocation</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-amber-700 mb-2">LANGUAGES</h3>
                    <p className="text-sm text-stone-600">German (Native)</p>
                    <p className="text-sm text-stone-600">English (Fluent)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-stone-600 mb-16 text-lg">A selection of my recent work in web and game development</p>
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden border-2 border-stone-200 hover:border-amber-300 transition-all hover:shadow-xl"
              >
                <div className="grid md:grid-cols-5 gap-8 p-8">
                  <div className="md:col-span-3 space-y-4">
                    <h3 className="text-3xl font-bold">{project.title}</h3>
                    <p className="text-stone-600 leading-relaxed">{project.description}</p>
                    
                    <div>
                      <h4 className="text-sm font-bold text-amber-700 mb-3">KEY FEATURES</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-stone-600">
                            <span className="text-amber-600 mt-1">▸</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <a 
                        href={project.github} 
                        className="flex items-center gap-2 text-sm font-medium text-stone-900 hover:text-amber-600 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                      <a 
                        href={project.link} 
                        className="flex items-center gap-2 text-sm font-medium text-stone-900 hover:text-amber-600 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-xl p-6 border border-stone-200 h-full">
                      <h4 className="text-sm font-bold text-amber-700 mb-4">TECH STACK</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span 
                            key={i}
                            className="bg-white px-4 py-2 rounded-lg text-sm font-medium border border-stone-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-stone-600 mb-16 text-lg">Tools and technologies I work with</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-xl font-bold text-amber-600">{category}</h3>
                <ul className="space-y-2">
                  {items.map((skill, i) => (
                    <li key={i} className="text-stone-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-600 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-stone-300 mb-12 leading-relaxed">
            I'm currently seeking full-stack development opportunities, especially with companies 
            that value international perspectives and modern web technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="mailto:your.email@example.com" 
              className="bg-amber-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-amber-700 transition-all inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-stone-900 transition-all inline-flex items-center justify-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn Profile
            </a>
          </div>

          <div className="flex justify-center gap-8 pt-8 border-t border-stone-700">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-amber-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-amber-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:your.email@example.com" className="text-stone-400 hover:text-amber-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-sm">
          <p>© 2024 Your Name. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
