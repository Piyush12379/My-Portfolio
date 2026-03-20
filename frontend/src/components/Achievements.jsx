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
                        className="bg-[#112240] p-8 rounded shadow-2xl border border-slate-700/50 flex flex-col gap-4 items-start relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:bg-primary/10 transition-colors"></div>
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-2">
                            <Award size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-textMain">5-Star HackerRank</h3>
                        <p className="text-textLight leading-relaxed">
                            Achieved a <span className="text-primary font-semibold">5-star rating</span> in C++ on HackerRank, showcasing strong programming skills and mastery over data structures.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-[#112240] p-8 rounded shadow-2xl border border-slate-700/50 flex flex-col gap-4 items-start relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:bg-primary/10 transition-colors"></div>
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-2">
                            <Code2 size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-textMain">400+ DSA Problems</h3>
                        <p className="text-textLight leading-relaxed">
                            Solved over <span className="text-primary font-semibold">400+ DSA problems</span> on LeetCode and GeeksforGeeks, demonstrating consistency and problem-solving ability.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Achievements;
