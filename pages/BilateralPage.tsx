
import React, { useState } from 'react';
import { MOCK_BILATERAL_HITOS } from '../mockData';

const BilateralPage: React.FC = () => {
  const [filter, setFilter] = useState('Todos');
  const tags = ['Todos', 'TLC', 'CPTPP', 'Impuestos', 'Infraestructura', 'Educación'];

  return (
    <div className="py-20 bg-secondary/30 min-h-screen">
      <div className="max-w-7xl mx-auto px-10">
        <header className="mb-20 space-y-6">
           <span className="text-accent font-bold text-[11px] uppercase tracking-widest">Diplomacia Comercial</span>
           <h1 className="text-6xl font-serif font-bold text-primary italic">Relaciones Bilaterales</h1>
           <p className="text-xl text-gray-500 max-w-3xl leading-relaxed">
             El marco jurídico y diplomático que sustenta el éxito de su inversión. Explore los tratados, acuerdos y hitos históricos entre Perú y el Reino Unido.
           </p>
        </header>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-16">
           {tags.map(tag => (
             <button key={tag} onClick={() => setFilter(tag)} className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${filter === tag ? 'bg-primary text-white shadow-lg' : 'bg-white text-gray-400 border border-gray-100 hover:border-primary/20'}`}>
                {tag}
             </button>
           ))}
        </div>

        {/* Fichas de Acuerdos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {MOCK_BILATERAL_HITOS.filter(h => filter === 'Todos' || h.tag === filter).map(hito => (
             <div key={hito.id} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl transition-all group flex flex-col justify-between">
                <div>
                   <div className="flex justify-between items-start mb-6">
                      <span className="text-3xl font-serif font-bold text-primary/20 italic">{hito.year}</span>
                      <span className="bg-primary/5 text-primary px-3 py-1 rounded-sm text-[9px] font-bold uppercase tracking-widest">{hito.tag}</span>
                   </div>
                   <h3 className="text-2xl font-serif font-bold text-primary mb-4 italic group-hover:text-accent transition-colors">{hito.title}</h3>
                   <p className="text-sm text-gray-500 leading-relaxed">{hito.description}</p>
                </div>
                <button className="mt-10 text-primary font-bold text-[10px] tracking-widest uppercase border-t border-gray-50 pt-6 group-hover:underline">Solicitar Info Regulatoria →</button>
             </div>
           ))}
        </div>

        {/* Assitance CTA */}
        <section className="mt-32 bg-primary p-12 md:p-20 rounded-3xl text-white relative overflow-hidden">
           <div className="absolute right-0 top-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20"></div>
           <div className="relative z-10 max-w-2xl space-y-6">
              <h2 className="text-4xl font-serif font-bold italic italic">¿Necesita asistencia legal o comercial especializada?</h2>
              <p className="text-white/70 text-lg">Nuestro equipo técnico ofrece consultoría estratégica sobre la aplicación de tratados y beneficios arancelarios vigentes.</p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                 <button className="bg-accent text-white px-10 py-5 rounded-sm font-bold text-xs tracking-widest uppercase hover:brightness-110 shadow-2xl">SOLICITAR CONSULTORÍA</button>
                 <button className="bg-white/10 text-white px-10 py-5 rounded-sm font-bold text-xs tracking-widest uppercase border border-white/20 hover:bg-white/20">CONTACTAR AL COMITÉ TÉCNICO</button>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};

export default BilateralPage;
