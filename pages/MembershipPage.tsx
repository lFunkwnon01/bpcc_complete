
import React from 'react';
import { MOCK_MEMBERSHIPS } from '../mockData';
import { Link } from 'react-router-dom';

const MembershipPage: React.FC = () => {
   return (
      <div className="py-20 bg-secondary/30">
         <div className="max-w-7xl mx-auto px-6 md:px-10">
            <header className="mb-20 text-center">
               <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6">Nuestras Membresías</h1>
               <p className="text-gray-500 text-lg max-w-2xl mx-auto">Forme parte de la red empresarial más influyente que une al Reino Unido y el Perú.</p>
            </header>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch mb-32">
               {MOCK_MEMBERSHIPS.map((tier) => (
                  <div
                     key={tier.id}
                     className={`rounded-2xl p-10 border shadow-sm flex flex-col justify-between ${tier.highlighted
                           ? 'bg-primary text-white border-primary shadow-2xl relative scale-105'
                           : 'bg-white border-gray-200'
                        }`}
                  >
                     {tier.highlighted && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                           Recomendado
                        </div>
                     )}
                     <div>
                        <h3 className={`text-2xl font-serif font-bold mb-2 ${tier.highlighted ? 'text-white' : 'text-primary'}`}>
                           {tier.name}
                        </h3>
                        <p className={`text-sm mb-8 ${tier.highlighted ? 'text-white/60' : 'text-gray-400'}`}>
                           {tier.tagline}
                        </p>
                        <div className={`text-4xl font-bold mb-10 tracking-tighter ${tier.highlighted ? 'text-white' : 'text-primary'}`}>
                           ${tier.price}
                           <span className={`text-sm font-normal tracking-normal ml-2 ${tier.highlighted ? 'text-white/40' : 'text-gray-400'}`}>
                              / {tier.billingPeriod === 'annual' ? 'anual' : 'mensual'}
                           </span>
                        </div>
                        <ul className={`space-y-4 text-sm mb-12 ${tier.highlighted ? 'text-white/80' : 'text-gray-600'}`}>
                           {tier.features.map((feature, i) => (
                              <li key={i} className="flex items-center gap-3">
                                 ✓ {feature}
                              </li>
                           ))}
                        </ul>
                     </div>
                     <button
                        className={`w-full py-4 rounded font-bold text-xs uppercase tracking-widest transition-all ${tier.highlighted
                              ? 'bg-accent text-white hover:brightness-110 shadow-lg shadow-accent/20'
                              : 'border border-gray-200 hover:bg-gray-50'
                           }`}
                     >
                        {tier.ctaText}
                     </button>
                  </div>
               ))}
            </div>

            {/* Comparison Table */}
            <section className="bg-white rounded-3xl p-10 md:p-20 shadow-xl border border-gray-100 overflow-x-auto">
               <h2 className="text-3xl font-serif font-bold mb-12">Comparativa de Beneficios</h2>
               <table className="w-full text-left min-w-[800px]">
                  <thead>
                     <tr className="border-b-2 border-gray-100">
                        <th className="py-6 font-bold text-gray-400 text-xs uppercase tracking-widest">Beneficio</th>
                        <th className="py-6 font-bold text-primary text-sm uppercase tracking-widest">Standard</th>
                        <th className="py-6 font-bold text-primary text-sm uppercase tracking-widest">Premium</th>
                        <th className="py-6 font-bold text-primary text-sm uppercase tracking-widest">Premium Plus</th>
                     </tr>
                  </thead>
                  <tbody className="text-sm">
                     {[
                        ["Eventos de Networking Mensual", "✓", "✓", "✓"],
                        ["Acceso a Base de Datos", "Lectura", "Completo", "Prioritario"],
                        ["Reuniones 1-on-1", "-", "✓", "✓"],
                        ["Entradas con Descuento", "✓", "✓", "✓"],
                        ["Mesa en Eventos Corporativos", "-", "Preferencial", "VIP / Incluida"],
                        ["Voto en Asamblea Anual", "✓", "✓", "✓"]
                     ].map((row, i) => (
                        <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                           <td className="py-6 font-medium text-gray-700">{row[0]}</td>
                           <td className="py-6 font-bold text-primary/60">{row[1]}</td>
                           <td className="py-6 font-bold text-primary/80">{row[2]}</td>
                           <td className="py-6 font-bold text-primary">{row[3]}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </section>

            {/* Process Stepper */}
            <section className="mt-32">
               <h2 className="text-4xl font-serif font-bold text-center mb-16">Proceso de Afiliación</h2>
               <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {[
                     { title: "Documentación", desc: "Complete los formularios iniciales." },
                     { title: "Introducción", desc: "Reunión para alinear expectativas." },
                     { title: "Evaluación", desc: "Revisión por comité comercial." },
                     { title: "Activación", desc: "Acceso total a los beneficios." }
                  ].map((step, i) => (
                     <div key={i} className="text-center group">
                        <div className="w-16 h-16 bg-primary/5 text-primary rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-xl group-hover:bg-primary group-hover:text-white transition-all shadow-inner">0{i + 1}</div>
                        <h4 className="font-bold mb-2">{step.title}</h4>
                        <p className="text-sm text-gray-500">{step.desc}</p>
                     </div>
                  ))}
               </div>
            </section>
         </div>
      </div>
   );
};

export default MembershipPage;
