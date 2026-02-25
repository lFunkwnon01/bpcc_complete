
import React from 'react';

const StatisticsPage: React.FC = () => {
  return (
    <div className="bg-secondary/30 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <header className="mb-20 text-center max-w-4xl mx-auto space-y-6">
           <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-widest rounded-full">Inteligencia Comercial</span>
           <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary italic">Dashboards e Inteligencia de Datos</h1>
           <p className="text-gray-500 text-lg leading-relaxed">
             Proporcionamos una visión analítica del comercio bilateral Perú-Reino Unido, permitiendo a nuestros socios identificar tendencias, picos de exportación y oportunidades de inversión mediante visualizaciones en tiempo real.
           </p>
        </header>

        <section className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col lg:flex-row">
           <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center space-y-8">
              <h2 className="text-3xl font-serif font-bold text-primary">Acceso al Data Hub</h2>
              <div className="space-y-4">
                 <p className="text-gray-600">Nuestro ecosistema de datos está impulsado por **Microsoft Power BI**, integrando fuentes de SUNAT, ONS (UK) y el Departamento de Negocios y Comercio del Reino Unido.</p>
                 <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-sm text-gray-500">
                       <span className="text-accent mt-1">●</span>
                       <span>Balanza comercial por sector arancelario.</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-500">
                       <span className="text-accent mt-1">●</span>
                       <span>Evolución mensual de la libra esterlina vs sol.</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-500">
                       <span className="text-accent mt-1">●</span>
                       <span>Principales puertos de destino y origen.</span>
                    </li>
                 </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                 <a href="https://app.powerbi.com" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-10 py-5 rounded-sm font-bold text-xs tracking-widest uppercase hover:bg-navy-800 transition-all text-center">
                    ABRIR DATA HUB (POWER BI)
                 </a>
                 <button className="border border-gray-200 text-gray-600 px-10 py-5 rounded-sm font-bold text-xs tracking-widest uppercase hover:bg-gray-50 transition-all">
                    VER METODOLOGÍA PDF
                 </button>
              </div>
           </div>
           <div className="lg:w-1/2 bg-gray-100 relative min-h-[400px]">
              <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: "url('https://picsum.photos/seed/datavis/1000/1000')" }}></div>
              <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] flex items-center justify-center p-12">
                 <div className="bg-white/95 p-8 rounded-xl shadow-2xl max-w-sm text-center">
                    <svg className="w-16 h-16 text-primary mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                    <h4 className="font-bold text-primary mb-2">Seguridad y Privacidad</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Algunas visualizaciones avanzadas requieren autenticación de socio corporativo BPCC.</p>
                 </div>
              </div>
           </div>
        </section>
        
        <div className="mt-20 border-t border-gray-200 pt-10 text-center">
           <p className="text-sm text-gray-400 italic font-serif">"Empoderando el crecimiento bilateral a través de la transparencia de datos."</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
