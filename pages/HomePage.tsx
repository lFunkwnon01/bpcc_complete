
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_MEMBERSHIPS } from '../mockData';

import logoAnglo from '../assets/anglo_americano.png';
import logoBelmond from '../assets/belmond_logo.png';
import logoBritanico from '../assets/britanico_logo.jpg';
import logoDiageo from '../assets/diageo_logo.png';
import logoGca from '../assets/gca_logo.png';
import logoUpc from '../assets/upc_logo.png';

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [counters, setCounters] = useState({ socios: 0, representantes: 0, eventos: 0 });
  const slides = [
    {
      title: "Únete a la red empresarial BPCC",
      desc: "Connect with the most influential business network in Peru and the UK.",
      cta: "SER SOCIO / JOIN NOW",
      img: "https://picsum.photos/seed/biz1/1920/1080",
      link: "/membresia"
    },
    {
      title: "Próximo Business After Hours",
      desc: "Networking de alto nivel en la Residencia del Embajador Británico.",
      cta: "REGISTRARSE / REGISTER",
      img: "https://picsum.photos/seed/residence/1920/1080",
      link: "/noticias-eventos/calendario"
    },
    {
      title: "Economic Report Q4",
      desc: "Análisis exclusivo del crecimiento regional y proyecciones 2024.",
      cta: "LEER REPORTE / READ NOW",
      img: "https://picsum.photos/seed/stats/1920/1080",
      link: "/investigacion/economic-report"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((s) => (s + 1) % slides.length), 8000);
    return () => clearInterval(timer);
  }, [currentSlide]); // Reset timer when slide changes

  const nextSlide = () => {
    setCurrentSlide((s) => (s + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((s) => (s - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Animated counters for statistics
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Animate counters
          const duration = 2000;
          const steps = 60;
          const stepDuration = duration / steps;

          const targets = { socios: 350, representantes: 1200, eventos: 80 };
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            const easeOutQuad = 1 - Math.pow(1 - progress, 3);

            setCounters({
              socios: Math.floor(targets.socios * easeOutQuad),
              representantes: Math.floor(targets.representantes * easeOutQuad),
              eventos: Math.floor(targets.eventos * easeOutQuad),
            });

            if (currentStep >= steps) {
              setCounters(targets);
              clearInterval(timer);
            }
          }, stepDuration);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div>
      {/* Hero Slide Deck */}
      {/* Hero Full-Bleed Grid */}
      <section className="relative h-[90vh] w-full pt-20 bg-navy-900 border-b border-navy-900">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 h-full w-full">
          {/* Main Story (Left) - Dynamic Slideshow */}
          <div className="lg:col-span-2 relative group overflow-hidden bg-zinc-900">
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${i === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                style={{ backgroundImage: `url(${slide.img})` }}
              >
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-700"></div>
              </div>
            ))}

            {/* Text Content overlay */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-16 lg:p-20 pointer-events-none">
              <span className="text-white/90 font-bold uppercase tracking-widest text-xs mb-6 block drop-shadow-md">BritCham Peru Hub</span>
              <div className="space-y-6 pointer-events-auto">
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.05] text-white drop-shadow-xl">
                  {slides[currentSlide].title}
                </h2>
                <p className="text-lg md:text-2xl font-light text-white/90 leading-relaxed max-w-3xl drop-shadow-md">
                  {slides[currentSlide].desc}
                </p>
                <div className="pt-6">
                  <Link to={slides[currentSlide].link} className="inline-flex items-center gap-2 border border-white/40 bg-black/20 px-8 py-4 text-xs uppercase font-bold tracking-widest hover:bg-white hover:text-navy-900 transition-colors backdrop-blur-md">
                    {slides[currentSlide].cta}
                  </Link>
                </div>
              </div>
            </div>

            {/* Slide Indicators inside the main box */}
            <div className="absolute bottom-8 lg:bottom-12 left-8 md:left-16 lg:left-20 flex gap-4 z-30">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`h-2 lg:h-3 transition-all hover:bg-white/80 ${i === currentSlide ? 'w-16 lg:w-24 bg-white' : 'w-10 lg:w-16 bg-white/40'}`}
                  aria-label={`Go to slide ${i + 1}`}
                >
                </button>
              ))}
            </div>
          </div>

          {/* Right Stacked Stories */}
          <div className="lg:col-span-1 flex flex-col gap-1">
            {/* Eventos Especiales */}
            <div
              className="flex-1 relative bg-zinc-900 text-white p-8 md:p-12 flex flex-col justify-end group cursor-pointer overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)` }}
            >
              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-colors duration-700 z-0"></div>
              <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                <span className="text-white/80 font-bold uppercase tracking-widest text-[10px] mb-4 block">Eventos Especiales</span>
                <div className="space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-serif font-bold leading-tight drop-shadow-lg">Próximo Business After Hours</h3>
                  <p className="text-sm lg:text-base font-light text-white/90 line-clamp-3 drop-shadow-md">
                    Networking de alto nivel en la Residencia del Embajador Británico exclusivo para miembros activos.
                  </p>
                  <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    <Link to="#" className="inline-flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest group-hover:text-white text-white/70 transition-colors">
                      Registrarse &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Insights */}
            <div
              className="flex-1 relative bg-zinc-900 text-white p-8 md:p-12 flex flex-col justify-end group cursor-pointer overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)` }}
            >
              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-colors duration-700 z-0"></div>
              <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                <span className="text-white/80 font-bold uppercase tracking-widest text-[10px] mb-4 block">Insights</span>
                <div className="space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-serif font-bold leading-tight drop-shadow-lg">Economic Report Q4</h3>
                  <p className="text-sm lg:text-base font-light text-white/90 line-clamp-3 drop-shadow-md">
                    Análisis exclusivo del crecimiento regional peruano impulsado por inversión extranjera directa y comercio.
                  </p>
                  <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    <Link to="/noticias" className="inline-flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest group-hover:text-white text-white/70 transition-colors">
                      Leer Reporte &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & KPIs Section */}
      <section ref={statsRef} className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-10">
          <div className={`grid grid-cols-1 md:grid-cols-4 gap-12 items-center transition-all duration-1000 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="md:col-span-1 space-y-2">
              <h2 className="font-serif text-3xl font-bold text-primary italic leading-tight">Impacto<br />BritCham</h2>
              <div className="w-12 h-1 bg-accent"></div>
            </div>
            <div className="flex flex-col group cursor-default">
              <span className="text-5xl font-bold text-primary transition-transform group-hover:scale-110 duration-300">{counters.socios}+</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-2">Socios Corporativos</span>
            </div>
            <div className="flex flex-col group cursor-default">
              <span className="text-5xl font-bold text-primary transition-transform group-hover:scale-110 duration-300">{counters.representantes.toLocaleString()}+</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-2">Representantes de Red</span>
            </div>
            <div className="flex flex-col group cursor-default">
              <span className="text-5xl font-bold text-primary transition-transform group-hover:scale-110 duration-300">{counters.eventos}+</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-2">Eventos Anuales</span>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Highlight (Premium Plus) - Moved after Impact */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-10">
          <p className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-12">Socios Premium y Premium Plus</p>
          <div className="relative">
            <div className="partner-scroll-container pb-4">
              <div className="partner-scroll-content items-center">
                {[logoAnglo, logoBelmond, logoBritanico, logoDiageo, logoGca, logoUpc].map((logo, index) => (
                  <img key={`logo-${index}`} src={logo} className={`${logo === logoDiageo ? 'h-24 md:h-32' : 'h-16 md:h-20'} w-auto object-contain mx-8 md:mx-12 mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity`} alt={`Partner ${index + 1}`} />
                ))}
                {[logoAnglo, logoBelmond, logoBritanico, logoDiageo, logoGca, logoUpc].map((logo, index) => (
                  <img key={`logo-dup-${index}`} src={logo} className={`${logo === logoDiageo ? 'h-24 md:h-32' : 'h-16 md:h-20'} w-auto object-contain mx-8 md:mx-12 mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity`} alt={`Partner ${index + 1}`} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .partner-scroll-container {
            display: flex;
            overflow: hidden;
            user-select: none;
          }
          
          .partner-scroll-content {
            display: flex;
            animation: scroll-left 30s linear infinite;
            will-change: transform;
          }
          
          .partner-scroll-content:hover {
            animation-play-state: paused;
          }
          
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>


      {/* Business Opportunities */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="text-accent font-bold text-[11px] uppercase tracking-widest">Business Opportunities</span>
            <h2 className="text-5xl font-serif font-bold text-primary italic leading-tight">Conectando Excelencia Británica con Ambición Peruana</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Nuestra misión es actuar como el puente definitivo para empresas que buscan expandir sus horizontes entre el Perú y el Reino Unido, ofreciendo inteligencia comercial y networking estratégico.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded shadow-sm border-l-4 border-primary">
                <h4 className="font-bold text-sm text-primary uppercase mb-2">Empresas UK</h4>
                <p className="text-xs text-gray-500">Apoyo integral para encontrar distribuidores y agentes estratégicos en Perú.</p>
              </div>
              <div className="bg-white p-6 rounded shadow-sm border-l-4 border-accent">
                <h4 className="font-bold text-sm text-accent uppercase mb-2">Empresas Peru</h4>
                <p className="text-xs text-gray-500">Misiones comerciales y acceso directo al mercado del Reino Unido.</p>
              </div>
            </div>
            <button className="bg-primary text-white px-10 py-4 rounded font-bold text-xs tracking-widest uppercase hover:bg-navy-800 transition-all shadow-xl">CONTACTAR AHORA</button>
          </div>
          <div className="relative">
            <div className="aspect-square bg-navy-900 rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/seed/bridge/800/800" className="w-full h-full object-cover opacity-80" alt="Bridge" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 hidden md:block">
              <p className="font-serif text-2xl font-bold text-primary italic">"Connecting markets for 80+ years"</p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default HomePage;
