import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Briefcase, GraduationCap, FileDown, Eye, ArrowRight } from 'lucide-react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('experience');
  const [scrolled, setScrolled] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Trigger when scrollY > 20px
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check on mount in case page is already scrolled
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const experiences = [
    {
      title: "Intern",
      company: "Infosys",
      period: "September'25 - Present",
      description: "Developed and optimized machine learning models by cleaning and analyzing data, implementing NLP tasks.",
      logo:"/logo/logo1.png"
    },
    {
      title: "Fellow",
      company: "Keploy",
      period: "April'25 - June'25",
      description: "As a Keploy API Fellow, I would work on building, testing, and improving APIs while contributing to developer tooling that enhances reliability, usability, and adoption.",
      logo:"/logo/logo2.png"
    },
    {
      title: "Intern",
      company: "AICTE",
      period: "July'24 - September'24",  
      description: "Preprocessed and analyzed real-world datasets to support predictive analytics and pattern recognition & Implemented supervised and unsupervised learning models, neural networks, and deep learning techniques.",
      logo:"/logo/logo3.png"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology",
      institution: "KIIT University",
      period: "2022 - 2026",
      description: "Specializing in Computer Science with a focus on AI, Machine Learning, and Full-Stack Development.",
      logo: "/logo/logo4.png"
    },
    {
      degree: "Senior Secondary",
      institution: "Delhi Public School",
      period: "2018 - 2022",
      description: "Completed Senior Secondary education with a focus on Science (PCM with Computer Science).",
      logo: "/logo/logo5.png"
    }
  ];

  const featuredProjects = [
    {
      title: "Universal Learning Translator",
      description: "The Universal Learning Translator is an accessibility tool that transforms study material into simpler, translated, and narrated formats helping students of all backgrounds and abilities learn better.",
      tech: ["Argos", "CORS", "CSS3", "FastAPI", "HTML5", "JavaScript", "Middleware", "PDFPlumber", "Python", "Python-docx", "Python-pptx", "Pyttsx3", "Translate", "Uvicorn"],
      image: "/logo/logo8.png",
      github: "https://github.com/codebreaker3008/Virtu-Hack",
    },
    {
      title: "Code-Mentor",
      description: "AI Code Mentor gives real-time code analysis, feedback, bug detection, and improvement suggestions to help developers write cleaner, more efficient code.",
      tech: ["axios",
"express.js",
"mongodb-atlas",
"node.js",
"react.js","tailwind-css","vercel"],
      image: "/logo/logo6.png",
      github: "https://github.com/codebreaker3008/Code-Mentorgithub.com",
      live: "https://ai-mentor-snowy.vercel.app/",
    },
    {
      title: "MediScope AI",
      description: "MediScope AI is a full-stack Clinical Decision Support System that uses AI for patient triage, OCR and NLP to analyze medical reports, and provides structured dashboards for clinicians to monitor cases.",
      tech: ["CSS", "Docker", "EasyOCR", "Express.js", "FastAPI", "JavaScript", "Llama-cpp-python", "MongoDB", "Node.js", "Ollama", "Python", "React", "Tailwind", "Vite"],
      image: "/logo/logo7.png",
      github: "https://github.com/codebreaker3008/MediScope-AI",
    },
    {
      title: "DevOne",
      description: "Experience my portfolio like never before - a fully interactive operating system built in React. Boot up, explore apps, play games, and discover my projects in an immersive desktop environment.",
      tech: ["Creative", "Frontend", "GameDev", "Innovation", "Interactive", "JavaScript", "OperatingSystem", "Portfolio", "React", "TailwindCSS", "UserExperience", "WebDesign", "WebDevelopment"],
      image: "/logo/logo9.png",
      live: "https://dev-one-azure.vercel.app/",
        }
  ];

  const allProjects = [
    ...featuredProjects,
    {
      title: "Quantum Whisper",
      description: "QuantumCryptChat leverages BB84 quantum key distribution to provide ultra-secure, gibberish-encrypted messaging with seamless encryption and decryption.",
      tech: ["BB84-Protocol", "CSS", "Flask", "HTML", "JavaScript", "Quantum-Cryptography", "XOR-Encryption"],
      image: "/logo/logo10.png",
      github: "https://github.com/codebreaker3008/CQhack25",
    },
    {
      title: "FoodWise",
      description: "FoodWise - Scan smarter, eat better. Personalized food scanner that helps you make informed choices based on your dietary needs, allergies, and health goals.",
      tech: ["Axios", "Concurrently", "CSS3", "Dotenv", "Express.js", "GitHub", "HTML5-QR-Code", "JavaScript", "MongoDB", "Mongoose", "Node.js", "Nodemon", "Open-Food-Facts-API", "QuaggaJS", "React", "Vite"],
      image: "/logo/logo11.png",
      github: "https://github.com/codebreaker3008/FoodWise",
    },
    {
      title: "DiagnoSure",
      description: "AI-powered web app for fast, multi-disease diagnosis using X-rays, MRIs & symptoms. Get instant results, probable conditions, meds & prevention tips—accessible healthcare made simple.",
      tech: ["React", "CoinGecko API", "Chart.js"],
      image: "/logo/logo12.png",
      github: "https://github.com/codebreaker3008/DiagnosisSystem",
    }
  ];

  const techStack = [
    "Node.js", "TypeScript", "Python", "MongoDB", "PostgreSQL", 
    "AWS", "Docker", "Git", "TensorFlow"
  ];

  if (currentPage === 'projects') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
{/* Navbar */}
<nav className="fixed top-0 w-full bg-black/40 backdrop-blur-md shadow-lg shadow-gray-500/10 z-50"> <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center"> <button onClick={() => setCurrentPage('home')} className="text-2xl font-bold text-white hover:text-gray-300 transition-colors" > Bits & Thoughts </button> <button onClick={() => setCurrentPage('home')} className="text-gray-300 hover:text-white transition-colors font-medium" > ← Back to Home </button> </div> </nav>


        {/* All Projects */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-16 text-white">
              All Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects.map((project, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredProject(idx)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className={`group bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl shadow-gray-500/10 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-gray-500/20 hover:-translate-y-2 border border-gray-700/50 ${
                    hoveredProject === idx ? 'scale-105' : ''
                  }`}
                >
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-3 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-700/50 text-white rounded-full text-xs font-medium border border-gray-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-2 bg-gray-700/50 text-gray-300 rounded-lg text-xs font-medium hover:bg-gray-700 transition-all duration-300 border border-gray-600/50"
                      >
                        <Github className="w-3 h-3" />
                        Code
                      </a>
                      {project.live && (
  <a
    href={project.live}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-1 px-3 py-2 bg-gray-700/50 text-gray-300 rounded-lg text-xs font-medium hover:bg-gray-700 transition-all duration-300 border border-gray-600/50"
  >
    <ExternalLink className="w-3 h-3" />
    Live
  </a>
)}

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 bg-black/50 border-t border-gray-800/50">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-500">© 2025 Ayush Kumar</p>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-x-hidden">
<nav
  className={`fixed top-0 w-full z-50 transition-all duration-500 ${
    scrolled
      ? 'bg-black border-b border-gray-800'
      : 'bg-transparent'
  }`}
>

<div className="max-w-1xl mx-auto px-10 py-4 flex items-center">
  <div
    className="text-2xl font-bold text-white cursor-pointer"
    onClick={() => scrollToSection('home')}
  >
    Bits & Thoughts
  </div>
  <div className="flex items-center gap-12 ml-auto">
    <button
      onClick={() => scrollToSection('home')}
      className="text-gray-300 hover:text-white transition-colors font-medium"
    >
      Home
    </button>
    <button
      onClick={() => scrollToSection('projects')}
      className="text-gray-300 hover:text-white transition-colors font-medium"
    >
      Projects
    </button>
    <button
      onClick={() => scrollToSection('contact')}
      className="text-gray-300 hover:text-white transition-colors font-medium"
    >
      Contact
    </button>
  </div>
</div>
</nav>



      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl w-full text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-7xl font-bold text-white animate-slide-up">
              Ayush Kumar
            </h1>
            <p className="text-2xl text-gray-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Software & Full Stack Developer based in India.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a href="https://www.linkedin.com/in/ayushkumarx24/" target="_blank" rel="noopener noreferrer" 
               className="group bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl shadow-lg shadow-gray-500/10 hover:shadow-gray-500/30 transition-all duration-300 hover:-translate-y-1 border border-gray-700/50">
              <Linkedin className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://github.com/codebreaker3008" target="_blank" rel="noopener noreferrer"
               className="group bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl shadow-lg shadow-gray-500/10 hover:shadow-gray-500/30 transition-all duration-300 hover:-translate-y-1 border border-gray-700/50">
              <Github className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </a>
            <a href="mailto:alex@example.com"
               className="group bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl shadow-lg shadow-gray-500/10 hover:shadow-gray-500/30 transition-all duration-300 hover:-translate-y-1 border border-gray-700/50">
              <Mail className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="/Resume.pdf"
              download="Ayush's _Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-xl font-medium shadow-lg hover:shadow-gray-500/50 transition-all duration-300 hover:-translate-y-1 border border-gray-700/50"
            >
              <FileDown className="w-6 h-6" />
              Resume
            </a>
          </div>

          {/* Experience/Education Switcher */}
          <div className="mt-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl shadow-gray-500/10 p-8 max-w-3xl mx-auto border border-gray-700/50">
              <div className="flex gap-4 mb-8 bg-black/50 rounded-xl p-2">
                <button
                  onClick={() => setActiveTab('experience')}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === 'experience'
                      ? 'bg-white text-black shadow-lg shadow-gray-500/30 scale-105'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <Briefcase className="w-5 h-5" />
                  Experience
                </button>
                <button
                  onClick={() => setActiveTab('education')}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === 'education'
                      ? 'bg-white text-black shadow-lg shadow-gray-500/30 scale-105'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <GraduationCap className="w-5 h-5" />
                  Education
                </button>
              </div>

              <div className="space-y-6">
                {(activeTab === 'experience' ? experiences : education).map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 animate-slide-in"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <img 
                      src={item.logo} 
                      alt={item.company || item.institution}
                      className="w-12 h-12 rounded-lg object-cover bg-gray-700 flex-shrink-0"
                    />
                    <div className="flex-1 border-l-4 border-white pl-6 py-2 hover:border-gray-400 transition-all duration-300">
                      <h3 className="text-xl font-bold text-white">
                        {item.title || item.degree}
                      </h3>
                      <p className="text-gray-300 font-medium">
                        {item.company || item.institution}
                      </p>
                      <p className="text-sm text-gray-500 mb-2">{item.period}</p>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 px-6">
  <div className="max-w-3xl mx-auto">

          {/* Title + See More */}
          <div className="flex items-center justify-between mb-20">
            <h2 className="text-5xl font-bold text-white">Featured Projects</h2>
            <button
              onClick={() => setCurrentPage('projects')}
              className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors font-medium"
            >
              See More
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Grid with 2 projects per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, idx) => (
              <div
                key={idx}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl shadow-gray-500/10 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-gray-500/20 hover:-translate-y-2 border border-gray-700/50"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-700/50 text-white rounded-full text-sm font-medium border border-gray-600/50 transform transition-all duration-300 hover:bg-gray-600/50 hover:scale-110"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-700 transition-all duration-300 hover:-translate-y-0.5 border border-gray-600/50"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    {project.live && (
  <a
    href={project.live}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-1 px-3 py-2 bg-gray-700/50 text-gray-300 rounded-lg text-xs font-medium hover:bg-gray-700 transition-all duration-300 border border-gray-600/50"
  >
    <ExternalLink className="w-3 h-3" />
    Live
  </a>
)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* See More Button */}
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setCurrentPage('projects')}
              className="group flex items-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-semibold shadow-lg shadow-gray-500/30 hover:shadow-gray-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              See More Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-6 bg-gray">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-white">
            Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="text-2xl font-semibold text-white hover:text-gray-400 transition-all duration-300 hover:scale-110 cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 text-white">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a
            href="mailto:alex@example.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-semibold shadow-lg shadow-gray-500/30 hover:shadow-gray-500/50 transition-all duration-300 hover:-translate-y-1"
          >
            <Mail className="w-5 h-5" />
            Send Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black/50 border-t border-gray-800/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500">© 2025 Ayush Kumar.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animate-slide-in {
          animation: slide-in 0.6s ease-out;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
}
