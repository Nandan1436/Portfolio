const Achievements = () => {
  const achievements = [
    {
      title: "SN Bose Science Festival IT Hackathon 2025",
      description: "Selected among the top 14 teams out of 50",
      icon: "🏆",
      color: "text-yellow-400"
    },
    {
      title: "Learnathon 3.0 by Geeky Solutions",
      description: "Participated in the coding competition",
      icon: "💻",
      color: "text-blue-400"
    },
    {
      title: "DUET IUPC 2025",
      description: "Secured 66th position out of 138 teams",
      icon: "🥉",
      color: "text-orange-400"
    }
  ]

  return (
    <section id="achievements" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-center">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-200">
                    {achievement.icon}
                  </div>
                  <h3 className={`text-lg font-bold mb-3 ${achievement.color} group-hover:scale-105 transition-transform duration-200`}>
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
