import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import Layout from '../components/Layout';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];
  
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  if (!project) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center">
          <h1 className="text-2xl font-semibold mb-4">Project not found</h1>
          <Link to="/" className="text-black/60 hover:text-black underline">Back to Home</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="max-w-7xl mx-auto px-6 md:px-12 pb-32 relative">
        {/* Subtle Ambient Aura */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] aura-gradient rounded-full blur-3xl opacity-10 pointer-events-none" />

        {/* Hero */}
        <header className="py-20 md:py-32 max-w-5xl relative z-10">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-sm font-medium text-white/40 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-8 ${
              ['ant-fortune-ai', 'ant-fortune-agi', 'ant-fortune-services', 'meituan-digital-currency-v4', 'financial-material-review-system'].includes(project.slug)
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#33C1FF] to-[#D184FF]' 
                : 'text-white/90'
            }`}
          >
            {project.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-3xl text-white/50 leading-relaxed font-light max-w-4xl"
          >
            {project.tagline}
          </motion.p>
        </header>

        {/* Metadata */}
        <div className="grid grid-cols-2 gap-10 border-y border-white/[0.08] py-10 mb-24 relative z-10">
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-white/30 mb-3">Timeline</h3>
            <p className="text-base font-medium text-white/80">{project.meta.timeline}</p>
          </div>
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-white/30 mb-3">Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {project.meta.keywords.map(kw => (
                <span key={kw} className="text-xs font-medium text-white/50 bg-white/[0.05] px-2.5 py-1 rounded-full border border-white/[0.05]">{kw}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Narrative Sections */}
        <div className="max-w-3xl mx-auto space-y-24 mb-32 relative z-10">
          {project.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-6">
                {section.title}
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed text-white/80 font-light">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        {/* Gallery */}
        <div className={`mb-32 relative z-10 ${['ant-fortune-services', 'financial-material-review-system', 'meituan-digital-currency-v4'].includes(project.slug) ? 'space-y-12' : 'space-y-8'}`}>
          {project.gallery.map((item, idx) => (
            <div key={idx} className={`${item.fullWidth ? 'w-full' : 'max-w-5xl mx-auto'}`}>
              <div>
                <img 
                  src={item.src} 
                  alt={item.caption || `Gallery image ${idx + 1}`} 
                  className={`w-full h-auto ${['ant-fortune-services', 'financial-material-review-system', 'meituan-digital-currency-v4'].includes(project.slug) ? 'border border-white/10 rounded-lg' : ''}`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              {item.caption && (
                <p className="mt-4 text-sm text-white/40 text-center font-medium">
                  {item.caption}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Footer */}
        <div className="border-t border-white/[0.08] pt-16 flex justify-between items-center relative z-10">
          {prevProject ? (
            <Link 
              to={`/projects/${prevProject.slug}`}
              className="group flex flex-col items-start"
            >
              <span className="text-xs font-medium uppercase tracking-wider text-white/40 mb-1 group-hover:text-white transition-colors">Previous</span>
              <span className="text-lg font-medium flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                {prevProject.title}
              </span>
            </Link>
          ) : <div />}

          {nextProject ? (
            <Link 
              to={`/projects/${nextProject.slug}`}
              className="group flex flex-col items-end"
            >
              <span className="text-xs font-medium uppercase tracking-wider text-white/40 mb-1 group-hover:text-white transition-colors">Next</span>
              <span className="text-lg font-medium flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
                {nextProject.title}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ) : <div />}
        </div>
      </article>
    </Layout>
  );
}
