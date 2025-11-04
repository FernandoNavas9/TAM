import React from 'react';
import { MenuIcon, TamLogo } from './Icons';

interface HeaderProps {
  toggleSidebar: () => void;
  navItems: { name: string; href: string }[];
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, navItems }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/#inicio" className="flex items-center gap-3 text-tam-blue hover:opacity-80 transition-opacity">
          <img src="/assets/logo.png" alt="TAM Logo" className="h-10 w-10" />
          <span className="text-2xl font-bold tracking-wider">TAM</span>
        </a>
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-slate-600 hover:text-tam-blue font-medium transition-colors">
              {item.name}
            </a>
          ))}
        </nav>
        <button onClick={toggleSidebar} className="md:hidden text-tam-blue" aria-label="Abrir menú">
          <MenuIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;
