import React, { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';

const TIMELINE_DATA = [
  { year: '1988', title: 'Fundación BPCC', desc: 'Inicio oficial de operaciones, estableciendo las bases del comercio bilateral.' },
  { year: '1990-2000', title: 'Consolidación', desc: 'Crecimiento sostenido y expansión de la red de socios clave.' },
  { year: '2010s', title: 'Networking Estratégico', desc: 'Década de alto impacto con desayunos políticos y conferencias sectoriales.' },
  { year: '2023/24', title: '37 Años de Solidez', desc: 'Reconocimiento público y madurez institucional.' },
  { year: '2024-25', title: 'Innovación & Summit', desc: 'Lanzamiento del Summit 2025 con foco en tecnología y sostenibilidad.' },
  { year: '2024-26', title: 'Best Network', desc: 'Posicionamiento líder como "Best Network for Business & Community".' },
];

const BOARD_MEMBERS = [
  { name: 'Enrique Anderson', role: 'Presidente', img: 'https://ui-avatars.com/api/?name=Enrique+Anderson&background=0D8ABC&color=fff' },
  { name: 'Felipe Morris', role: 'Vicepresidente', img: 'https://ui-avatars.com/api/?name=Felipe+Morris&background=0D8ABC&color=fff' },
  { name: 'Rafael Ramos', role: 'Director', img: 'https://ui-avatars.com/api/?name=Rafael+Ramos&background=0D8ABC&color=fff' },
  { name: 'Alex Fort', role: 'Director', img: 'https://ui-avatars.com/api/?name=Alex+Fort&background=0D8ABC&color=fff' },
  { name: 'Inés Temple', role: 'Directora', img: 'https://ui-avatars.com/api/?name=Ines+Temple&background=0D8ABC&color=fff' },
  { name: 'Juan Carlos Mathews', role: 'Director', img: 'https://ui-avatars.com/api/?name=Juan+Carlos&background=0D8ABC&color=fff' },
];

const TEAM_MEMBERS = [
  { name: 'Fabricio Ladera', role: 'General Manager', img: 'https://ui-avatars.com/api/?name=Fabricio+Ladera&background=e20820&color=fff' },
  { name: 'Sergio Delgado', role: 'Head of Consulting', img: 'https://ui-avatars.com/api/?name=Sergio+Delgado&background=e20820&color=fff' },
  { name: 'Angel Toshio', role: 'Head of Events', img: 'https://ui-avatars.com/api/?name=Angel+Toshio&background=e20820&color=fff' },
  { name: 'Valeria Rivas', role: 'Marketing & Comms', img: 'https://ui-avatars.com/api/?name=Valeria+Rivas&background=e20820&color=fff' },
];

const AboutPage: React.FC = () => {
  const { section } = useParams();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const renderContent = () => {
    switch (section) {
      case 'rol':
        return (
          <div className="space-y-16 animate-fadeIn">
            {/* Mission / Vision / Values MOVED HERE */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 shadow-sm border-t-4 border-primary hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-gray-900">Misión</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Fomentar el crecimiento de nuestros socios a través de la excelencia comercial y oportunidades estratégicas.</p>
              </div>
              <div className="bg-white p-8 shadow-sm border-t-4 border-accent hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors text-accent">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-gray-900">Visión</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Ser el referente indiscutible del éxito empresarial bilateral en la región y un puente clave con el Reino Unido.</p>
              </div>
              <div className="bg-white p-8 shadow-sm border-t-4 border-gray-800 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-gray-800 group-hover:text-white transition-colors text-gray-800">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-gray-900">Valores</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Integridad, Transparencia, Innovación y Colaboración de clase mundial.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-gray-100">
              <div className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-primary">Nuestro Rol Estratégico</h2>
                <p className="text-lg text-gray-600 leading-relaxed italic border-l-4 border-accent pl-6">"Somos el motor del comercio bilateral, facilitando el diálogo entre gobiernos y sector privado."</p>
                <p className="text-sm text-gray-500">BPCC actúa como un facilitador crítico en la relación Perú-UK, apoyando misiones comerciales, identificando barreras regulatorias y promoviendo la inversión extranjera directa.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl space-y-6">
                <h4 className="font-bold text-primary uppercase text-sm tracking-widest">Puntos Clave</h4>
                <ul className="space-y-4 text-sm text-gray-600">
                  <li className="flex gap-4 items-center"><span className="w-2 h-2 bg-accent rounded-full"></span>Advocacy gubernamental en ambos mercados.</li>
                  <li className="flex gap-4 items-center"><span className="w-2 h-2 bg-accent rounded-full"></span>Inteligencia de mercado sectorial.</li>
                  <li className="flex gap-4 items-center"><span className="w-2 h-2 bg-accent rounded-full"></span>Networking de alta dirección.</li>
                  <li className="flex gap-4 items-center"><span className="w-2 h-2 bg-accent rounded-full"></span>Promoción de inversiones sostenibles.</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'historia':
        return (
          <div className="space-y-12 animate-fadeIn">
            <div className="flex justify-between items-end">
              <h2 className="text-4xl font-serif font-bold text-primary">Historia e Impacto</h2>
              <div className="flex gap-2">
                <button onClick={() => scroll('left')} className="p-2 border rounded-full hover:bg-gray-100 transition-colors"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg></button>
                <button onClick={() => scroll('right')} className="p-2 border rounded-full hover:bg-gray-100 transition-colors"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button>
              </div>
            </div>

            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-12 pb-12 snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {TIMELINE_DATA.map((item, i) => (
                <div key={i} className="min-w-[300px] snap-center group relative pt-8">
                  {/* Timeline Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 group-hover:bg-primary/30 transition-colors"></div>
                  {/* Dot */}
                  <div className="absolute top-[-6px] left-0 w-4 h-4 bg-primary rounded-full ring-4 ring-white group-hover:scale-125 transition-transform"></div>

                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm group-hover:shadow-lg group-hover:-translate-y-2 transition-all duration-300">
                    <span className="text-4xl font-serif font-bold text-accent/20 absolute right-6 top-6">{item.year}</span>
                    <h3 className="text-xl font-bold text-primary mb-3 relative z-10">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed relative z-10">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'directorio':
        return (
          <div className="space-y-12 animate-fadeIn">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">Directorio</h2>
              <p className="text-gray-500 text-lg">
                Líderes empresariales que marcan el rumbo estratégico de nuestra institución.
                El Directorio es el órgano máximo de decisión y gobernanza.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BOARD_MEMBERS.map((member, i) => (
                <div key={i} className="bg-white group overflow-hidden rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="h-64 overflow-hidden relative">
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-serif text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">{member.name}</h3>
                    <p className="text-accent text-xs font-bold uppercase tracking-widest mt-2">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'equipo':
        return (
          <div className="space-y-12 animate-fadeIn">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">Equipo Ejecutivo</h2>
              <p className="text-gray-500 text-lg">
                El equipo operativo encargado de ejecutar la visión estratégica y asegurar la excelencia en el servicio a nuestros socios.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TEAM_MEMBERS.map((member, i) => (
                <div key={i} className="bg-white group overflow-hidden rounded-xl border border-gray-100 hover:border-accent transition-all duration-300 hover:shadow-lg">
                  <div className="h-48 overflow-hidden relative">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        // Redirect or default view - reusing Role/Intro content
        return (
          <div className="text-center py-20 space-y-6">
            <h2 className="text-5xl font-serif font-bold text-primary italic">La Cámara</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Seleccione una sección para conocer más sobre nosotros.</p>
            <div className="flex justify-center gap-4 mt-8">
              <Link to="/nosotros/rol" className="px-6 py-3 bg-primary text-white rounded-md font-bold hover:bg-primary/90">Nuestro Rol</Link>
              <Link to="/nosotros/directorio" className="px-6 py-3 border border-primary text-primary rounded-md font-bold hover:bg-primary/5">Directorio</Link>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="py-20 min-h-screen bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <header className="mb-16 border-b border-gray-200 pb-8 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <span className="text-[10px] font-bold text-accent uppercase tracking-[0.3em] mb-2 block">Institucional</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary">Sobre BPCC</h1>
          </div>
          <nav className="flex flex-wrap gap-4 md:gap-8 text-[11px] font-bold tracking-widest uppercase text-gray-400">
            <Link to="/nosotros/rol" className={`pb-2 border-b-2 transition-all ${section === 'rol' ? 'text-primary border-primary' : 'border-transparent hover:text-primary hover:border-primary/30'}`}>Nuestro Rol</Link>
            <Link to="/nosotros/historia" className={`pb-2 border-b-2 transition-all ${section === 'historia' ? 'text-primary border-primary' : 'border-transparent hover:text-primary hover:border-primary/30'}`}>Historia</Link>
            <Link to="/nosotros/directorio" className={`pb-2 border-b-2 transition-all ${section === 'directorio' ? 'text-primary border-primary' : 'border-transparent hover:text-primary hover:border-primary/30'}`}>Directorio</Link>
            <Link to="/nosotros/equipo" className={`pb-2 border-b-2 transition-all ${section === 'equipo' ? 'text-primary border-primary' : 'border-transparent hover:text-primary hover:border-primary/30'}`}>Equipo</Link>
          </nav>
        </header>
        {renderContent()}
      </div>
    </div>
  );
};

export default AboutPage;
