import React from 'react';
import { motion } from 'framer-motion';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Achievements from '../components/Achievements';
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
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-primary font-mono text-sm md:text-base tracking-wider"
                    >
                        Hi, my name is
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-textMain"
                    >
                        Piyush Raj.
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold text-textLight mt-2"
                    >
                        I build things for the web.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-textLight max-w-2xl text-lg mt-4 leading-relaxed"
                    >
                        I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on finishing my B.Tech in CSE at Lovely Professional University.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-8 flex gap-4 items-center"
                    >
                        <a href="#projects" className="px-7 py-4 border border-primary text-primary rounded font-mono hover:bg-primary/10 transition-colors">
                            Check out my projects!
                        </a>
                        <Link to="/terminal" className="px-7 py-4 border border-slate-600 text-textMain rounded font-mono hover:border-primary transition-colors flex items-center gap-2 bg-dark/50">
                            <Terminal size={18} /> OS Mode
                        </Link>
                    </motion.div>
                </div>
            </section>

            <About />
            <Skills />
            <Experience />
            <Education />
            <Achievements />
            <Projects />
            <Contact />

        </div>
    );
};

export default Home;
