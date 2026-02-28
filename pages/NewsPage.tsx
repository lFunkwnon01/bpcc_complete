import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_NEWS } from '../mockData';

const NewsPage: React.FC = () => {
   const [isScrolled, setIsScrolled] = useState(false);
   const categories = ['ENERGÍA', 'MINERÍA', 'SALUD', 'AGRICULTURA'];
   const today = new Date().toLocaleDateString('es-PE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

   // Mock currency data for the widget
   const [rates] = useState([
      { pair: 'GBP/PEN', rate: 4.75, change: 0.12, up: true },
      { pair: 'USD/PEN', rate: 3.78, change: -0.05, up: false },
   ]);

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 150);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   return (
      <div className="bg-[#fdfdfb] min-h-screen font-serif text-gray-900 selection:bg-accent selection:text-white pt-10">
         {/* Top Black Navbar (Sticky) */}
         <div className={`fixed top-0 left-0 right-0 h-16 bg-[#051124] text-white z-50 flex items-center justify-between px-6 md:px-10 transition-all duration-300 font-sans`}>
            {/* Left side: Logo & Categories (when scrolled) */}
            <div className="flex items-center gap-8 h-full">
               <span className="font-serif font-bold tracking-tighter text-2xl whitespace-nowrap">BPCC NEWS</span>
               <nav className={`hidden md:flex items-center gap-8 h-full text-[11px] font-bold uppercase tracking-widest transition-opacity duration-300 ${isScrolled ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                  {categories.map(cat => (
                     <button key={cat} className="h-full hover:text-accent border-b-2 border-transparent hover:border-accent transition-colors flex items-center">{cat}</button>
                  ))}
               </nav>
            </div>

            {/* Right side: Currency Widget */}
            <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-wide">
               <div className="hidden md:flex items-center gap-4">
                  {rates.map(r => (
                     <div key={r.pair} className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
                        <span className="text-white/60">{r.pair}</span>
                        <span>{r.rate.toFixed(2)}</span>
                        <span className={r.up ? 'text-green-400' : 'text-red-400'}>
                           {r.up ? '▲' : '▼'}{Math.abs(r.change).toFixed(2)}%
                        </span>
                     </div>
                  ))}
               </div>
               <Link to="/" className="text-white/60 hover:text-white transition-colors tracking-widest">Portal &rarr;</Link>
            </div>
         </div>
         {/* Newspaper Header / Masthead */}
         <header className="border-b-4 border-double border-gray-900 pt-16 pb-4 px-6 md:px-10 max-w-7xl mx-auto">
            <div className="flex justify-between items-center text-[10px] font-news-source font-bold uppercase tracking-widest border-b border-gray-200 pb-2 mb-6 mt-4">
               <span>Lima, Perú</span>
               <span>{today}</span>
            </div>

            <div className="text-center py-6">
               <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-2">NOTICIAS BPCC</h1>
               <div className="flex items-center justify-center gap-4 text-sm font-news-source font-bold uppercase tracking-widest text-gray-400">
                  <span>Vol. LXXXV</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>No. 3,452</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>Edición Digital</span>
               </div>
            </div>

            <nav className={`flex justify-center flex-wrap gap-x-12 gap-y-4 border-t border-b border-gray-900 py-4 mt-4 font-sans text-xs font-bold uppercase tracking-[0.2em] transition-opacity duration-300 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
               {categories.map(cat => (
                  <button key={cat} className="hover:text-accent transition-colors">{cat}</button>
               ))}
            </nav>
         </header>

         <main className="max-w-7xl mx-auto px-6 md:px-10 py-12">
            {/* Top Story Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-gray-300 pb-16 mb-16">
               <div className="lg:col-span-8 group cursor-pointer pr-4 md:pr-8 lg:border-r border-gray-200">
                  <h2 className="font-serif text-5xl md:text-7xl font-bold leading-[0.95] mb-8 hover:text-accent transition-colors tracking-tight">
                     The Future of BritCham: Strategic Expansion and Cultural Synergy
                  </h2>
                  <div className="aspect-[16/9] mb-8 overflow-hidden bg-gray-100">
                     <img src="https://picsum.photos/seed/newshero/1200/800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Main Story" />
                  </div>
                  <p className="text-xl md:text-2xl font-news-body leading-relaxed text-gray-800 italic border-l-4 border-gray-900 pl-6 mb-8 mt-8">
                     "As we navigate the complexities of post-Brexit trade, our commitment to strengthening the bilateral ties between Peru and the United Kingdom remains our guiding light."
                  </p>
                  <p className="text-lg font-news-body leading-relaxed text-gray-700 first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
               </div>

               <aside className="lg:col-span-4 space-y-10">
                  <h3 className="text-sm font-news-source font-bold uppercase tracking-[0.2em] border-b border-gray-900 pb-3 mb-6">Opinión y Análisis</h3>
                  <div className="space-y-8 divide-y divide-gray-200">
                     {MOCK_NEWS.slice(1, 4).map(news => (
                        <div key={news.id} className="group cursor-pointer pt-6 first:pt-0">
                           <span className="text-accent font-news-source font-bold text-[10px] uppercase tracking-widest mb-3 block">{news.category}</span>
                           <h4 className="font-serif text-2xl font-bold leading-tight group-hover:text-accent transition-colors mb-4">{news.title}</h4>
                           <p className="text-sm font-news-body text-gray-600 line-clamp-3 leading-relaxed">{news.excerpt}</p>
                        </div>
                     ))}
                  </div>
               </aside>
            </div>

            {/* Secondary Stories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
               {MOCK_NEWS.map(news => (
                  <article key={news.id} className="group cursor-pointer">
                     <div className="aspect-square mb-6 overflow-hidden bg-gray-100">
                        <img src={news.imageUrl} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-500 group-hover:scale-105" alt={news.title} />
                     </div>
                     <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-gray-400">{news.category}</span>
                     <h3 className="text-xl font-bold mt-2 mb-3 leading-tight group-hover:text-accent transition-colors">{news.title}</h3>
                     <p className="text-sm font-news-body text-gray-600 line-clamp-4 leading-relaxed">{news.excerpt}</p>
                     <time className="block mt-4 text-[10px] font-news-source font-bold text-gray-400 uppercase tracking-tighter">{news.date}</time>
                  </article>
               ))}
            </div>
         </main>

         <footer className="border-t-4 border-double border-gray-900 mt-20 py-12 px-6">
            <div className="max-w-7xl mx-auto text-center">
               <h2 className="text-4xl font-bold tracking-tighter mb-4">NOTICIAS BPCC</h2>
               <p className="text-xs font-news-source font-bold uppercase tracking-widest text-gray-400">&copy; {new Date().getFullYear()} British Chamber of Commerce of Peru. All Rights Reserved.</p>
            </div>
         </footer>
      </div>
   );
};

export default NewsPage;
