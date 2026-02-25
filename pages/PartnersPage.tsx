
import React from 'react';
import { MOCK_PARTNERS } from '../mockData';

const PartnersPage: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <header className="mb-12">
          <h1 className="text-5xl font-serif font-bold text-primary mb-4">Directorio de Socios</h1>
          <p className="text-gray-500 text-lg max-w-2xl">Conozca a las empresas que lideran el intercambio comercial entre Perú y Reino Unido.</p>
        </header>

        {/* Filters */}
        <div className="bg-gray-50 p-6 rounded-xl flex flex-col md:flex-row gap-4 mb-16 border border-gray-200">
           <div className="flex-grow">
              <input type="text" placeholder="Buscar por nombre..." className="w-full bg-white border border-gray-200 rounded px-4 py-3 focus:ring-2 focus:ring-primary outline-none" />
           </div>
           <select className="bg-white border border-gray-200 rounded px-4 py-3 outline-none">
              <option>Todos los sectores</option>
              <option>Energía</option>
              <option>Banca</option>
              <option>Minería</option>
           </select>
           <button className="bg-primary text-white px-8 py-3 rounded font-bold text-sm tracking-widest uppercase">FILTRAR</button>
        </div>

        {/* Tier Tabs */}
        <div className="flex border-b border-gray-200 mb-12 gap-8">
           <button className="pb-4 border-b-2 border-primary text-primary font-bold text-sm uppercase tracking-widest">Premium Plus</button>
           <button className="pb-4 border-b-2 border-transparent text-gray-400 hover:text-gray-600 font-bold text-sm uppercase tracking-widest">Premium</button>
           <button className="pb-4 border-b-2 border-transparent text-gray-400 hover:text-gray-600 font-bold text-sm uppercase tracking-widest">Todos</button>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {MOCK_PARTNERS.map(partner => (
            <div key={partner.id} className="bg-white border border-gray-100 rounded-xl p-8 text-center hover:shadow-2xl transition-all group">
               <div className="h-24 w-full flex items-center justify-center mb-6">
                  <img src={partner.logoUrl} className="max-h-full grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100" alt={partner.name} />
               </div>
               <span className="text-[10px] font-bold text-primary bg-primary/5 px-2 py-1 rounded mb-2 inline-block uppercase">{partner.sector}</span>
               <h3 className="font-bold text-lg mb-4">{partner.name}</h3>
               <button className="text-primary font-bold text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">Ver Perfil →</button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <section className="mt-32 bg-secondary rounded-3xl p-12 text-center border border-gray-200">
           <h2 className="text-3xl font-serif font-bold mb-6 italic">¿No encuentra a quién busca?</h2>
           <p className="text-gray-500 mb-8 max-w-xl mx-auto">Nuestro equipo de membresías puede ayudarle a conectar con el socio adecuado para sus objetivos comerciales.</p>
           <div className="flex justify-center gap-4">
              <button className="bg-primary text-white px-10 py-4 rounded font-bold text-sm tracking-widest uppercase">CONTÁCTANOS</button>
              <button className="bg-white border border-gray-200 px-10 py-4 rounded font-bold text-sm tracking-widest uppercase">SOLICITAR ASISTENCIA</button>
           </div>
        </section>
      </div>
    </div>
  );
};

export default PartnersPage;
