import logo from '../assets/app-logo2.png'

export default function Header() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[900px]">
      <div className="bg-white/50 backdrop-blur-lg shadow-lg shadow-black/5 border border-gray-100 px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Smara Logo" 
              className="size-8 object-contain rotate-[-10deg]"
            />
            <span className="text-lg text-gray-600 font-grandstander hidden sm:block">
              smara
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <a 
              href="#features" 
              onClick={(e) => scrollToSection(e, 'features')}
              className="text-gray-500 hover:text-gray-900 transition-colors font-geist text-sm"
            >
              Features
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => scrollToSection(e, 'pricing')}
              className="text-gray-500 hover:text-gray-900 transition-colors font-geist text-sm"
            >
              Pricing
            </a>
          </nav>

          {/* CTA Button */}
          <a 
            href="#download" 
            onClick={(e) => scrollToSection(e, 'download')}
            className="bg-[#1a1a1a] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors font-geist"
          >
            Download
          </a>
        </div>
      </div>
    </header>
  )
}
