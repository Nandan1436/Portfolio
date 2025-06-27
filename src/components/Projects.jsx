const Projects = () => {
  const projects = [
    {
      title: "House Rental App",
      description: "A MERN rental platform with a Python-based rent predictor using location and size features. Built secure APIs and a dynamic React frontend.",
      tech: ["MongoDB", "Express", "ReactJS", "NodeJS", "Python", "Flask"],
      time: "Nov 2024 – Mar 2025",
      github: "https://github.com/shakib1404/SPL2-reantalapp",
      isCollab: true,
      icon: "🏠"
    },
    {
      title: "DUTutors",
      description: "Developed a platform for tutors and students to get tuition jobs and get connected through chatting and sharing relevant documents with each other.",
      tech: ["ReactJS", "NodeJS", "MongoDB", "SonarQube", "CI/CD", "Google Auth", "Cloudinary"],
      time: "Nov 2024 - April 2025",
      github: "https://github.com/Learnathon-By-Geeky-Solutions/react-ive",
      isCollab: true,
      icon: "🎓"
    },
    {
      title: "Smart Library System",
      description: "A FastAPI backend for library management with features for user, book, and loan tracking. Designed RESTful APIs with MySQL integration.",
      tech: ["FastAPI", "Python", "MySQL"],
      time: "May 2025",
      github: "https://github.com/Nandan1436/Smart-Library-System",
      isCollab: false,
      icon: "📚"
    },
    {
      title: "MiniChessAI",
      description: "A chess game variation of 6x5 sized board implementing Minimax algorithm and Alpha-Beta Pruning for the AI to play reasonably well against a human or AI.",
      tech: ["NextJS", "Python", "FastAPI"],
      time: "May 2025",
      github: "https://github.com/Nandan1436/MiniChessAI",
      isCollab: false,
      icon: "♟️"
    },
    {
      title: "Biggan Pathshala",
      description: "A platform for science enthusiasts to share blogs, tutorials, and Q&A, with AI-generated blog summaries. Collaborated on backend APIs and responsive React frontend.",
      tech: ["React", "Firebase"],
      time: "May 2025",
      github: "https://github.com/Nandan1436/BigganPathshala",
      isCollab: false,
      icon: "🔬"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent leading-tight pb-2">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full mb-6"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-200">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-200">
                        {project.title}
                      </h3>
                      <span className="text-xs text-purple-400 bg-purple-500/20 px-2 py-1 rounded border border-purple-500/30 mt-2 sm:mt-0 self-start">
                        {project.time}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-700/50 text-blue-300 text-sm rounded-full border border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center space-x-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200 text-gray-300 hover:text-white"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        View Code
                      </a>
                      {project.isCollab && (
                        <div className="relative info-icon-container">
                          <svg className="w-5 h-5 text-blue-400 peer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 peer-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap border border-gray-700 z-10 pointer-events-none">
                            Repository owned by collaborator
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
