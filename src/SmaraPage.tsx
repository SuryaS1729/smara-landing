


type Props = {}

export default function SmaraPage({}: Props) {
  return (
 <div className="min-h-screen w-full bg-white flex items-center justify-center px-6 md:px-8 lg:px-20 py-20 overflow-hidden">
      <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-start lg:items-start gap-8 z-10 p-6 mt-10 lg:mt-0 lg:p-0  ">
          {/* Logo Section */}
          <div className="flex items-center gap-4 ">
            <img 
              src="/app-logo2.webp"
              alt="Smara Logo" 
              className="size-16 object-contain rotate-[-10deg]" // Adjusted size based on visual
            />
            <span className="text-2xl text-gray-600 font-grandstander">
              smara
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl lg:text-5xl text-[#1a1a1a] leading-tight font-recoleta lg:text-start">
            Your little memory<br />
            companion.
          </h1>

          {/* Highlight Section */}
          <div className="space-y-4">
            <p className="text-xl lg:text-2xl  lg:text-start text-[#1a1a1a] leading-snug font-geist font-light">
              <span className="bg-[#FF6600]/5 text-gray-900 underline underline-offset-5 decoration-wavy decoration-[orange] py-2 rounded-lg font-grandstander font-light ">smara</span> helps you save, revisit, and truly remember the words and phrases you discover.
            </p>
            
            <p className="text-lg md:text-xl text-gray-500 mt-6 font-cooper">
              A simple place to save words.... and never forget them.
            </p>
          </div>

          {/* Store Buttons */}
          <div className="flex flex-row gap-4 mt-4">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img 
                src="/appstore.svg" 
                alt="Download on the App Store" 
                className="h-12"
              />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img 
                src="/playstore.svg" 
                alt="Get it on Google Play" 
                className="h-12"
              />
            </a>
          </div>
           <a href="https://x.com/SuryaS_1729" target="_blank" rel="noopener noreferrer" className="text-gray-400 font-medium hover:text-gray-600 transition-colors flex items-center gap-2 text-sm justify-center md:justify-start  mt-3">
                        <span>Follow @SuryaS_1729
 for updates</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                    </a>
        </div>

        {/* Right Content - Phone Mockup */}
        <div className="relative flex justify-center  ">
             {/* Decorative blob or gradient could go here if needed behind the phone */}
             
            <img 
              src="/ss2.webp"
              height={1000}
              width={350}
              alt="Smara App Screenshot" 
                fetchPriority="high"


              // Added rounded corners to match modern phone screens if the image itself doesn't have them perfect
            />
        </div>
      </div>
    </div>  )
}