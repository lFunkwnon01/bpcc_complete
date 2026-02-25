
import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_NEWS } from '../mockData';

const NewsPage: React.FC = () => {
   const categories = ['NOTICIAS BPCC', 'NOTICIAS SOCIOS', 'MUNDO BPCC'];
   const today = new Date().toLocaleDateString('es-PE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

   return (
      <div className="bg-[#fdfdfb] min-h-screen font-serif text-gray-900 selection:bg-accent selection:text-white">
         {/* Newspaper Header / Masthead */}
         <header className="border-b-4 border-double border-gray-900 pt-8 pb-4 px-6 md:px-10 max-w-7xl mx-auto">
            <div className="flex justify-between items-center text-[10px] font-sans font-bold uppercase tracking-widest border-b border-gray-200 pb-2 mb-6">
               <span>Lima, Perú</span>
               <span>{today}</span>
               <Link to="/" className="text-accent hover:underline">Volver al Portal Principal</Link>
            </div>

            <div className="text-center py-6">
               <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-2">NOTICIAS BPCC</h1>
               <div className="flex items-center justify-center gap-4 text-sm font-sans font-bold uppercase tracking-widest text-gray-400">
                  <span>Vol. LXXXV</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>No. 3,452</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>Edición Digital</span>
               </div>
            </div>

            <nav className="flex justify-center flex-wrap gap-x-12 gap-y-4 border-t border-b border-gray-900 py-3 mt-4 font-sans text-xs font-bold uppercase tracking-[0.2em]">
               {categories.map(cat => (
                  <button key={cat} className="hover:text-accent transition-colors">{cat}</button>
               ))}
            </nav>
         </header>

         <main className="max-w-7xl mx-auto px-6 md:px-10 py-12">
            {/* Top Story Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-gray-200 pb-16 mb-16">
               <div className="lg:col-span-8 group cursor-pointer">
                  <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] mb-8 hover:text-accent transition-colors">
                     The Future of BritCham: Strategic Expansion and Cultural Synergy
                  </h2>
                  <div className="aspect-[16/9] mb-8 overflow-hidden bg-gray-100">
                     <img src="https://picsum.photos/seed/newshero/1200/800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Main Story" />
                  </div>
                  <p className="text-xl md:text-2xl leading-relaxed text-gray-700 italic border-l-4 border-gray-200 pl-6 mb-8">
                     "As we navigate the complexities of post-Brexit trade, our commitment to strengthening the bilateral ties between Peru and the United Kingdom remains our guiding light."
                  </p>
                  <p className="text-lg leading-relaxed text-gray-600 first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
               </div>

               <aside className="lg:col-span-4 space-y-12">
                  <h3 className="text-xl font-bold uppercase tracking-widest border-b-2 border-gray-900 pb-2">Opinión y Análisis</h3>
                  <div className="space-y-10">
                     {MOCK_NEWS.slice(1, 4).map(news => (
                        <div key={news.id} className="group cursor-pointer border-b border-gray-100 pb-6 last:border-0">
                           <span className="text-accent font-bold text-[10px] uppercase tracking-widest mb-2 block">{news.category}</span>
                           <h4 className="text-2xl font-bold leading-tight group-hover:underline mb-3">{news.title}</h4>
                           <p className="text-sm text-gray-500 line-clamp-2">{news.excerpt}</p>
                        </div>
                     ))}
                  </div>

                  <div className="bg-gray-900 text-white p-8">
                     <h4 className="text-xl font-bold mb-4 italic">Newsletter Semanal</h4>
                     <p className="text-sm text-gray-400 mb-6">Reciba las noticias más importantes directamente en su correo institucional.</p>
                     <input type="email" placeholder="Email Address" className="w-full bg-white/10 border border-white/20 p-3 text-sm mb-4 focus:outline-none focus:border-accent" />
                     <button className="w-full bg-accent text-white font-bold py-3 text-xs uppercase tracking-widest hover:brightness-110 transition-all">Suscribirse</button>
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
                     <p className="text-sm text-gray-600 line-clamp-4 leading-relaxed">{news.excerpt}</p>
                     <time className="block mt-4 text-[10px] font-sans font-bold text-gray-400 uppercase tracking-tighter">{news.date}</time>
                  </article>
               ))}
            </div>
         </main>

         <footer className="border-t-4 border-double border-gray-900 mt-20 py-12 px-6">
            <div className="max-w-7xl mx-auto text-center">
               <h2 className="text-4xl font-bold tracking-tighter mb-4">NOTICIAS BPCC</h2>
               <p className="text-xs font-sans font-bold uppercase tracking-widest text-gray-400">&copy; {new Date().getFullYear()} British Chamber of Commerce of Peru. All Rights Reserved.</p>
            </div>
         </footer>
      </div>
   );
};

export default NewsPage;
