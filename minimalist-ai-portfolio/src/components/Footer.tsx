import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/[0.08] mt-20 bg-[#05060A]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-white/40">
          © {new Date().getFullYear()} Alex.AI Portfolio. All rights reserved.
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Twitter</a>
          <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
