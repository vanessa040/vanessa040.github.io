import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Project } from '../data/projects';
import { ArrowRight } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link to={`/projects/${project.slug}`} className="group block h-full">
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative glass-panel-apple rounded-2xl overflow-hidden transition-all duration-500 h-full flex flex-col group-hover:border-white/20 group-hover:shadow-blue-500/10"
      >
        {/* Subtle gradient border on hover */}
        <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-tr from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }} />
        
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="aspect-[4/3] overflow-hidden bg-[#1A1B1F] relative">
          <ImageWithFallback
            src={project.cover}
            alt={project.title}
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700"
            referrerPolicy="no-referrer"
            fallback={
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-white/[0.06] to-white/[0.02] text-white/35 text-sm uppercase tracking-[0.2em]">
                Cover
              </div>
            }
          />
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {(project.tags || [project.category]).map((tag, index) => (
              <span key={index} className="inline-block px-3 py-1 bg-black/40 backdrop-blur-md text-[10px] uppercase tracking-wider font-medium rounded-full text-white/90 shadow-sm border border-white/10">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10">
          <div className="flex justify-between items-start mb-1">
            {project.time && (
              <span className="text-xs font-mono text-white/40 tracking-wide">
                {project.time}
              </span>
            )}
          </div>
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-semibold tracking-tight text-white/90 group-hover:text-white transition-colors">
              {project.title}
            </h3>
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              whileHover={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
            </motion.div>
          </div>
          
          <p className="text-white/50 text-sm leading-relaxed mb-6 flex-grow font-medium group-hover:text-white/70 transition-colors">
            {project.tagline}
          </p>

          <motion.div
            className="text-[11px] font-semibold text-white/40 uppercase tracking-widest mt-auto flex items-center gap-1 group-hover:text-white/90 transition-colors"
            initial={{ opacity: 0.85, y: 6 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            View case <ArrowRight className="w-3 h-3 ml-1" />
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}
