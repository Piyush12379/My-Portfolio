import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Terminal, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', path: '/#about' },
        { name: 'Experience', path: '/#experience' },
        { name: 'Education', path: '/#education' },
        { name: 'Achievements', path: '/#achievements' },
        { name: 'Certifications', path: '/#certifications' },
        { name: 'Projects', path: '/#projects' },
        { name: 'Contact', path: '/#contact' },
    ];

    return (
        <header className="fixed top-0 w-full z-50 flex justify-center py-6 pointer-events-none">
            <div className={`pointer-events-auto transition-all duration-500 ease-out flex justify-between items-center px-6 ${scrolled ? 'py-3 bg-darker/60 backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] rounded-full w-[95%] max-w-6xl' : 'py-2 bg-transparent w-full max-w-7xl'}`}>
                <Link to="/" className="text-primary font-bold text-xl flex items-center gap-2 group relative shrink-0">
                    <span className="w-10 h-10 border border-primary/50 text-white rounded-full flex justify-center items-center group-hover:bg-primary group-hover:border-primary group-hover:text-dark transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)]">P</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-4 lg:gap-6">
                    {navLinks.map((link, i) => (
                        <a
                            key={i}
                            href={link.path}
                            className="nav-link !text-sm flex items-center gap-1 group"
                        >
                            <span className="text-primary/70 group-hover:text-primary transition-colors text-xs font-mono mr-1">0{i + 1}.</span>
                            {link.name}
                        </a>
                    ))}
                    <Link to="/terminal" className="ml-4 p-2 text-primary border border-primary/30 rounded-full hover:bg-primary hover:text-dark hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all duration-300" title="Launch Terminal">
                        <Terminal size={18} />
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed inset-y-0 right-0 w-[75vw] bg-dark/95 backdrop-blur-xl shadow-2xl z-40 flex flex-col items-center justify-center gap-8"
                    >
                        {navLinks.map((link, i) => (
                            <a
                                key={i}
                                href={link.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className="nav-link text-lg flex flex-col items-center gap-2"
                            >
                                <span className="text-primary text-sm">0{i + 1}.</span>
                                {link.name}
                            </a>
                        ))}
                        <Link
                            to="/terminal"
                            onClick={() => setMobileMenuOpen(false)}
                            className="mt-4 px-6 py-3 text-primary border border-primary rounded hover:bg-primary/10 flex items-center gap-2 font-mono"
                        >
                            <Terminal size={18} /> OS Mode
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
