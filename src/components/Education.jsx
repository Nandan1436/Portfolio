const Education = () => {
  const education = [
    {
      degree: "BSc. in Software Engineering",
      institution: "Institute of Information Technology, University of Dhaka",
      period: "Sept 2022 - Present",
      result: "CGPA 3.56/4.00 (till fifth semester)",
      icon: "🎓"
    },
    {
      degree: "Advanced Level (A Level) in Science",
      institution: "Academia School",
      period: "2019-2021",
      result: "2 A*, 2 A",
      icon: "📚"
    },
    {
      degree: "Ordinary Level (O Level) in Science",
      institution: "Academia School",
      period: "2018-2019",
      result: "9 A*, 1 A",
      icon: "📖"
    }
  ]

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-200">
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-200">
                        {edu.degree}
                      </h3>
                      <span className="text-sm text-green-400 bg-green-500/20 px-3 py-1 rounded-full border border-green-500/30 mt-2 md:mt-0">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-2 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-gray-400">
                      <span className="font-semibold">Result:</span> {edu.result}
                    </p>
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

export default Education
