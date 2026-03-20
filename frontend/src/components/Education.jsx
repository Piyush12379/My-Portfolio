import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, BookOpen, Calendar, Award } from 'lucide-react';

const Education = () => {
    const educationData = [
        {
            institution: "Lovely Professional University",
            degree: "Bachelor of Technology - Computer Science and Engineering",
            score: "CGPA: 8.27",
            period: "Aug 2023 - Present",
            icon: <GraduationCap size={28} />,
            color: "from-blue-400 to-primary",
            active: true
        },
        {
            institution: "Shivam School Patna, Bihar",
            degree: "Intermediate (Class 12th)",
            score: "Percentage: 77.8%",
            period: "Apr 2020 - Mar 2022",
            icon: <BookOpen size={28} />,
            color: "from-purple-400 to-pink-500",
            active: false
        },
        {
            institution: "DAV Public School Patna, Bihar",
            degree: "Matriculation (Class 10th)",
            score: "Percentage: 94.2%",
            period: "Apr 2018 - Mar 2020",
            icon: <School size={28} />,
            color: "from-emerald-400 to-cyan-500",
            active: false
        }
    ];

    return (
        <section id="education" className="section-container relative">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-bold flex items-center gap-2 mb-16">
                    <span className="text-primary font-mono text-xl">03.</span> Academic Background
                    <div className="h-[1px] bg-slate-700 flex-1 ml-4 hidden sm:block"></div>
                </h2>

                <div className="relative border-l-2 border-slate-700/50 mb-12 ml-4 md:ml-8 space-y-12 pb-4">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12 group"
                        >
                            {/* Timeline Node */}
                            <div className={`absolute -left-[21px] top-1 w-10 h-10 rounded-full border-4 border-dark flex items-center justify-center transition-transform duration-500 group-hover:scale-110 z-10 ${edu.active ? 'bg-primary text-dark border-primary/30 glow-primary' : 'bg-slate-800 text-slate-400 group-hover:text-primary group-hover:border-primary/50'}`}>
                                {React.cloneElement(edu.icon, { size: 18 })}
                            </div>

                            {/* Content Card */}
                            <div className="bg-[#112240] p-6 md:p-8 rounded-xl shadow-2xl border border-slate-700/50 relative overflow-hidden group-hover:-translate-y-2 group-hover:border-primary/30 transition-all duration-500 hover:shadow-primary/5">
                                {/* Gradient Background Accent */}
                                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${edu.color} opacity-70 group-hover:opacity-100 transition-opacity`}></div>

                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 group-hover:bg-primary/10 transition-colors duration-700 translate-x-1/3 -translate-y-1/3"></div>

                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-textMain group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-textLight transition-all duration-300">
                                            {edu.institution}
                                        </h3>
                                        <p className="text-primary font-mono text-base mt-2 flex items-center gap-2">
                                            {edu.degree}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 text-textLight font-mono text-xs md:text-sm bg-dark px-3 py-1.5 rounded-full border border-slate-700/50 whitespace-nowrap h-fit shadow-inner">
                                        <Calendar size={14} className="text-primary" />
                                        {edu.period}
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-textLight mt-6 bg-dark/60 p-3 rounded-lg border border-slate-700/30 w-fit group-hover:border-slate-600 transition-colors shadow-sm">
                                    <Award size={18} className="text-yellow-500" />
                                    <span className="font-mono text-sm font-semibold tracking-wide">{edu.score}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Education;
