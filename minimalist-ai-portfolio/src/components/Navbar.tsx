import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Navbar() {
  const location = useLocation();
  
  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#05060A]/80 backdrop-blur-xl border-b border-white/[0.06] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
        <div />
        
        <div className="flex gap-8">
          {links.map((link) => {
            const isActive = link.path === '/' 
              ? location.pathname === '/' || location.pathname.startsWith('/projects')
              : location.pathname === link.path;
              
            return (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`relative text-sm font-medium transition-colors duration-200 ${isActive ? 'text-white' : 'text-white/60 hover:text-white'}`}
              >
                {link.label}
                {isActive && (
                  <motion.div 
                    layoutId="underline"
                    className="absolute -bottom-[21px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent"
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
