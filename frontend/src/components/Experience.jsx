import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id="experience" className="section-container relative">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-bold flex items-center gap-2 mb-12">
                    <span className="text-primary font-mono text-xl">02.</span> Where I've Worked & Trained
                    <div className="h-[1px] bg-slate-700 flex-1 ml-4 hidden sm:block"></div>
                </h2>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Left Timeline */}
                    <div className="border-l-2 border-primary/20 pl-6 md:w-1/3 space-y-8 relative">
                        <div className="relative group">
                            <div className="absolute -left-[31px] top-1 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-[0_0_10px_rgba(56,189,248,0.5)] group-hover:scale-125 transition-transform duration-300"></div>
                            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-textLight cursor-pointer transition-colors">ByteXL</h3>
                            <p className="font-mono text-sm tracking-widest text-primary uppercase mt-1">Jun 2025 - Jul 2025</p>
                        </div>
                        {/* More timeline items could go here */}
                    </div>

                    {/* Right Content */}
                    <div className="md:w-2/3">
                        <h4 className="text-xl font-bold text-textMain">
                            Data Structures and Algorithms (DSA) Trainee <span className="text-primary">@ ByteXL</span>
                        </h4>
                        <p className="font-mono text-sm text-textLight mt-1">Jun 2025 - Jul 2025</p>

                        <div className="mt-4 space-y-3 text-textLight text-base leading-relaxed">
                            <p className="flex items-start gap-3 before:content-['▹'] before:text-primary">
                                Completed an intensive industry-oriented training program focused on Data Structures, Algorithms, and C++ development.
                            </p>
                            <p className="flex items-start gap-3 before:content-['▹'] before:text-primary">
                                Gained hands-on experience with OOP, STL, time-complexity analysis, and algorithm optimization, practicing major DSA topics like Trees, Graphs, DP, and more.
                            </p>
                            <p className="flex items-start gap-3 before:content-['▹'] before:text-primary">
                                Built a Hospital Appointment Management System using C++ and Priority Queue (Max-Heap) to schedule patient appointments based on urgency.
                            </p>
                            <p className="flex items-start gap-3 before:content-['▹'] before:text-primary">
                                Strengthened knowledge of competitive coding patterns, debugging, and real-world algorithmic thinking.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
