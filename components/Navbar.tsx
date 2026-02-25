import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  // Clean up body overflow on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm font-sans" ref={navRef}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-20 lg:h-24">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 shrink-0 z-50 relative" onClick={() => { closeDropdown(); closeMobileMenu(); }}>
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary flex items-center justify-center rounded-sm">
            <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="white" viewBox="0 0 48 48"><path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"></path></svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-xl lg:text-2xl font-bold text-primary tracking-tight">BritCham</span>
            <span className="text-[8px] lg:text-[9px] font-bold text-gray-400 uppercase tracking-widest pl-0.5">Peru</span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden xl:flex items-center gap-8 h-full">
          <Link to="/" onClick={closeDropdown} className="h-full flex items-center text-[12px] font-bold text-gray-800 hover:text-primary tracking-widest uppercase transition-colors relative group">
            HOME
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>

          {/* NOSOTROS - Dropdown Trigger */}
          <button
            type="button"
            onMouseEnter={() => setActiveDropdown('nosotros')}
            className={`h-full flex items-center text-[12px] font-bold tracking-widest uppercase transition-colors relative group outline-none ${activeDropdown === 'nosotros' ? 'text-primary' : 'text-gray-800 hover:text-primary'}`}
          >
            NOSOTROS
            <span className={`absolute bottom-0 left-0 w-full h-1 bg-primary transform transition-transform duration-300 ${activeDropdown === 'nosotros' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </button>

          {/* INVESTIGACIÓN - Dropdown Trigger */}
          <button
            type="button"
            onMouseEnter={() => setActiveDropdown('investigacion')}
            className={`h-full flex items-center text-[12px] font-bold tracking-widest uppercase transition-colors relative group outline-none ${activeDropdown === 'investigacion' ? 'text-primary' : 'text-gray-800 hover:text-primary'}`}
          >
            INVESTIGACIÓN
            <span className={`absolute bottom-0 left-0 w-full h-1 bg-primary transform transition-transform duration-300 ${activeDropdown === 'investigacion' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </button>

          {/* SERVICIOS - Dropdown Trigger */}
          <button
            type="button"
            onMouseEnter={() => setActiveDropdown('servicios')}
            className={`h-full flex items-center text-[12px] font-bold tracking-widest uppercase transition-colors relative group outline-none ${activeDropdown === 'servicios' ? 'text-primary' : 'text-gray-800 hover:text-primary'}`}
          >
            SERVICIOS
            <span className={`absolute bottom-0 left-0 w-full h-1 bg-primary transform transition-transform duration-300 ${activeDropdown === 'servicios' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </button>

          <Link to="/noticias" onClick={closeDropdown} className="h-full flex items-center text-[12px] font-bold text-gray-800 hover:text-primary tracking-widest uppercase transition-colors relative group">
            NOTICIAS
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>

          <Link to="/eventos" onClick={closeDropdown} className="h-full flex items-center text-[12px] font-bold text-gray-800 hover:text-primary tracking-widest uppercase transition-colors relative group">
            EVENTOS
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>

          <Link to="/socios" onClick={closeDropdown} className="h-full flex items-center text-[12px] font-bold text-gray-800 hover:text-primary tracking-widest uppercase transition-colors relative group">
            SOCIOS
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
        </nav>

        {/* RIGHT ACTIONS (Desktop) */}
        <div className="hidden xl:flex items-center gap-8">
          <div className="flex items-center gap-3 border-r pr-8 border-gray-200 h-8">
            <button className="text-[11px] font-bold text-primary transition-colors">ES</button>
            <span className="text-gray-300 text-sm">|</span>
            <button className="text-[11px] font-bold text-gray-400 hover:text-primary transition-colors">EN</button>
          </div>
          <Link to="/membresia" onClick={closeDropdown} className="bg-accent hover:bg-red-700 text-white px-6 py-3 rounded-sm text-[11px] font-bold tracking-widest transition-all shadow-md hover:shadow-lg uppercase">
            ÚNETE AHORA
          </Link>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          className="xl:hidden z-50 p-2 text-primary"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* MEGA MENU CONTENT (DESKTOP) - IISS STYLE: Dark, No Icons, Text Columns */}
      <div
        className={`hidden xl:block absolute top-[96px] left-0 w-full bg-[#0a1a3d] text-white shadow-2xl transition-all duration-300 origin-top overflow-hidden border-t border-white/10
           ${activeDropdown ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}
        onMouseEnter={() => { }}
        onMouseLeave={closeDropdown}
      >
        <div className="max-w-[1400px] mx-auto px-12 py-16">

          {/* NOSOTROS CONTENT */}
          {activeDropdown === 'nosotros' && (
            <div className="flex items-start">
              <div className="w-1/3 border-r border-white/20 pr-12">
                <h2 className="font-serif text-4xl text-white font-medium mb-4">Nosotros</h2>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  Conectando empresas, fomentando el comercio y creando oportunidades entre el Reino Unido y Perú desde hace más de 80 años.
                </p>
              </div>
              <div className="w-2/3 pl-16 grid grid-cols-2 gap-y-6 gap-x-12">
                <Link to="/nosotros/rol" onClick={closeDropdown} className="group flex flex-col">
                  <span className="text-sm font-bold tracking-widest uppercase text-white group-hover:text-accent transition-colors">Nuestro Rol</span>
                </Link>
                <Link to="/nosotros/historia" onClick={closeDropdown} className="group flex flex-col">
                  <span className="text-sm font-bold tracking-widest uppercase text-white group-hover:text-accent transition-colors">Historia e Impacto</span>
                </Link>
                <Link to="/nosotros/directorio" onClick={closeDropdown} className="group flex flex-col">
                  <span className="text-sm font-bold tracking-widest uppercase text-white group-hover:text-accent transition-colors">Directorio</span>
                </Link>
                <Link to="/nosotros/equipo" onClick={closeDropdown} className="group flex flex-col">
                  <span className="text-sm font-bold tracking-widest uppercase text-white group-hover:text-accent transition-colors">Equipo y Contacto</span>
                </Link>
              </div>
            </div>
          )}

          {/* INVESTIGACIÓN CONTENT */}
          {activeDropdown === 'investigacion' && (
            <div className="flex items-start">
              <div className="w-1/3 border-r border-white/20 pr-12">
                <h2 className="font-serif text-4xl text-white font-medium mb-4">Investigación</h2>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  Análisis experto, reportes económicos y datos estratégicos para la toma de decisiones empresariales.
                </p>
              </div>
              <div className="w-2/3 pl-16 grid grid-cols-2 gap-y-8 gap-x-12">
                <div>
                  <h3 className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Publicaciones</h3>
                  <div className="flex flex-col gap-4">
                    <Link to="/investigacion/economic-report" onClick={closeDropdown} className="text-white hover:text-accent transition-colors font-medium">Economic Report</Link>
                    <Link to="/investigacion/opportunities" onClick={closeDropdown} className="text-white hover:text-accent transition-colors font-medium">Revista Opportunities</Link>
                  </div>
                </div>
                <div>
                  <h3 className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Comercio & Datos</h3>
                  <div className="flex flex-col gap-4">
                    <Link to="/investigacion/comercio-bilateral" onClick={closeDropdown} className="text-white hover:text-accent transition-colors font-medium">Relaciones Bilaterales</Link>
                    <Link to="/investigacion/estadisticas" onClick={closeDropdown} className="text-white hover:text-accent transition-colors font-medium">Estadísticas (Data Hub)</Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SERVICIOS CONTENT */}
          {activeDropdown === 'servicios' && (
            <div className="flex items-start">
              <div className="w-1/3 border-r border-white/20 pr-12">
                <h2 className="font-serif text-4xl text-white font-medium mb-4">Servicios</h2>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  Soluciones integrales para el crecimiento de su negocio y la expansión internacional.
                </p>
              </div>
              <div className="w-2/3 pl-16 grid grid-cols-2 gap-y-6 gap-x-12">
                <Link to="/servicios" onClick={closeDropdown} className="text-sm font-bold tracking-widest uppercase text-white hover:text-accent transition-colors">Estudio de Mercado</Link>
                <Link to="/servicios" onClick={closeDropdown} className="text-sm font-bold tracking-widest uppercase text-white hover:text-accent transition-colors">Eventos y Networking</Link>
                <Link to="/servicios" onClick={closeDropdown} className="text-sm font-bold tracking-widest uppercase text-white hover:text-accent transition-colors">Comercio Exterior</Link>
                <Link to="/servicios" onClick={closeDropdown} className="text-sm font-bold tracking-widest uppercase text-white hover:text-accent transition-colors">Asesoría Legal</Link>
                <Link to="/servicios" onClick={closeDropdown} className="text-sm font-bold tracking-widest uppercase text-white hover:text-accent transition-colors">Matchmaking</Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 xl:hidden pt-24 px-6 overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col gap-6 pb-10">
          <Link to="/" onClick={closeMobileMenu} className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4">HOME</Link>

          {/* Mobile Dropdowns */}
          <div className="border-b border-gray-100 pb-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">NOSOTROS</h3>
            <div className="flex flex-col gap-3 pl-4">
              <Link to="/nosotros/rol" onClick={closeMobileMenu} className="text-gray-600 hover:text-primary">Nuestro Rol</Link>
              <Link to="/nosotros/historia" onClick={closeMobileMenu} className="text-gray-600 hover:text-primary">Historia</Link>
              <Link to="/nosotros/directorio" onClick={closeMobileMenu} className="text-gray-600 hover:text-primary">Directorio</Link>
              <Link to="/nosotros/equipo" onClick={closeMobileMenu} className="text-gray-600 hover:text-primary">Equipo</Link>
            </div>
          </div>

          <div className="border-b border-gray-100 pb-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">INVESTIGACIÓN</h3>
            <div className="flex flex-col gap-3 pl-4">
              <Link to="/investigacion/economic-report" onClick={closeMobileMenu} className="text-gray-600 hover:text-primary">Economic Report</Link>
              <Link to="/investigacion/opportunities" onClick={closeMobileMenu} className="text-gray-600 hover:text-primary">Opportunities</Link>
              <Link to="/investigacion/comercio-bilateral" onClick={closeMobileMenu} className="text-gray-600 hover:text-primary">Relaciones Bilaterales</Link>
              <Link to="/investigacion/estadisticas" onClick={closeMobileMenu} className="text-gray-600 hover:text-primary">Estadísticas</Link>
            </div>
          </div>

          <div className="border-b border-gray-100 pb-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">SERVICIOS</h3>
            <div className="flex flex-col gap-3 pl-4">
              <Link to="/servicios" onClick={closeMobileMenu} className="text-gray-600 hover:text-primary">Estudio de Mercado</Link>
              <Link to="/servicios" onClick={closeMobileMenu} className="text-gray-600 hover:text-primary">Eventos</Link>
              <Link to="/servicios" onClick={closeMobileMenu} className="text-gray-600 hover:text-primary">Comercio Exterior</Link>
            </div>
          </div>


          <Link to="/noticias" onClick={closeMobileMenu} className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4">NOTICIAS</Link>
          <Link to="/eventos" onClick={closeMobileMenu} className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4">EVENTOS</Link>
          <Link to="/socios" onClick={closeMobileMenu} className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4">SOCIOS</Link>

          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center gap-4">
              <button className="text-sm font-bold text-primary">ES</button>
              <span className="text-gray-300">|</span>
              <button className="text-sm font-bold text-gray-400">EN</button>
            </div>
            <Link to="/membresia" onClick={closeMobileMenu} className="bg-accent text-white py-3 rounded-sm text-center font-bold tracking-widest uppercase">
              ÚNETE AHORA
            </Link>
          </div>
        </nav>
      </div>

    </header>
  );
};

export default Navbar;
