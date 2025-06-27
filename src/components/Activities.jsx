const Activities = () => {
  const codingPlatforms = [
    {
      name: "Codeforces",
      username: "Nandan1436",
      rating: "1355",
      rank: "Pupil",
      color: "text-green-400",
      url: "https://codeforces.com/profile/Nandan1436"
    },
    {
      name: "CodeChef",
      username: "nandan1436",
      rating: "1647",
      rank: "3★",
      color: "text-orange-400",
      url: "https://codechef.com/users/nandan1436"
    },
    {
      name: "LeetCode",
      username: "Nandan1436",
      rating: "1667",
      rank: "Max Rating",
      color: "text-yellow-400",
      url: "https://leetcode.com/u/Nandan1436"
    }
  ]

  const roles = [
    {
      title: "Judge - Bangladesh Artificial Intelligence Olympiad 2025",
      description: "Competitive Programming segment",
      icon: "⚖️",
      year: "2025"
    },
    {
      title: "Problem Setter - BSMRU CSE Fest 2024",
      description: "Competitive Programming segment",
      icon: "📝",
      year: "2024"
    },
    {
      title: "Problem Setter - National High School Programming Contest",
      description: "Programming contest for high school students",
      icon: "🎯",
      year: "2025"
    },
    {
      title: "Competitive Programming Trainer - IITSEC",
      description: "Mentoring first-year students in problem-solving and critical thinking",
      icon: "👨‍🏫",
      year: "Ongoing"
    },
    {
      title: "Section Leader - Stanford's Code in Place",
      description: "Conducting weekly sessions for global students in beginner Python course",
      icon: "🌍",
      year: "2025"
    }
  ]

  return (
    <section id="activities" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
            Co-curricular Activities
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-cyan-500 mx-auto rounded-full mb-6"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Competitive Programming Profiles */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-white">
              Competitive Programming Profiles
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {codingPlatforms.map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-200">
                      {platform.name}
                    </h4>
                    <p className="text-gray-400 mb-2">@{platform.username}</p>
                    <div className={`${platform.color} font-semibold text-lg mb-1`}>
                      Max Rating: {platform.rating}
                    </div>
                    <div className={`${platform.color} text-sm`}>
                      {platform.rank}
                    </div>
                    <div className="mt-4 text-gray-500 group-hover:text-gray-400 transition-colors duration-200">
                      <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Leadership Roles */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-8 text-white">
              Leadership & Teaching Roles
            </h3>
            <div className="grid lg:grid-cols-2 gap-6">
              {roles.map((role, index) => (
                <div
                  key={index}
                  className="group bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-200">
                      {role.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">
                          {role.title}
                        </h4>
                        <span className="text-sm text-cyan-400 bg-cyan-500/20 px-2 py-1 rounded border border-cyan-500/30">
                          {role.year}
                        </span>
                      </div>
                      <p className="text-gray-400 leading-relaxed">
                        {role.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Activities
