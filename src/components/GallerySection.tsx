import React, { useState } from 'react';
import { Image, Maximize2, X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/prabhatamData';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Infrastructure', 'Real Estate', 'Media', 'Aviation', 'CSR'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-slate-950 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center space-x-2 text-amber-500 text-xs font-bold uppercase tracking-widest mb-3">
              <span className="w-8 h-[2px] bg-amber-500"></span>
              <span>Visual Archive</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-editorial">
              Architecture & Operations Gallery
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl font-sans">
              Curated imagery representing our civil works, retail complexes, luxury residences, aviation operations, and humanitarian initiatives.
            </p>
          </div>

          {/* Category Filters */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all ${
                  activeCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative cursor-pointer aspect-[4/3] rounded-sm overflow-hidden bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 shadow-lg"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              <div className="absolute top-3 left-3">
                <span className="px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-amber-400 border border-slate-800">
                  {item.category}
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3">
                <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-400 flex items-center space-x-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-amber-500 shrink-0" />
                  <span>{item.location}</span>
                </p>
              </div>

              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-full bg-slate-950/80 text-white border border-slate-700">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors z-50"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div 
            className="max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[lightboxIndex].imageUrl}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[70vh] w-auto object-contain rounded-sm shadow-2xl border border-slate-800"
            />
            <div className="mt-4 text-center">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                {filteredItems[lightboxIndex].category}
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {filteredItems[lightboxIndex].location}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
