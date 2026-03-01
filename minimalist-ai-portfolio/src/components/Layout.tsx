import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import MouseSpotlight from './MouseSpotlight';
import { motion } from 'motion/react';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#05060A] text-[#F5F5F7] font-sans selection:bg-white/20 relative overflow-hidden">
      <MouseSpotlight />
      <Navbar />
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="pt-24 min-h-[calc(100vh-80px)] relative z-10"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
