
import React from 'react';
import { Plus } from 'lucide-react';
import { MENU_ITEMS } from '../constants';

const FeaturedSection: React.FC = () => {
  const featuredItems = MENU_ITEMS.filter(item => item.isFeatured);

  return (
    <section id="favorites" className="py-24 bg-zinc-950 relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h3 className="text-brand-orange font-heading font-bold uppercase tracking-widest mb-2">Favorites</h3>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase">
              Best <span className="text-brand-orange">Sellers</span>
            </h2>
            <p className="text-gray-400 mt-2">The favorites of our customers in Lahore.</p>
          </div>
          
          <div className="flex gap-2 mt-4 md:mt-0">
            {/* Navigation arrows could go here */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
            <div key={item.id} className="relative bg-zinc-900 border-2 border-brand-orange rounded-lg overflow-hidden flex flex-col h-full">
              {/* Badge */}
              <div className="absolute top-3 left-3 bg-brand-orange text-white text-xs font-bold px-3 py-1.5 rounded-sm z-20 uppercase tracking-wide shadow-lg shadow-orange-900/50">
                Best Seller
              </div>
              
              {/* Image */}
              <div className="h-64 overflow-hidden relative">
                {/* Removed dark overlay for brightness */}
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-heading font-bold text-white uppercase mb-2 line-clamp-1">{item.name}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">{item.description}</p>
                
                <div className="flex justify-between items-center mt-auto">
                   <div className="flex flex-col">
                      <span className="text-xs text-gray-500 uppercase font-medium">
                        {item.variations ? 'Starts from' : 'Price'}
                      </span>
                      <span className="text-brand-orange font-bold text-xl">
                        Rs. {item.price}
                      </span>
                   </div>
                  <button className="bg-zinc-800 hover:bg-brand-orange text-white p-2 rounded-md transition-colors">
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
