export default function FeaturesList() {
  const features = [
    {
      icon: "📝",
      title: "Save Words Instantly",
      description: "Quickly save new words and phrases you encounter while reading, listening, or conversing."
    },
    {
      icon: "🧠",
      title: "AI-Powered Recall",
      description: "Our AI generates personalized paragraphs using your saved words to help cement them in memory."
    },
    {
      icon: "🔄",
      title: "Spaced Repetition",
      description: "Smart reminders bring words back at optimal intervals for long-term retention."
    },
    {
      icon: "📚",
      title: "Build Your Vocabulary",
      description: "Track your progress and watch your personal dictionary grow over time."
    }
  ]

  return (
    <section id="features" className="w-full bg-white py-20 px-4 md:px-8 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-recoleta text-[#1a1a1a] mb-4">
            Why you'll love smara
          </h2>
          <p className="text-gray-500 font-geist text-lg max-w-2xl mx-auto">
            Simple tools designed to help you remember every word that matters.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-[#f8fafc] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-grandstander text-[#1a1a1a] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 font-geist text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
