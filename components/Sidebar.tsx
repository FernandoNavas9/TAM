
import React from 'react';
import { CloseIcon } from './Icons';

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
  navItems: { name: string; href: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar, navItems }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeSidebar}
      ></div>
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 flex justify-between items-center border-b">
          <h2 className="text-xl font-bold text-tam-blue">Menú</h2>
          <button onClick={closeSidebar} className="text-slate-600 hover:text-tam-blue" aria-label="Cerrar menú">
            <CloseIcon />
          </button>
        </div>
        <nav className="p-6">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={closeSidebar}
                  className="block py-2 px-4 text-lg text-slate-700 rounded-md hover:bg-tam-gray hover:text-tam-blue transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
