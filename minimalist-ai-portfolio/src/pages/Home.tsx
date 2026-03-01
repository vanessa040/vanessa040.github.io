import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import Layout from '../components/Layout';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const GREETINGS = [
  "Hello",      // English
  "你好",       // Chinese
  "Ciao",       // Italian
  "Bonjour",    // French
  "こんにちは",  // Japanese
  "Hallo"       // German
];

export default function Home() {
  const containerRef = useRef(null);
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % GREETINGS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <Layout>
      <div ref={containerRef} className="max-w-7xl mx-auto px-6 md:px-12 pb-32 relative">
        {/* Subtle Ambient Aura - Lower opacity (6-14%) */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] aura-gradient rounded-full blur-3xl opacity-[0.08] pointer-events-none" />

        <header className="py-24 md:py-32 max-w-3xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ y: headerY, opacity: headerOpacity }}
            className="space-y-8"
          >
            <div className="h-12 md:h-16 flex items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={GREETINGS[greetingIndex]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-4xl md:text-5xl font-bold text-white/40 font-mono"
                >
                  {GREETINGS[greetingIndex]}.
                </motion.p>
              </AnimatePresence>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white font-mono">
              i’m Vanessa 王晓婧
            </h1>
            
            <div className="text-base text-white/60 font-sans leading-relaxed space-y-1 max-w-3xl">
              <p className="whitespace-normal break-words">蚂蚁在职体验设计师，负责 AI 理财机器人「蚂小财」的交互与视觉设计。</p>
              <p className="whitespace-normal break-words">对 AI 充满探索欲和好奇心，持续研究 AI Native 体验、意图交互与内容生成范式。</p>
              <p className="whitespace-normal break-words">用克制的设计让复杂的智能更可理解、更可信。</p>
            </div>

            <div className="pt-6">
              <Link 
                to="/about" 
                className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 rounded-full text-sm font-medium text-white transition-all duration-300 group"
              >
                About 
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 relative z-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
