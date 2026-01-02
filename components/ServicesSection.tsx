
import React from 'react';
import { Utensils, ShoppingBag, Truck } from 'lucide-react';

const ServicesSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(234,88,12,0.08)_0%,_transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-3 gap-2 md:gap-8">
          <ServiceCard 
            icon={<Utensils className="w-4 h-4 md:w-9 md:h-9" />} 
            title="Dine-In" 
            mobileDesc="Cinematic"
            description="Experience our cinematic atmosphere" 
          />
          <ServiceCard 
            icon={<ShoppingBag className="w-4 h-4 md:w-9 md:h-9" />} 
            title="Takeout" 
            mobileDesc="Hot & Fresh"
            description="Hot & fresh, ready when you are" 
          />
          <ServiceCard 
            icon={<Truck className="w-4 h-4 md:w-9 md:h-9" />} 
            title="Delivery" 
            mobileDesc="Late Night"
            description="Late night cravings delivered to your door" 
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard: React.FC<{ icon: React.ReactNode, title: string, description: string, mobileDesc: string }> = ({ icon, title, description, mobileDesc }) => (
  <div className="relative flex flex-col items-center text-center p-2 md:p-8 bg-zinc-900 border border-brand-orange/50 md:border-2 md:border-brand-orange rounded-lg md:rounded-xl shadow-[0_0_15px_rgba(234,88,12,0.15)] md:shadow-[0_0_15px_rgba(234,88,12,0.25)] hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] md:hover:shadow-[0_0_40px_rgba(234,88,12,0.6)] transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2 group h-full justify-start md:justify-center">
    
    {/* Icon Container - Always Orange & Glowing */}
    <div className="mb-2 md:mb-6 text-white bg-brand-orange p-2 md:p-5 rounded-full shadow-[0_0_15px_rgba(234,88,12,0.5)] md:shadow-[0_0_25px_rgba(234,88,12,0.7)] group-hover:scale-110 group-hover:shadow-[0_0_35px_rgba(234,88,12,1)] transition-all duration-300">
      {icon}
    </div>
    
    <h3 className="text-[10px] md:text-2xl font-heading font-bold text-white uppercase mb-1 md:mb-3 tracking-wider group-hover:text-brand-orange transition-colors">
      {title}
    </h3>
    
    {/* Desktop Description */}
    <p className="text-gray-300 font-medium text-sm leading-relaxed hidden md:block">
      {description}
    </p>
    
    {/* Mobile Description (Shortened) */}
    <p className="text-gray-400 font-medium text-[9px] leading-tight md:hidden">
      {mobileDesc}
    </p>
  </div>
);

export default ServicesSection;
