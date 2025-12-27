import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Globe,
  Briefcase,
  Gamepad2,
} from "lucide-react";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  console.log("Current section:", activeSection);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const navBarBackgroundColors = {
    home: "bg-stone-500",
    about: "bg-stone-100",
    projects: "bg-stone-100",
    skills: "bg-blue-300",
  };

  const navBarTextColors = {
    home: "text-stone-200",
    about: "text-stone-900",
    projects: "text-stone-800",
    skills: "text-stone-500",
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleSectionChange = () => {
      const scrollPosition = window.scrollY;
      const navbarHeight = 80;

      if (scrollPosition < aboutRef.current.offsetTop - navbarHeight) {
        setActiveSection("home");
      } else if (
        scrollPosition <
        projectsRef.current.offsetTop - navbarHeight
      ) {
        setActiveSection("about");
      } else if (scrollPosition < skillsRef.current.offsetTop - navbarHeight) {
        setActiveSection("projects");
      } else {
        setActiveSection("skills");
      }
    };

    window.addEventListener("scroll", handleSectionChange);
    handleSectionChange();
    return () => window.removeEventListener("scroll", handleSectionChange);
  }, []);

  const projects = [
    {
      title: "Unity Farming Simulator",
      description:
        "Simple Farmign Simulator game made in Unity that took me way to long to make. No AI, C# scripting, WebGL build hosted on itch.io.",
      tech: ["Unity", "C#", "Game Development", "WebGL"],
      features: [
        "3 plantable crop types (pumpkins, carrots, strawberries) with unique growth cycles and values",
        "Dynamic day/night cycle with time-based crop growth mechanics",
        "Merchant boat NPC that arrives at specific times for trading",
        "Wild berry foraging system with random spawning",
        "20-day survival challenge with score tracking",
        "Complete UI system with inventory and time management",
      ],
      link: "https://jschratt.itch.io/bobbefarming",
      github: "https://github.com/17010856/F25-COP2671-0T1-17010856",
      hasGame: true,
      useWidget: true, 
    },
    {
    title: "Bloc Jams Music Player",
    description: "Revamped old music player React app, AI used for styling and code optimization.",
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript", "Responsive Design"],
    features: [
      "Dynamic album library with multiple collections",
      "Real-time audio playback with progress tracking",
      "Interactive song selection with visual feedback",
      "Blue gradient progress bar showing current playback position",
      "Previous/next track navigation",
      "Responsive design for all screen sizes",
    ],
    link: "https://jams-new.vercel.app", 
    github: "https://github.com/WJSchratt/JamsNew",
    hasGame: true,  // Change this to true
    useWidget: false, // Add this
    },
    {
      title: "PIG Dice Game",
      description:
        "Super simple dice game to practice OOP and basic JS logic. NO AI and no styling, just the bare minimum to make it work.",
      tech: ["JavaScript", "HTML5", "CSS3", "OOP", "DOM Manipulation"],
      features: [
        "Real-time game state updates",
        "Instant winner detection at 50 points",
        "user interface with form validation",
      ],
      link: "https://pig-tan.vercel.app",
      github: "https://github.com/WJSchratt/Pig",
      hasGame: true,
      embedSrc: "https://pig-tan.vercel.app",
      embedMessage: "Enter two player names and click New Game to start playing",
      useWidget: false,
    },
  ];

  const skills = {
    Frontend: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
    ],
    Backend: ["Node.js", "Python", "RESTful APIs", "Database Design"],
    "Game Dev": ["Unity", "C#", "Game Mechanics", "2D Development"],
    Tools: ["Git", "GitHub", "VS Code", "Debugging", "Agile"],
  };

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100">
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${navBarBackgroundColors[activeSection]}
        `}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-2xl font-bold tracking-tight">
              <span className="text-sky-600">W</span>
              <span
                className={`text-stone-100" ${navBarTextColors[activeSection]}`}
              >
                S
              </span>
            </a>
            <div className="flex gap-8">
              {["About", "Projects", "Skills", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm font-medium hover:text-sky-600 transition-colors ${navBarTextColors[activeSection]}`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section
        id="home"
        ref={homeRef}
        className="min-h-screen flex items-center pt-20 pb-32 px-6"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="space-y-6">
            <h1 className="text-7xl font-bold leading-tight tracking-tight">
              Full-Stack Developer
              <br />
              <span className="text-sky-600">& Sales</span>
            </h1>

            <p className="text-xl font-bold text-stone-100 max-w-2xl leading-relaxed">
              Building software solutions and web applications that solve
              problems and connecting people is what I am all about.
            </p>
        

            <div className="flex gap-4 pt-4">
              <a
                href="#projects"
                className="bg-sky-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-sky-700 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border-2 border-stone-100 text-stone-100 px-8 py-4 rounded-lg font-medium hover:bg-stone-100 hover:text-stone-900 transition-all"
              >
                Get in Touch
              </a>
            </div>

            <div className="flex gap-6 pt-8">
              <a
                href="https://github.com/WJSchratt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-100 hover:text-sky-600 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/walter-schratt/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-100 hover:text-sky-600 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:schrattwalterdev@gmail.com"
                className="text-stone-100 hover:text-sky-600 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" ref={aboutRef} className="py-32 px-6 bg-stone-600">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-stone-900 mb-6">
                About Me
              </h2>
              <div className="space-y-4 leading-relaxed">
                <p className="text-stone-100">
                  I'm a full-stack developer with a passion for creating
                  engaging digital experiences. I have an A.S. in Programming
                  and Analysis and I am currently pursuing my Bachelors.
                </p>
                <p className="text-stone-900 font-bold">
                  I love coding and problem solving but I love people even more.
                  I like to engage, connect and solve problems together. I come
                  from a customer service and sales background, so I understand
                  how to identify client needs and build relationships.
                </p>
                <p className="text-stone-100">
                  I grew up in Germany and I am fluent in both English and
                  German. I have work experience in Germany and the USA. I love
                  both countries for many reasons and my dream is to collaborate
                  internationally one day.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="space-y-2">
                  <Code2 className="w-8 h-8 text-stone-900" />
                  <h3 className="font-bold">Full-Stack</h3>
                  <p className="text-sm text-stone-900 font-bold">
                    React to Database
                  </p>
                </div>
                <div className="space-y-2">
                  <Globe className="w-8 h-8 text-stone-900" />
                  <h3 className="font-bold">Bilingual</h3>
                  <p className="text-sm text-stone-900 font-bold">
                    German & English
                  </p>
                </div>
                <div className="space-y-2">
                  <Briefcase className="w-8 h-8 text-stone-900" />
                  <h3 className="font-bold">EU Ready</h3>
                  <p className="text-sm text-stone-900 font-bold">
                    German Citizen
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-stone-900 rounded-2xl p-8 border-2 border-stone-800">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-bold text-stone-500 mb-2">
                      EDUCATION
                    </h3>
                    <p className="font-semibold">Santa Fe College</p>
                    <p className="text-sm text-stone-100">
                      A.S. Programming and Analysis
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-stone-500 mb-2">
                      LOCATION
                    </h3>
                    <p className="text-sm text-stone-100">Gainesville, FL</p>
                    <p className="text-sm text-stone-100">
                      Open to Remote & Relocation
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-stone-500 mb-2">
                      LANGUAGES
                    </h3>
                    <p className="text-sm text-stone-100">German (Native)</p>
                    <p className="text-sm text-stone-100">English (Fluent)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        ref={projectsRef}
        className="py-32 px-6 bg-stone-50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-stone-900">
            Projects
          </h2>
          <p className="text-stone-600 mb-16 text-lg">
           Here is some stuff I made
          </p>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-stone-400 rounded-2xl border-2 p-8 transition-colors"
              >
                <div className="p-8">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-stone-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-stone-600 leading-relaxed max-w-3xl">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Game Preview */}
                  {project.hasGame && (
                    <div className="mb-8">
                      <div className="bg-stone-900 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-3">
                          <p className="text-stone-100 font-semibold text-sm">
                          </p>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sky-400 hover:text-sky-300 text-sm flex items-center gap-1"
                          >
                          </a>
                        </div>
                        <iframe
                          src={project.useWidget ? "https://itch.io/embed-upload/15902536?color=333333" : project.link}
                          width="100%"
                          height="620"
                          frameBorder="0"
                          className="rounded-lg"
                          allowFullScreen
                          title={project.title}
                        >
                          <a href={project.link}>Play {project.title} </a>
                        </iframe>
                      </div>
                    </div>
                  )}

                  {/* Tech Stack and Features Grid */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Features */}
                    <div>
                      <h4 className="text-sm font-bold text-sky-700 mb-4">
                        KEY FEATURES
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-stone-600"
                          >
                            <span className="text-sky-600 mt-1">▸</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-sm font-bold text-sky-700 mb-4">
                        TECH STACK
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-sky-50 px-4 py-2 rounded-lg text-sm font-medium border border-sky-200 text-stone-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-4">
                        {project.github !== "#" && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-stone-900 hover:text-sky-600 transition-colors"
                          >
                            <Github className="w-4 h-4" />
                            View Code
                          </a>
                        )}
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium text-stone-900 hover:text-sky-600 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          {project.hasGame ? "visit" : "Live Demo"}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" ref={skillsRef} className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-stone-900">
            Skills & Technologies
          </h2>
          <p className="text-stone-600 mb-16 text-lg">
            Tools and technologies I work with
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-xl font-bold text-sky-600">{category}</h3>
                <ul className="space-y-2">
                  {items.map((skill, i) => (
                    <li
                      key={i}
                      className="text-stone-600 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-sky-600 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        ref={contactRef}
        className="py-32 px-6 bg-stone-900 text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-stone-300 mb-12 leading-relaxed">
            I'm currently seeking opportunities. Lets
            work together!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:schrattwalterdev@gmail.com"
              className="bg-sky-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-sky-700 transition-all inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/walter-schratt/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-stone-900 transition-all inline-flex items-center justify-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn Profile
            </a>
          </div>

          <div className="flex justify-center gap-8 pt-8 border-t border-stone-700">
            <a
              href="https://github.com/WJSchratt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-sky-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/walter-schratt/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-sky-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:schrattwalterdev@gmail.com"
              className="text-stone-400 hover:text-sky-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-stone-950 text-stone-400 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-sm">
          <p>© 2025 Walter Schratt. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;