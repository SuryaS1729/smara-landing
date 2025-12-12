export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "Save up to 50 words",
        "Basic AI paragraphs",
        "Daily reminders",
        "1 device"
      ],
      cta: "Get Started",
      highlighted: false
    },
    {
      name: "Pro",
      price: "$4.99",
      period: "/month",
      description: "For serious learners",
      features: [
        "Unlimited words",
        "Advanced AI paragraphs",
        "Smart spaced repetition",
        "Unlimited devices",
        "Export & backup",
        "Priority support"
      ],
      cta: "Start Free Trial",
      highlighted: true
    },
    {
      name: "Lifetime",
      price: "$49",
      period: "one-time",
      description: "Pay once, use forever",
      features: [
        "Everything in Pro",
        "Lifetime updates",
        "Early access to features",
        "Support indie development"
      ],
      cta: "Buy Now",
      highlighted: false
    }
  ]

  return (
    <section id="pricing" className="w-full bg-[#f8fafc] py-20 px-4 md:px-8 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-recoleta text-[#1a1a1a] mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-500 font-geist text-lg max-w-2xl mx-auto">
            Choose the plan that works best for your learning journey.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-2xl p-8 ${
                plan.highlighted 
                  ? 'bg-[#1a1a1a] text-white shadow-2xl scale-105' 
                  : 'bg-white shadow-md'
              }`}
            >
              <h3 className={`text-xl font-grandstander mb-2 ${
                plan.highlighted ? 'text-white' : 'text-[#1a1a1a]'
              }`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-4 ${
                plan.highlighted ? 'text-gray-300' : 'text-gray-500'
              } font-geist`}>
                {plan.description}
              </p>
              
              <div className="mb-6">
                <span className={`text-4xl font-recoleta ${
                  plan.highlighted ? 'text-white' : 'text-[#1a1a1a]'
                }`}>
                  {plan.price}
                </span>
                <span className={`text-sm ${
                  plan.highlighted ? 'text-gray-300' : 'text-gray-500'
                } font-geist`}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 font-geist text-sm">
                    <svg 
                      className={`w-5 h-5 ${plan.highlighted ? 'text-green-400' : 'text-green-500'}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.highlighted ? 'text-gray-200' : 'text-gray-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-full font-medium font-geist transition-all ${
                plan.highlighted
                  ? 'bg-white text-[#1a1a1a] hover:bg-gray-100'
                  : 'bg-[#1a1a1a] text-white hover:bg-gray-800'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
