
import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, MapPin } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Phone number configuration
  const whatsappNumber = "923147378138";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Sizzling+Oven+Lahore";
  const logoUrl = "https://res.cloudinary.com/dacyy7rkn/image/upload/v1767390164/ChatGPT_Image_Jan_3_2026_02_28_36_AM_cfvrdl.png";

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/10 py-2' : 'bg-gradient-to-b from-black/80 to-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo - Properly aligned in header using flex, scaling with scroll */}
        <a href="#" className="flex items-center group z-50" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
             <img 
              src={logoUrl} 
              alt="Sizzling Oven" 
              className={`w-auto object-contain transition-all duration-300 drop-shadow-md hover:scale-105 ${
                isScrolled ? 'h-8 md:h-12' : 'h-12 md:h-16'
              }`}
            />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#menu" className="text-sm font-medium hover:text-brand-orange transition-colors tracking-wide uppercase">Menu</a>
          <a href="#favorites" className="text-sm font-medium hover:text-brand-orange transition-colors tracking-wide uppercase">Favorites</a>
          <a href="#contact" className="text-sm font-medium hover:text-brand-orange transition-colors tracking-wide uppercase">Contact</a>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
           {/* Location Button */}
           <a 
            href={googleMapsUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-zinc-900/80 hover:bg-zinc-800 text-white p-3 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-[0_0_15px_rgba(255,255,255,0.05)] border border-white/10 hover:border-brand-orange/50 flex items-center justify-center"
            title="Get Directions"
          >
            <MapPin size={20} className="text-brand-orange group-hover:scale-110 transition-transform duration-300" />
          </a>

          {/* WhatsApp Button */}
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-[#25D366] hover:bg-[#1ebc59] text-white font-heading font-bold uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 shadow-[0_0_15px_rgba(37,211,102,0.4)] hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] border border-[#25D366]/50"
          >
            <MessageCircle size={18} className="fill-white text-white" />
            <span className="text-sm mt-0.5">Order</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-800 p-6 flex flex-col space-y-4 shadow-2xl animate-fade-in max-h-[90vh] overflow-y-auto">
          <a href="#menu" className="text-xl font-heading font-bold uppercase hover:text-brand-orange" onClick={() => setIsMobileMenuOpen(false)}>Menu</a>
          <a href="#favorites" className="text-xl font-heading font-bold uppercase hover:text-brand-orange" onClick={() => setIsMobileMenuOpen(false)}>Favorites</a>
          <a href="#contact" className="text-xl font-heading font-bold uppercase hover:text-brand-orange" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          
          <div className="flex gap-3 mt-6 pt-6 border-t border-zinc-900">
             {/* Mobile Location Button */}
             <a 
              href={googleMapsUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-zinc-800 hover:bg-zinc-700 text-white p-4 rounded-lg flex items-center justify-center border border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
              title="Get Directions"
            >
              <MapPin size={24} className="text-brand-orange" />
            </a>

            {/* Mobile WhatsApp Button */}
            <a 
              href={whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 bg-[#25D366] hover:bg-[#1ebc59] text-white font-heading font-bold uppercase py-4 rounded-lg text-center flex justify-center items-center gap-2 shadow-[0_0_15px_rgba(37,211,102,0.3)] tracking-wider" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <MessageCircle size={24} className="fill-white text-white" />
              <span className="mt-0.5">WhatsApp Order</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
