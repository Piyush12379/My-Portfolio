import React from 'react';
import { motion } from 'framer-motion';
import { Database, Layout, Server, Code, GitBranch, Activity, Network } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Programming',
            icon: <Code size={22} />,
            color: '#64ffda',
            bgGlow: 'rgba(100, 255, 218, 0.08)',
            skills: ['Python', 'C', 'C++', 'Java', 'JavaScript', 'PHP']
        },
        {
            title: 'Frontend',
            icon: <Layout size={22} />,
            color: '#61DAFB',
            bgGlow: 'rgba(97, 218, 251, 0.08)',
            skills: ['HTML', 'CSS', 'Tailwind CSS', 'React.js']
        },
        {
            title: 'Backend',
            icon: <Server size={22} />,
            color: '#339933',
            bgGlow: 'rgba(51, 153, 51, 0.08)',
            skills: ['Node.js', 'Express.js', 'PHP']
        },
        {
            title: 'Database',
            icon: <Database size={22} />,
            color: '#47A248',
            bgGlow: 'rgba(71, 162, 72, 0.08)',
            skills: ['MySQL', 'MongoDB', 'PostgreSQL']
        },
        {
            title: 'Tools',
            icon: <GitBranch size={22} />,
            color: '#F05032',
            bgGlow: 'rgba(240, 80, 50, 0.08)',
            skills: ['Git', 'GitHub', 'VS Code']
        },
        {
            title: 'Libraries',
            icon: <Activity size={22} />,
            color: '#a78bfa',
            bgGlow: 'rgba(167, 139, 250, 0.08)',
            skills: ['Chart.js', 'Recharts']
        },
        {
            title: 'Core Concepts',
            icon: <Network size={22} />,
            color: '#facc15',
            bgGlow: 'rgba(250, 204, 21, 0.08)',
            skills: ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks']
        }
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: 'easeOut'
            }
        })
    };

    return (
        <section id="skills" className="section-container relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-bold flex items-center gap-2 mb-4">
                    <span className="text-primary font-mono text-xl">01.5</span> Tech Stack
                    <div className="h-[1px] bg-slate-700 flex-1 ml-4 hidden sm:block"></div>
                </h2>
                <p className="text-textLight text-base mb-12 max-w-2xl">
                    Technologies and tools I use to bring ideas to life.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-30px" }}
                            className={`group relative rounded-2xl border border-white/5 p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)] cursor-default overflow-hidden bg-darker/40 backdrop-blur-md ${index === skillCategories.length - 1 ? 'sm:col-span-1 col-span-2' : ''
                                }`}
                            style={{
                                background: `linear-gradient(135deg, ${category.bgGlow}, transparent 70%), rgba(10,10,10,0.4)`,
                            }}
                            whileHover={{
                                borderColor: `${category.color}50`,
                            }}
                        >
                            {/* Subtle glow on hover */}
                            <div
                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                style={{
                                    boxShadow: `inset 0 0 50px ${category.bgGlow}`,
                                }}
                            ></div>

                            {/* Icon + Title */}
                            <div className="flex items-center gap-3 mb-4 relative z-10">
                                <div
                                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                                    style={{
                                        backgroundColor: `${category.color}15`,
                                        color: category.color,
                                    }}
                                >
                                    {category.icon}
                                </div>
                                <h4
                                    className="font-bold text-sm uppercase tracking-wider transition-colors duration-300"
                                    style={{ color: category.color }}
                                >
                                    {category.title}
                                </h4>
                            </div>

                            {/* Skills Tags */}
                            <div className="flex flex-wrap gap-1.5 relative z-10">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-300 bg-slate-800/80 border border-slate-700/40 group-hover:border-slate-600/60 transition-all duration-300 hover:text-white"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
