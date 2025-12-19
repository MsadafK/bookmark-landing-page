import { useState, useEffect } from 'react';
import { Menu, X, Bookmark } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen, isMobile]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop & Tablet Navbar */}
      <nav 
        className="bg-white relative z-50"
        role="navigation"
        aria-label="Main navigation"
        onKeyDown={handleKeyDown}
      >
        <div className="container mx-auto px-8 md:px-10 lg:px-[165px]">
          <div className="flex items-center justify-between h-[72px] md:h-20 lg:h-[100px]">
            {/* Logo */}
            <a 
              href="/" 
              className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded"
              aria-label="Bookmark Home"
            >
              <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Bookmark className="w-3 h-3 md:w-4 md:h-4 text-white fill-white" aria-hidden="true" />
              </div>
              <span className="text-[20px] md:text-[24px] lg:text-[28px] font-medium text-blue-950 tracking-tight">
                BOOKMARK
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8 lg:gap-12">
              <a 
                href="#features" 
                className="text-[13px] tracking-[1.5px] font-normal text-blue-950 hover:text-red-400 transition-colors duration-200 focus:outline-none focus:text-red-400"
                aria-label="Go to Features section"
              >
                FEATURES
              </a>
              <a 
                href="#pricing" 
                className="text-[13px] tracking-[1.5px] font-normal text-blue-950 hover:text-red-400 transition-colors duration-200 focus:outline-none focus:text-red-400"
                aria-label="Go to Pricing section"
              >
                PRICING
              </a>
              <a 
                href="#contact" 
                className="text-[13px] tracking-[1.5px] font-normal text-blue-950 hover:text-red-400 transition-colors duration-200 focus:outline-none focus:text-red-400"
                aria-label="Go to Contact section"
              >
                CONTACT
              </a>
              <button 
                className="bg-red-400 text-white text-[13px] tracking-[1.5px] font-medium px-8 py-3 rounded-[5px] shadow-lg hover:bg-white hover:text-red-400 hover:border-2 hover:border-red-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                aria-label="Login to your account"
              >
                LOGIN
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-blue-950 p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop with blur */}
          <div 
            className="fixed inset-0 bg-blue-950/95 backdrop-blur-sm z-40 lg:hidden"
            onClick={toggleMenu}
            aria-hidden="true"
          />
          
          {/* Mobile Menu */}
          <div 
            id="mobile-menu"
            className="fixed inset-0 z-50 lg:hidden bg-blue-950/95 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="bg-blue-950 px-8">
                <div className="flex items-center justify-between h-[72px]">
                  <a 
                    href="/" 
                    className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white rounded"
                    onClick={toggleMenu}
                    aria-label="Bookmark Home"
                  >
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <Bookmark className="w-3 h-3 text-blue-600 fill-blue-600" aria-hidden="true" />
                    </div>
                    <span className="text-[20px] font-medium text-white tracking-tight">
                      BOOKMARK
                    </span>
                  </a>

                  <button
                    onClick={toggleMenu}
                    className="text-white p-2 focus:outline-none focus:ring-2 focus:ring-white rounded"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Mobile Menu Links */}
              <div className="flex-1 flex flex-col items-center justify-center px-8 space-y-0">
                <a 
                  href="#features" 
                  onClick={toggleMenu}
                  className="w-full text-center py-5 text-white text-[15px] tracking-[1.5px] font-normal border-t border-grey-600/20 hover:text-red-400 transition-colors duration-200 focus:outline-none focus:text-red-400 focus:ring-2 focus:ring-white focus:ring-inset"
                >
                  FEATURES
                </a>
                <a 
                  href="#pricing" 
                  onClick={toggleMenu}
                  className="w-full text-center py-5 text-white text-[15px] tracking-[1.5px] font-normal border-t border-grey-600/20 hover:text-red-400 transition-colors duration-200 focus:outline-none focus:text-red-400 focus:ring-2 focus:ring-white focus:ring-inset"
                >
                  PRICING
                </a>
                <a 
                  href="#contact" 
                  onClick={toggleMenu}
                  className="w-full text-center py-5 text-white text-[15px] tracking-[1.5px] font-normal border-t border-grey-600/20 hover:text-red-400 transition-colors duration-200 focus:outline-none focus:text-red-400 focus:ring-2 focus:ring-white focus:ring-inset"
                >
                  CONTACT
                </a>
                <div className="w-full pt-8">
                  <button 
                    onClick={toggleMenu}
                    className="w-full bg-transparent border-2 border-white text-white text-[15px] tracking-[1.5px] font-medium py-3 rounded-[5px] hover:bg-white hover:text-blue-950 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-950"
                    aria-label="Login to your account"
                  >
                    LOGIN
                  </button>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center gap-10 pb-12">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-red-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white rounded"
                  aria-label="Visit our Facebook page"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-red-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white rounded"
                  aria-label="Visit our Twitter page"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}