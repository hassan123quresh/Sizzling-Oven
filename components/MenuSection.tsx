
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { CATEGORIES, MENU_ITEMS } from '../constants';
import { Category } from '../types';

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-black relative scroll-mt-24">
       {/* Subtle background grid pattern */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-brand-orange font-heading font-bold uppercase tracking-widest mb-2">Flame Grilled & Sizzling Hot</h3>
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-white uppercase">Our <span className="text-brand-orange">Menu</span></h2>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-heading font-bold uppercase text-sm tracking-wide transition-all border ${
                activeCategory === category 
                  ? 'bg-brand-orange border-brand-orange text-white shadow-[0_0_15px_rgba(234,88,12,0.4)]' 
                  : 'bg-zinc-900 border-zinc-800 text-gray-400 hover:border-zinc-600 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Section Title based on Category */}
        <div className="mb-8 flex items-center gap-3">
          <span className="h-[2px] w-8 bg-brand-orange inline-block"></span>
          <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-wider">
            {activeCategory === 'All' ? 'All Items' : activeCategory}
          </h3>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-x-8 gap-y-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row bg-zinc-900/50 hover:bg-zinc-900 border-2 border-brand-orange transition-all rounded-lg overflow-hidden group">
              <div className="w-full sm:w-48 h-48 sm:h-auto overflow-hidden relative flex-shrink-0">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-heading font-bold text-white uppercase">{item.name}</h4>
                  {/* If no variations, show single price here, otherwise show nothing or 'From' price */}
                  {!item.variations && (
                     <span className="text-brand-orange font-bold text-lg whitespace-nowrap ml-4">Rs. {item.price}</span>
                  )}
                </div>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{item.description}</p>
                
                {/* Price Display Logic */}
                <div className="mt-auto">
                    {item.variations && item.variations.length > 0 ? (
                        <div className="grid grid-cols-2 gap-2 mt-2">
                            {item.variations.map((v) => (
                                <div key={v.size} className="flex justify-between items-center text-xs bg-zinc-950/50 border border-zinc-800 px-2 py-1.5 rounded">
                                    <span className="text-gray-300 font-medium uppercase">{v.size}</span>
                                    <span className="text-brand-orange font-bold">Rs.{v.price}</span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex justify-end">
                            <button className="text-xs font-bold uppercase tracking-wider text-gray-500 group-hover:text-white flex items-center gap-1 transition-colors border border-zinc-700 rounded px-3 py-1 hover:bg-zinc-800">
                                Add <Plus size={14} className="text-brand-orange"/>
                            </button>
                        </div>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* PDF Menu Download / Bottom CTA */}
        <div className="text-center mt-16">
          <button className="border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-heading font-bold uppercase px-8 py-3 tracking-widest transition-all">
            Download Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
