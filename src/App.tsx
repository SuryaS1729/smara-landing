
import logo from './assets/app-logo.png'
import phoneMockup from './assets/screenshot-image.png'

function App() {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-4 md:p-8 lg:p-20 overflow-hidden">
      <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-start gap-8 z-10">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <img 
              src={logo} 
              alt="Smara Logo" 
              className="w-16 h-16 object-contain" // Adjusted size based on visual
            />
            <span className="text-3xl text-gray-800 font-display" >
              smara
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl text-[#1a1a1a] leading-tight" style={{ fontFamily: "'Fraunces', serif" }}>
            Your little memory<br />
            companion.
          </h1>

          {/* Highlight Section */}
          <div className="space-y-4">
            <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
              <span className="bg-[#FFE4C4] px-2 py-1 rounded-lg" style={{ fontFamily: "'Fraunces', serif" }}>Smara</span> helps you save, revisit, and truly remember the words you discover.
            </p>
            
            <p className="text-lg md:text-xl text-gray-500 mt-6" style={{ fontFamily: "'Nunito', sans-serif" }}>
              A simple place to save words.... and never forget them.
            </p>
          </div>

          {/* Store Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                alt="Download on the App Store" 
                className="h-12"
              />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Get it on Google Play" 
                className="h-12"
              />
            </a>
          </div>
        </div>

        {/* Right Content - Phone Mockup */}
        <div className="relative flex justify-center lg:justify-end">
             {/* Decorative blob or gradient could go here if needed behind the phone */}
             
            <img 
              src={phoneMockup} 
              alt="Smara App Screenshot" 
              className="w-full max-w-[320px] md:max-w-[380px] drop-shadow-2xl rounded-[3rem]"
              // Added rounded corners to match modern phone screens if the image itself doesn't have them perfect
            />
        </div>
      </div>
    </div>
  )
}

export default App