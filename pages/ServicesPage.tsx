
import React from 'react';
import { useParams } from 'react-router-dom';
import { MOCK_SERVICES } from '../mockData';

const ServicesPage: React.FC = () => {
  const { slug } = useParams();

  const renderLanding = () => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {MOCK_SERVICES.map(service => (
          <div key={service.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group cursor-pointer">
            <span className="text-5xl mb-6 block group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
            <h3 className="text-2xl font-serif font-bold text-primary mb-3 italic group-hover:text-accent transition-colors">{service.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">{service.description}</p>
            <ul className="space-y-2 mb-8">
              {service.bullets.map((b, i) => (
                <li key={i} className="text-xs font-semibold text-gray-500 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div> {b}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 bg-primary text-white rounded-sm font-bold text-[10px] tracking-widest uppercase hover:bg-accent transition-all">Solicitar Información</button>
          </div>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <section className="mt-24 bg-gradient-to-br from-primary to-navy-900 rounded-3xl p-16 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-6 italic">¿Por qué elegir BritCham Peru?</h2>
          <p className="text-lg text-white/80 leading-relaxed mb-12">
            Como la institución líder en el fortalecimiento de las relaciones comerciales entre Perú y el Reino Unido,
            ofrecemos acceso privilegiado a redes empresariales, conocimiento especializado del mercado bilateral,
            y el respaldo de la Embajada Británica.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gold mb-2">75+</div>
              <div className="text-sm text-white/70 uppercase tracking-widest">Años de Trayectoria</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">200+</div>
              <div className="text-sm text-white/70 uppercase tracking-widest">Empresas Socias</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">50+</div>
              <div className="text-sm text-white/70 uppercase tracking-widest">Eventos Anuales</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  return (
    <div className="py-20 min-h-screen bg-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <header className="mb-16 text-center">
          <span className="text-primary font-bold text-[11px] uppercase tracking-[0.3em] block mb-4">Business Solutions</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary italic mb-6">Servicios Comerciales</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Desbloqueamos el potencial de su negocio mediante servicios de consultoría estratégica y eventos de alto perfil,
            diseñados específicamente para facilitar el comercio bilateral entre Perú y el Reino Unido.
          </p>
        </header>

        {slug ? (
          <div className="bg-white p-20 rounded-3xl shadow-2xl animate-fadeIn">
            <h2 className="text-4xl font-serif font-bold text-primary mb-8 italic">Detalle de {slug.replace('-', ' ')}</h2>
            <p className="text-gray-500">Contenido detallado del servicio comercial disponible próximamente.</p>
          </div>
        ) : renderLanding()}

        {/* Global CTA */}
        <section className="mt-24 text-center space-y-6 bg-white p-12 rounded-3xl border border-gray-200">
          <h2 className="text-3xl font-serif font-bold text-primary italic">¿Necesita una solución personalizada?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Nuestro equipo de desarrollo empresarial está listo para diseñar servicios a medida que se alineen
            perfectamente con sus objetivos estratégicos en el mercado peruano o británico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="bg-accent text-white px-10 py-4 rounded-sm font-bold text-xs tracking-widest uppercase shadow-xl hover:brightness-110 transition-all">Agendar Reunión</button>
            <button className="bg-white border-2 border-primary text-primary px-10 py-4 rounded-sm font-bold text-xs tracking-widest uppercase hover:bg-primary hover:text-white transition-all">Contactar Equipo</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;
