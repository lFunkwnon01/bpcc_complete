
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white flex items-center justify-center rounded">
                <svg className="w-8 h-8" fill="#243875" viewBox="0 0 48 48"><path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"></path></svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-2xl font-bold">BPCC</span>
                <span className="text-[10px] font-bold tracking-tighter opacity-60 uppercase">British Peruvian Chamber of Commerce</span>
              </div>
            </div>
            <p className="text-white/60 text-sm max-w-xs leading-relaxed">
              Liderando la relación comercial bilateral a través del fomento de la inversión, el networking estratégico y el desarrollo empresarial sostenible.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h5 className="font-serif text-lg font-bold">Institución</h5>
            <ul className="flex flex-col gap-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Directorio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gobernanza</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Transparencia</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h5 className="font-serif text-lg font-bold">Servicios</h5>
            <ul className="flex flex-col gap-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Comercio Exterior</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Networking</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Certificaciones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Eventos</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h5 className="font-serif text-lg font-bold">Newsletter</h5>
            <p className="text-xs text-white/60">Suscríbase para recibir las últimas actualizaciones económicas.</p>
            <div className="flex flex-col gap-3">
              <input type="email" placeholder="Su correo electrónico" className="bg-white/10 border-none rounded p-3 text-sm placeholder:text-white/40 focus:ring-2 focus:ring-accent" />
              <button className="bg-accent text-white font-bold text-xs p-3 rounded tracking-widest uppercase hover:brightness-110 transition-all">SUSCRIBIRSE</button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-white/40 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} BRITISH PERUVIAN CHAMBER OF COMMERCE. TODOS LOS DERECHOS RESERVADOS.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
