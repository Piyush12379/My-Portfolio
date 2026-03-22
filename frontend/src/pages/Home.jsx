import React from 'react';
import { motion } from 'framer-motion';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Achievements from '../components/Achievements';
import Certifications from '../components/Certifications';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center section-container relative">
                <div className="w-full max-w-4xl flex flex-col items-start justify-center gap-4">
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="text-primary font-mono text-sm tracking-[0.2em] uppercase mb-2"
                    >
                        Hi, my name is
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="text-6xl md:text-8xl lg:text-[7.5rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-textMain to-textLight tracking-tight pb-2"
                    >
                        Piyush Raj.
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                        className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-textLight to-gray-500 mt-0 leading-[1.1]"
                    >
                        I build objects for the web.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                        className="text-textLight max-w-2xl text-lg md:text-xl mt-8 leading-relaxed font-light"
                    >
                      I'm a full stack web developer specializing in building (and occasionally designing) exceptional, clean, and user-friendly digital experiences. Currently, I'm focused on completing my B.Tech in Computer Science and Engineering at Lovely Professional University.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                        className="mt-12 flex flex-wrap gap-6 items-center"
                    >
                        <a href="#projects" className="group relative px-8 py-4 font-mono font-medium text-white rounded-full overflow-hidden shadow-[0_0_20px_rgba(56,189,248,0.15)] hover:shadow-[0_0_30px_rgba(56,189,248,0.3)] transition-all duration-300">
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/80 to-secondary/80 transition-all duration-300 ease-out group-hover:scale-105"></span>
                            <span className="absolute inset-0 w-full h-full border border-white/20 rounded-full transition-all duration-300 ease-out group-hover:border-white/50"></span>
                            <span className="relative z-10 flex items-center gap-2">View Projects</span>
                        </a>
                        <Link to="/terminal" className="px-8 py-4 border border-white/10 text-textMain rounded-full font-mono hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 flex items-center gap-2 bg-dark/20 backdrop-blur-md group shadow-lg">
                            <Terminal size={18} className="group-hover:text-primary transition-colors" /> OS Mode
                        </Link>
                    </motion.div>
                </div>
            </section>

            <About />
            <Skills />
            <Experience />
            <Education />
            <Achievements />
            <Certifications />
            <Projects />
            <Contact />

        </div>
    );
};

export default Home;
