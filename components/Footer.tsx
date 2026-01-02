
import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  const logoUrl = "https://res.cloudinary.com/dacyy7rkn/image/upload/v1767390164/ChatGPT_Image_Jan_3_2026_02_28_36_AM_cfvrdl.png";

  return (
    <footer className="bg-black py-12 border-t border-zinc-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6">
        
        {/* Branding */}
        <div className="text-center md:text-left">
          <div className="mb-6 flex justify-center md:justify-start">
             <img 
              src={logoUrl} 
              alt="Sizzling Oven" 
              className="h-32 md:h-48 w-auto object-contain drop-shadow-[0_0_15px_rgba(234,88,12,0.2)]"
            />
          </div>
          <p className="text-gray-500 text-sm max-w-md">
            Late-night flavors, oven-fresh meals, and sizzling satisfaction.
          </p>
        </div>

        {/* Socials */}
        <div className="flex gap-4">
            <a href={CONTACT_INFO.instagram} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <Instagram size={24} />
            </a>
            <a href={CONTACT_INFO.facebook} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                 {/* Tiktok icon placeholder if needed */}
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
            </a>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-10 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
        <p>&copy; {new Date().getFullYear()} Sizzling Oven Lahore. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-gray-400">Legal Notice</a>
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
