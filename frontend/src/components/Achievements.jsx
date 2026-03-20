import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code2 } from 'lucide-react';

const Achievements = () => {
    return (
        <section id="achievements" className="section-container relative">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-bold flex items-center gap-2 mb-12">
                    <span className="text-primary font-mono text-xl">04.</span> Milestones & Achievements
                    <div className="h-[1px] bg-slate-700 flex-1 ml-4 hidden sm:block"></div>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="glass-panel p-8 rounded-2xl flex flex-col gap-4 items-start relative overflow-hidden group hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:bg-primary/20 transition-colors duration-500 blur-xl"></div>
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-2 shadow-inner border border-primary/20">
                            <Award size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-textLight">5-Star HackerRank</h3>
                        <p className="text-textLight leading-relaxed">
                            Achieved a <span className="text-primary font-semibold drop-shadow-md">5-star rating</span> in C++ on HackerRank, showcasing strong programming skills and mastery over data structures.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="glass-panel p-8 rounded-2xl flex flex-col gap-4 items-start relative overflow-hidden group hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:bg-primary/20 transition-colors duration-500 blur-xl"></div>
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-2 shadow-inner border border-primary/20">
                            <Code2 size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-textLight">400+ DSA Problems</h3>
                        <p className="text-textLight leading-relaxed">
                            Solved over <span className="text-primary font-semibold drop-shadow-md">400+ DSA problems</span> on LeetCode and GeeksforGeeks, demonstrating consistency and problem-solving ability.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Achievements;
