const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <p className="text-xl text-gray-300 leading-relaxed">
              I'm a third-year undergraduate student pursuing a BSc in Software Engineering at the University of Dhaka. 
              Passionate about technology and problem-solving, I'm actively building my skills in both software development 
              and competitive programming.
            </p>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              I'm proficient in C++, Java and Python, and currently working with Java Spring Boot and FastAPI for backend 
              development. I'm also diving into Artificial Intelligence, focusing on areas like machine learning, neural 
              networks, and natural language processing for future AI-driven projects.
            </p>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              As a competitive programmer, I'm a Pupil on Codeforces and a 3★ coder on CodeChef. Outside the tech space, 
              I enjoy photography and love watching movies in my free time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
