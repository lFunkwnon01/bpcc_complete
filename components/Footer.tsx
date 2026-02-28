
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
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 mr-4">
              <a href="https://www.instagram.com/britcham.pe/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.56.216.96.474 1.38.894.42.42.678.82.894 1.38.164.422.358 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.216.56-.474.96-.894 1.38-.42.42-.82.678-1.38.894-.422.164-1.057.358-2.227.412-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.56-.216-.96-.474-1.38-.894-.42-.42-.678-.82-.894-1.38-.164-.422-.358-1.057-.412-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.216-.56.474-.96.894-1.38.42-.42.82-.678 1.38-.894.422-.164 1.057-.358 2.227-.412 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.741 0 12s.014 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126s1.384 1.078 2.126 1.384c.766.296 1.636.499 2.913.558C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384s1.078-1.384 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.012-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126s-1.384-1.078-2.126-1.384c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.259 0 12 0zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162S15.403 5.838 12 5.838zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.44-.645 1.44-1.44s-.644-1.44-1.44-1.44z" /></svg>
              </a>
              <a href="https://www.facebook.com/CamaraPeruanoBritanica" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/camaraperuanobritanica/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
