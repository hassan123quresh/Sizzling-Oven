
import React from 'react';
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const LocationSection: React.FC = () => {
  return (
    <section id="contact" className="bg-black relative pt-24 pb-0 scroll-mt-24">
      <div className="container mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <h3 className="text-brand-orange font-heading font-bold uppercase tracking-widest mb-2">Find Us</h3>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase">
            Contact & <span className="text-brand-orange">Location</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-zinc-800 rounded-xl overflow-hidden bg-zinc-950">
          
          {/* Left: Info */}
          <div className="p-10 md:p-16 flex flex-col justify-center space-y-10">
            {/* Address */}
            <div className="flex gap-6 items-start group">
              <div className="bg-zinc-900 p-3 rounded-lg text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                <MapPin size={28} />
              </div>
              <div>
                <h4 className="text-white font-heading font-bold uppercase text-lg mb-2">Address</h4>
                <p className="text-gray-400 leading-relaxed max-w-xs">{CONTACT_INFO.address}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-6 items-start group">
              <div className="bg-zinc-900 p-3 rounded-lg text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                <Phone size={28} />
              </div>
              <div>
                <h4 className="text-white font-heading font-bold uppercase text-lg mb-2">Phone / WhatsApp</h4>
                <p className="text-gray-400 font-mono text-lg">{CONTACT_INFO.phone}</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-6 items-start group">
              <div className="bg-zinc-900 p-3 rounded-lg text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                <Clock size={28} />
              </div>
              <div>
                <h4 className="text-white font-heading font-bold uppercase text-lg mb-2">Opening Hours</h4>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <p className="text-white font-bold">Open Today</p>
                </div>
                <p className="text-brand-orange text-xl font-heading font-bold mt-1">4:00 PM – 4:00 AM</p>
              </div>
            </div>
            
            <div className="h-px bg-zinc-800 w-full my-4"></div>

            {/* Socials & Quote */}
             <div>
               <p className="italic text-gray-500 mb-6 font-serif">"Experience the sizzle in person or bring the heat home. From late-night cravings to family feasts, we're serving bold flavors until 4 AM."</p>
               <div className="flex gap-4">
                 <a href={CONTACT_INFO.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center border border-zinc-700 rounded-full hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all text-gray-400">
                    <Instagram size={20} />
                 </a>
                 <a href={CONTACT_INFO.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center border border-zinc-700 rounded-full hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all text-gray-400">
                    <Facebook size={20} />
                 </a>
               </div>
             </div>
          </div>

          {/* Right: Map */}
          <div className="h-[500px] lg:h-auto bg-zinc-900 relative">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4232.189669429093!2d74.30772731180993!3d31.456026850209607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ff002a29b7ff%3A0x61989de58acbcac!2sSizzling%20Oven!5e1!3m2!1sen!2s!4v1767377483808!5m2!1sen!2s"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Sizzling Oven Map"
                className="absolute inset-0 w-full h-full"
            ></iframe>
            {/* Map Overlay to darken slightly - kept for consistency but grayscale is removed */}
            <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationSection;
