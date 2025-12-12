import logo from '../assets/app-logo2.png'

export default function Footer() {
  return (
    <footer className="w-full bg-[#1a1a1a] text-white py-12 px-4 md:px-8 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="Smara Logo" 
                className="size-10 object-contain rotate-[-10deg]"
              />
              <span className="text-xl font-grandstander text-white">
                smara
              </span>
            </div>
            <p className="text-gray-400 font-geist text-sm max-w-xs leading-relaxed">
              Your little memory companion. Save, revisit, and truly remember the words and phrases you discover.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-grandstander text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors font-geist text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors font-geist text-sm">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#download" className="text-gray-400 hover:text-white transition-colors font-geist text-sm">
                  Download
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-grandstander text-white mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://x.com/SuryaS_1729" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors font-geist text-sm flex items-center gap-2"
                >
                  Twitter / X
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="mailto:hello@smara.app" className="text-gray-400 hover:text-white transition-colors font-geist text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 font-geist text-sm">
            © {new Date().getFullYear()} smara. Made with ❤️ for word lovers.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors font-geist text-sm">
              Privacy
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors font-geist text-sm">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
