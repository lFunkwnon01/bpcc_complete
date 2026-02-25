
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_PARTNERS, MOCK_MEMBERSHIPS } from '../mockData';

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
      <section className="relative h-[85vh] bg-navy-900 overflow-hidden">
        {slides.map((slide, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 flex flex-col items-center justify-center text-center px-6 ${i === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-0 opacity-30">
              <img className="w-full h-full object-cover" src={slide.img} alt={slide.title} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
            <div className="relative z-10 max-w-5xl space-y-6">
              <span className="inline-block px-4 py-1 border border-white/20 text-white text-[11px] font-bold uppercase tracking-[0.4em] backdrop-blur-sm">BritCham Peru Hub</span>
              <h1 className="font-serif text-5xl md:text-8xl text-white font-bold leading-none italic">{slide.title}</h1>
              <p className="text-white/80 text-xl md:text-2xl font-light max-w-2xl mx-auto">{slide.desc}</p>
              <div className="pt-8">
                <Link to={slide.link} className="bg-accent text-white px-12 py-5 rounded-sm font-bold text-xs tracking-widest hover:brightness-110 transition-all shadow-2xl inline-block uppercase">
                  {slide.cta}
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all group"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all group"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`h-1 transition-all hover:bg-white/60 ${i === currentSlide ? 'w-12 bg-white' : 'w-12 bg-white/20'}`}
              aria-label={`Go to slide ${i + 1}`}
            >
            </button>
          ))}
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
          <p className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-12">Socios Premium Plus</p>
          <div className="relative">
            <div className="partner-scroll-container">
              <div className="partner-scroll-content">
                {MOCK_PARTNERS.map(partner => (
                  <img key={partner.id} src={partner.logoUrl} className="h-16 md:h-20 w-auto object-contain mx-8 md:mx-12" alt={partner.name} />
                ))}
                {MOCK_PARTNERS.map(partner => (
                  <img key={`${partner.id}-dup`} src={partner.logoUrl} className="h-16 md:h-20 w-auto object-contain mx-8 md:mx-12" alt={partner.name} />
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

      {/* Social Media Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-16">
            <span className="text-accent font-bold text-[11px] uppercase tracking-widest block mb-4">Nuestras Redes</span>
            <h2 className="text-4xl font-serif font-bold text-primary italic">Conéctate con BritCham Peru</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Instagram Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex flex-col hover:-translate-y-2 transition-transform duration-500">
              <div className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] p-4 flex items-center gap-3 text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.56.216.96.474 1.38.894.42.42.678.82.894 1.38.164.422.358 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.216.56-.474.96-.894 1.38-.42.42-.82.678-1.38.894-.422.164-1.057.358-2.227.412-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.56-.216-.96-.474-1.38-.894-.42-.42-.678-.82-.894-1.38-.164-.422-.358-1.057-.412-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.216-.56.474-.96.894-1.38.42-.42.82-.678 1.38-.894.422-.164 1.057-.358 2.227-.412 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.741 0 12s.014 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126s1.384 1.078 2.126 1.384c.766.296 1.636.499 2.913.558C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384s1.078-1.384 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.012-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126s-1.384-1.078-2.126-1.384c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.259 0 12 0zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162S15.403 5.838 12 5.838zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.44-.645 1.44-1.44s-.644-1.44-1.44-1.44z" /></svg>
                <span className="font-bold tracking-wider text-xs uppercase">Instagram</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-100 p-0.5">
                    <img src="https://picsum.photos/seed/britcham/100/100" className="w-full h-full rounded-full object-cover" alt="Profile" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">@britcham.pe</h4>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">5,320 Seguidores</p>
                  </div>
                </div>
                <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-gray-50 border border-gray-100">
                  <img src="https://picsum.photos/seed/insta-recent/600/600" className="w-full h-full object-cover" alt="Last Post" />
                </div>
                <p className="text-xs text-gray-600 line-clamp-2 mb-6">
                  Revive nuestro último After Office: "Networking & Planificación 2025" donde más de 50 socios compartieron...
                </p>
                <a href="https://www.instagram.com/britcham.pe/" target="_blank" rel="noopener noreferrer" className="block text-center bg-gray-50 hover:bg-gray-100 py-3 rounded text-[10px] font-bold text-primary uppercase tracking-widest border border-gray-200 transition-colors">
                  Ver en Instagram
                </a>
              </div>
            </div>

            {/* Facebook Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex flex-col hover:-translate-y-2 transition-transform duration-500">
              <div className="bg-[#1877F2] p-4 flex items-center gap-3 text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
                <span className="font-bold tracking-wider text-xs uppercase">Facebook</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-100 p-0.5">
                    <img src="https://picsum.photos/seed/britchamfb/100/100" className="w-full h-full rounded-full object-cover" alt="Profile" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">BritCham Peru</h4>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">11,200 Me gusta</p>
                  </div>
                </div>
                <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-gray-50 border border-gray-100">
                  <img src="https://picsum.photos/seed/fb-recent/600/600" className="w-full h-full object-cover" alt="Last Post" />
                </div>
                <p className="text-xs text-gray-600 line-clamp-2 mb-6">
                  Bienvenida oficial a Generación Tec, empresa peruana que se suma como nuevo miembro de la familia BritCham...
                </p>
                <a href="https://www.facebook.com/CamaraPeruanoBritanica" target="_blank" rel="noopener noreferrer" className="block text-center bg-gray-50 hover:bg-gray-100 py-3 rounded text-[10px] font-bold text-primary uppercase tracking-widest border border-gray-200 transition-colors">
                  Ver en Facebook
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex flex-col hover:-translate-y-2 transition-transform duration-500">
              <div className="bg-[#0A66C2] p-4 flex items-center gap-3 text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                <span className="font-bold tracking-wider text-xs uppercase">LinkedIn</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-100 p-0.5">
                    <img src="https://picsum.photos/seed/britchamli/100/100" className="w-full h-full rounded-full object-cover" alt="Profile" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Cámara Peruano Británica</h4>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">15,800 Seguidores</p>
                  </div>
                </div>
                <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-gray-50 border border-gray-100">
                  <img src="https://picsum.photos/seed/li-recent/600/600" className="w-full h-full object-cover" alt="Last Post" />
                </div>
                <p className="text-xs text-gray-600 line-clamp-2 mb-6">
                  Publicación: Fortaleciendo el Comercio Bilateral. Analiza nuestro reporte de oportunidades para el sector...
                </p>
                <a href="https://www.linkedin.com/company/camaraperuanobritanica/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="block text-center bg-gray-50 hover:bg-gray-100 py-3 rounded text-[10px] font-bold text-primary uppercase tracking-widest border border-gray-200 transition-colors">
                  Ver en LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
