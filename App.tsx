import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import BmsPage from './BmsPage';
import { BuildingIcon, CodeIcon, FactoryIcon, MailIcon } from './components/Icons';
import heroBackgroundImage from './assets/hero-background.png';
import aboutUsImage from './assets/about-us-team.png';

const MainContent: React.FC = () => (
  <>
    {/* Hero Section */}
    <section id="inicio" className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-white bg-cover bg-center" style={{ backgroundImage: `url(${heroBackgroundImage})` }}>
        <div className="absolute inset-0 bg-tam-blue bg-opacity-70"></div>
        <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Tecnologías Avanzadas de México</h1>
            <p className="text-lg md:text-2xl text-slate-200 max-w-3xl mx-auto">Innovación y eficiencia para la automatización de edificios e industrias.</p>
        </div>
    </section>

    {/* Services Section */}
    <section id="servicios" className="py-16 md:py-24 bg-tam-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-tam-blue">Nuestros Servicios</h2>
          <p className="mt-4 text-lg text-slate-600">Soluciones integrales para un mundo conectado e inteligente.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<BuildingIcon />}
            title="Automatización de Edificios (BMS)"
            description="Un Sistema de Gestión de Edificios (BMS) es el cerebro que integra y controla sistemas vitales como HVAC, iluminación y medición. Optimizamos el rendimiento de su inmueble para maximizar la eficiencia y el confort."
            benefits={[
              "Reducción de costos energéticos",
              "Aumento del confort y productividad",
              "Mantenimiento predictivo",
              "Operación centralizada y segura"
            ]}
            learnMoreHref="#bms"
          />
          <ServiceCard
            icon={<FactoryIcon />}
            title="Automatización Industrial"
            description="Implementamos soluciones robustas con PLCs e instrumentación de vanguardia para optimizar sus procesos industriales, garantizando precisión, eficiencia y confiabilidad en cada etapa de la producción."
            benefits={[
              "Aumento de la productividad",
              "Reducción de errores operativos",
              "Control preciso de variables críticas",
              "Trazabilidad completa del proceso"
            ]}
          />
          <ServiceCard
            icon={<CodeIcon />}
            title="Desarrollo de Software a la Medida"
            description="Creamos aplicaciones personalizadas para automatizar procesos únicos e integrar equipos multimarca. Transformamos datos complejos en herramientas intuitivas para la toma de decisiones estratégicas."
            benefits={[
              "Soluciones adaptadas a sus necesidades",
              "Integración de sistemas aislados",
              "Automatización de tareas repetitivas",
              "Plataformas de visualización de datos"
            ]}
          />
        </div>
      </div>
    </section>

    {/* About Us Section */}
    <section id="nosotros" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
            <img src={aboutUsImage} alt="Equipo de TAM" className="rounded-lg shadow-2xl" />
        </div>
        <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-tam-blue mb-4">Sobre TAM</h2>
            <p className="text-slate-600 text-lg mb-4">
                En Tecnologías Avanzadas de México (TAM), somos pioneros en la integración de soluciones de automatización. Nuestra misión es impulsar la eficiencia, sostenibilidad y productividad de nuestros clientes a través de tecnología de punta y un servicio de excelencia.
            </p>
            <p className="text-slate-600 text-lg">
                Con un equipo de ingenieros y desarrolladores altamente calificados, abordamos cada proyecto con un enfoque consultivo, entendiendo a fondo los desafíos para diseñar la solución más efectiva y rentable.
            </p>
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section id="contacto" className="py-16 md:py-24 bg-tam-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-tam-blue">Contacto</h2>
          <p className="mt-4 text-lg text-slate-600">¿Listo para transformar su negocio? Hablemos.</p>
        </div>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-slate-700 font-medium mb-2">Nombre</label>
                <input type="text" id="name" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-tam-light-blue focus:border-tam-light-blue transition" placeholder="Su nombre" />
              </div>
              <div>
                <label htmlFor="company" className="block text-slate-700 font-medium mb-2">Empresa</label>
                <input type="text" id="company" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-tam-light-blue focus:border-tam-light-blue transition" placeholder="Nombre de su empresa" />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-slate-700 font-medium mb-2">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-tam-light-blue focus:border-tam-light-blue transition" placeholder="su.email@ejemplo.com" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-slate-700 font-medium mb-2">Mensaje</label>
              <textarea id="message" rows={5} className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-tam-light-blue focus:border-tam-light-blue transition" placeholder="¿Cómo podemos ayudarle?"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-tam-blue text-white font-bold py-3 px-8 rounded-lg hover:bg-tam-light-blue transition-colors duration-300 flex items-center justify-center gap-2 mx-auto">
                <MailIcon />
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </>
);


const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [route, setRoute] = useState(window.location.hash || '#inicio');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#inicio');
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    if (route.startsWith('#') && route.length > 1) {
      const id = route.substring(1);
      if (id === 'bms') {
        window.scrollTo(0, 0);
      } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [route]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const renderContent = () => {
    if (route === '#bms') {
      return <BmsPage />;
    }
    return <MainContent />;
  };

  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans">
      <Header toggleSidebar={toggleSidebar} navItems={navItems} />
      <Sidebar isOpen={isSidebarOpen} closeSidebar={toggleSidebar} navItems={navItems} />

      <main>{renderContent()}</main>

      <Footer />
    </div>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  learnMoreHref?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, benefits, learnMoreHref }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
    <div className="flex-grow">
      <div className="w-16 h-16 bg-tam-light-blue text-white rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-tam-blue mb-4">{title}</h3>
      <p className="text-slate-600 mb-6">{description}</p>
    </div>
    <div className="pt-6 border-t border-slate-200">
      <h4 className="font-semibold text-slate-700 mb-3">Beneficios Clave:</h4>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            <span className="text-slate-600">{benefit}</span>
          </li>
        ))}
      </ul>
      {learnMoreHref && (
          <div className="mt-8 text-center">
            <a href={learnMoreHref} className="inline-block bg-transparent hover:bg-tam-light-blue text-tam-light-blue font-semibold hover:text-white py-2 px-6 border border-tam-light-blue hover:border-transparent rounded-lg transition-colors duration-300">
              Conoce más
            </a>
          </div>
        )}
    </div>
  </div>
);


export default App;