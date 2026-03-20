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
        { name: 'Projects', path: '/#projects' },
        { name: 'Contact', path: '/#contact' },
    ];

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/80 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="text-primary font-bold text-xl flex items-center gap-2">
                    <span className="w-10 h-10 border-2 border-primary rounded-full flex justify-center items-center">P</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, i) => (
                        <a
                            key={i}
                            href={link.path}
                            className="nav-link !text-sm flex items-center gap-1"
                        >
                            <span className="text-primary">0{i + 1}.</span>
                            {link.name}
                        </a>
                    ))}
                    <Link to="/terminal" className="ml-4 p-2 text-primary border border-primary/50 rounded hover:bg-primary/10 transition-colors" title="Launch Terminal">
                        <Terminal size={20} />
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-primary"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
