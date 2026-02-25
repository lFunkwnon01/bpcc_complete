
import React from 'react';
import { MOCK_REPORTS } from '../mockData';

const InvestigationPage: React.FC = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <header className="mb-20 text-center space-y-4">
          <span className="text-primary font-bold tracking-widest text-xs uppercase">Knowledge & Intelligence Center</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary">Investigación y análisis para decisiones</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Acceda a reportes económicos exclusivos, guías de inversión y datos estratégicos en tiempo real para fortalecer el comercio bilateral.
          </p>
        </header>

        {/* Data Hub Hero */}
        <section className="bg-primary rounded-3xl p-10 md:p-20 text-white relative overflow-hidden mb-24 shadow-2xl">
           <div className="absolute right-0 top-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20"></div>
           <div className="relative z-10 max-w-2xl space-y-6">
              <span className="bg-accent px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Inteligencia de Negocios</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold">Centro de Inteligencia de Datos (Data Hub)</h2>
              <p className="text-white/70 text-lg">Consulte métricas comerciales actualizadas entre Perú y Reino Unido con tecnología Power BI.</p>
              <div className="flex gap-4 pt-4">
                 <button className="bg-white text-primary px-8 py-4 rounded font-bold text-sm tracking-widest hover:bg-gray-100 transition-all">ABRIR DATA HUB</button>
                 <button className="bg-white/10 text-white px-8 py-4 rounded font-bold text-sm tracking-widest border border-white/20 hover:bg-white/20 transition-all">VER METODOLOGÍA</button>
              </div>
           </div>
        </section>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
           {[
             { title: "Reporte Económico", desc: "Análisis semanal detallado de indicadores macroeconómicos.", icon: "📈" },
             { title: "Oportunidades", desc: "Guías estratégicas de inversión por sectores específicos.", icon: "💡" },
             { title: "Relaciones Bilaterales", desc: "Marco institucional, diplomático y legal vigente.", icon: "🤝" },
             { title: "Estadísticas", desc: "Visualización de datos interactiva vía dashboards.", icon: "📊" }
           ].map((cat, i) => (
             <div key={i} className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all cursor-pointer group">
                <span className="text-4xl mb-6 block">{cat.icon}</span>
                <h3 className="font-serif text-xl font-bold mb-3 group-hover:text-primary transition-colors">{cat.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{cat.desc}</p>
                <div className="mt-8 text-primary font-bold text-[10px] tracking-widest uppercase flex items-center gap-2">Explorar <span className="text-xs">→</span></div>
             </div>
           ))}
        </div>

        {/* Latest Reports Feed */}
        <section className="space-y-12">
          <h2 className="text-3xl font-serif font-bold border-b pb-6">Publicaciones Recientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {MOCK_REPORTS.map(report => (
              <div key={report.id} className="flex flex-col md:flex-row gap-8 items-center group">
                 <div className="w-full md:w-48 h-64 shrink-0 rounded-lg overflow-hidden shadow-lg border border-gray-100">
                    <img src={report.imageUrl} className="w-full h-full object-cover transition-transform group-hover:scale-105" alt={report.title} />
                 </div>
                 <div className="space-y-4">
                    <span className="text-accent font-bold text-[10px] uppercase tracking-widest">{report.period}</span>
                    <h3 className="text-2xl font-serif font-bold">{report.title}</h3>
                    <p className="text-sm text-gray-500">{report.description}</p>
                    <div className="flex gap-4">
                       <button className="text-primary font-bold text-xs uppercase underline">Leer en Issuu</button>
                       <button className="text-gray-400 font-bold text-xs uppercase hover:text-primary">Descargar PDF</button>
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default InvestigationPage;
