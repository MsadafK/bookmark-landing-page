import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        {/* Desktop Navbar */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">B</span>
            </div>
            <span className="text-xl font-medium text-blue-950">BOOKMARK</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-blue-950 hover:text-red-400 transition-colors">
              FEATURES
            </a>
            <a href="#pricing" className="text-blue-950 hover:text-red-400 transition-colors">
              PRICING
            </a>
            <a href="#contact" className="text-blue-950 hover:text-red-400 transition-colors">
              CONTACT
            </a>
            <button className="bg-red-400 text-white px-6 py-2 rounded hover:bg-red-400/90 transition-all">
              LOGIN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-blue-950"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-blue-950 absolute left-0 right-0 top-[72px] py-8 px-4 space-y-4">
            <a href="#features" className="block text-white text-center py-3 border-t border-grey-600">
              FEATURES
            </a>
            <a href="#pricing" className="block text-white text-center py-3 border-t border-grey-600">
              PRICING
            </a>
            <a href="#contact" className="block text-white text-center py-3 border-t border-grey-600">
              CONTACT
            </a>
            <button className="w-full border-2 border-white text-white py-3 rounded mt-4">
              LOGIN
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}