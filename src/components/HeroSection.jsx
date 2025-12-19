import screenImage from '../assets/screen_image.png';
import screenImageBackground from '../assets/screen_image_cylindrical_bg.png';

export default function HeroSection() {
  return (
    <section 
      className="relative bg-white overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto px-8 lg:px-[165px]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 pt-12 pb-20 lg:pt-16 lg:pb-24">
          
          {/* Left Content - Text & Buttons */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1 mt-24 md:mt-28 lg:mt-0">
            <h1 
              id="hero-heading"
              className="text-[30px] leading-[40px] md:text-[40px] md:leading-[52px] lg:text-[48px] lg:leading-[52px] font-medium text-blue-950 mb-6 lg:mb-6"
            >
              A Simple Bookmark Manager
            </h1>
            
            <p className="text-[15px] leading-[25px] md:text-[16px] md:leading-[28px] lg:text-[18px] lg:leading-[28px] text-grey-600 mb-8 lg:mb-8 max-w-[540px] mx-auto lg:mx-0">
              A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                className="bg-blue-600 text-white text-[14px] font-medium px-6 py-4 rounded-[5px] shadow-lg hover:bg-white hover:text-blue-600 hover:ring-2 hover:ring-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                aria-label="Download Chrome extension"
              >
                Get it on Chrome
              </button>
              <button 
                className="bg-grey-50 text-blue-950 text-[14px] font-medium px-6 py-4 rounded-[5px] shadow-lg hover:bg-white hover:ring-2 hover:ring-grey-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-grey-600 focus:ring-offset-2"
                aria-label="Download Firefox extension"
              >
                Get it on Firefox
              </button>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
            <div className="relative mx-auto max-w-[550px] lg:max-w-none">
              {/* Browser Window Mockup */}
              <div className="relative z-10">
                <img 
                  src={screenImage} 
                  alt="Bookmark manager interface showing organized bookmarks"
                  className="w-full h-auto relative z-10"
                />
              </div>

              {/* Blue Decorative Shape - Positioned absolutely */}
              <img 
                src={screenImageBackground} 
                alt=""
                className="absolute -right-8 sm:-right-16 md:-right-28 lg:-right-32 -bottom-12 md:-bottom-16 lg:-bottom-20 w-[300px] h-[200px] sm:w-[400px] sm:h-[250px] md:w-[500px] md:h-[300px] lg:w-[600px] lg:h-[350px] -z-0"
                aria-hidden="true"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}