
import React, { useState } from 'react';
import { ChevronRight, ArrowUpRight, Phone, MessageCircle, X } from 'lucide-react';
import Particles from './Particles';

const MARQUEE_ITEMS = [
  "ORDER YOUR BURGER",
  "CHOOSE FAVORITE DISHES",
  "DISCOVER FULL MENU",
  "ORDER YOUR BURGER",
  "CHOOSE FAVORITE DISHES",
  "DISCOVER FULL MENU"
];

const Hero: React.FC = () => {
  // High-resolution version of the Signature Beef Burger
  const heroImage = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2400&auto=format&fit=crop";
  
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  // Phone number configuration
  const phoneNumber = "+923147378138";
  const whatsappNumber = "923147378138";

  return (
    <>
      <div className="relative w-full h-[85vh] md:h-screen flex flex-col overflow-hidden bg-black">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Darker gradient layers for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.2)_0%,_#000000_90%)] z-10"></div>
          
          <img 
            src={heroImage} 
            alt="Signature Sizzling Beef Burger" 
            className="w-full h-full object-cover object-center opacity-80"
          />
          {/* Grain Overlay */}
          <div className="absolute inset-0 z-10 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>

        {/* Particles Layer - Positioned between Background and Text */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <Particles
            particleColors={['#ea580c', '#ea580c']}
            particleCount={700}
            particleSpread={10}
            speed={1}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={true}
            pixelRatio={1} 
          />
        </div>

        {/* Content - Increased top margin to account for taller header */}
        <div className="relative z-20 flex-grow flex flex-col justify-center items-center text-center px-4 max-w-6xl mx-auto mt-16 md:mt-20">
          <h2 className="text-brand-orange font-heading font-bold tracking-[0.25em] uppercase mb-3 md:mb-4 text-xs md:text-base animate-fade-in drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Flame Grilled • Oven Fresh • Fast & Fearless
          </h2>
          
          {/* Main Title with Intense Shadow */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-white uppercase tracking-tighter mb-8 md:mb-12 leading-none drop-shadow-[0_10px_10px_rgba(0,0,0,0.9)] animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Sizzling Oven
          </h1>
          
          <div className="flex flex-col md:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <button 
              onClick={() => setIsOrderModalOpen(true)}
              className="bg-brand-orange hover:bg-orange-600 text-white font-heading font-bold uppercase px-6 py-3 md:px-8 md:py-4 text-base md:text-lg rounded-sm transition-all transform hover:-translate-y-1 shadow-[0_0_30px_rgba(234,88,12,0.6)] border border-brand-orange pointer-events-auto cursor-pointer"
            >
              Order Now
            </button>
            <a href="#menu" className="border border-white/50 hover:border-white hover:bg-white/10 text-white font-heading font-bold uppercase px-6 py-3 md:px-8 md:py-4 text-base md:text-lg rounded-sm transition-all flex items-center justify-center gap-2 group backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.5)] pointer-events-auto">
              View Menu
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Marquee Strip - Updated Layout */}
        <div className="relative z-20 bg-brand-orange py-4 overflow-hidden border-t border-white/10">
          <div className="whitespace-nowrap flex animate-marquee items-center">
              {/* Render two sets of the items to ensure seamless loop with translateX(-50%) */}
              {[0, 1].map((setIndex) => (
                  <div key={setIndex} className="flex items-center">
                      {MARQUEE_ITEMS.map((item, index) => (
                          <div key={`${setIndex}-${index}`} className="flex items-center">
                              <span className="text-white font-heading font-bold uppercase text-2xl md:text-3xl lg:text-4xl tracking-tight px-6 drop-shadow-sm">
                                  {item}
                              </span>
                              <ArrowUpRight className="text-white w-8 h-8 md:w-10 md:h-10 mx-2" strokeWidth={2.5} />
                          </div>
                      ))}
                  </div>
              ))}
          </div>
        </div>
      </div>

      {/* Order Modal */}
      {isOrderModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setIsOrderModalOpen(false)}
          ></div>
          <div className="relative bg-zinc-950 border border-zinc-800 rounded-xl w-full max-w-sm p-8 shadow-[0_0_50px_rgba(0,0,0,0.8)] animate-fade-in transform transition-all scale-100">
            <button 
              onClick={() => setIsOrderModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors bg-zinc-900 rounded-full p-1"
            >
              <X size={20} />
            </button>
            
            <h3 className="text-2xl font-heading font-bold text-white uppercase text-center mb-2">
              Ready to Order?
            </h3>
            <p className="text-center text-gray-400 text-sm mb-8">
              Select your preferred method below
            </p>
            
            <div className="flex flex-col gap-4">
              <a 
                href={`tel:${phoneNumber}`}
                className="flex items-center justify-center gap-4 bg-white hover:bg-gray-100 text-black font-heading font-bold uppercase py-4 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg group"
              >
                <div className="bg-zinc-200 p-2 rounded-full group-hover:bg-white transition-colors">
                  <Phone size={20} className="text-black" />
                </div>
                <span>Call Now</span>
              </a>
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-heading font-bold uppercase py-4 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg shadow-green-900/20 group"
              >
                 <div className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition-colors">
                  <MessageCircle size={20} fill="white" />
                </div>
                <span>WhatsApp Now</span>
              </a>
            </div>
            
            <div className="mt-8 pt-6 border-t border-zinc-900 text-center">
              <p className="text-brand-orange font-bold text-sm tracking-wide">
                +92 314 7378138
              </p>
              <p className="text-gray-600 text-xs mt-1">
                Open 4 PM – 4 AM • Lahore
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
