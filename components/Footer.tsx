import React from 'react';
import { FacebookIcon, InstagramIcon } from './Icons';
import logoImage from '../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <img src={logoImage} alt="TAM Logo" className="h-10 w-10 bg-white rounded-md p-1" />
              <span className="text-2xl font-bold">TAM</span>
            </div>
            <p className="text-slate-400">Tecnologías Avanzadas de México</p>
            <p className="text-slate-400">Cuautitlán Izcalli, C.P. 54750, Estado de México, México.</p>
          </div>
          <div>
            <p className="font-semibold mb-4">Síganos en redes</p>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <FacebookIcon />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-700 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} TAM - Tecnologías Avanzadas de México. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
