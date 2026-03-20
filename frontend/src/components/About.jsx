import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section-container relative">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-bold flex items-center gap-2 mb-8">
                    <span className="text-primary font-mono text-xl">01.</span> About Me
                    <div className="h-[1px] bg-slate-700 flex-1 ml-4 hidden sm:block"></div>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-textLight text-lg leading-relaxed items-center">
                    <div>
                        <p className="mb-4">
                            Hello! My name is Piyush Raj. My interest in web development and software engineering started when I began exploring how things run on the internet.
                            Since then, it's evolved into a passion for building complex, interactive, and visually stunning applications.
                        </p>
                        <p className="mb-4">
                            Currently, I am a B.Tech Computer Science student at <span className="text-primary">Lovely Professional University</span>, maintaining a CGPA of 8.27. I continuously strive to solve real-world problems. I have solved over <span className="text-primary font-bold">400+ coding problems</span> across LeetCode, GeeksforGeeks, and HackerRank to refine my problem-solving skills and algorithmic thinking.
                        </p>
                        <p>
                            I'm passionate about full-stack development, building scalable applications, and turning complex problems into elegant solutions.
                        </p>
                    </div>

                    {/* Image / Graphic */}
                    <div className="relative w-full max-w-sm mx-auto">
                        <div className="absolute inset-0 bg-primary/20 rounded-2xl z-10 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
                        <div className="relative z-20 glass-panel rounded-2xl overflow-hidden flex justify-center items-center group cursor-pointer hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]">
                            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:bg-transparent transition-all duration-500 z-10"></div>
                            <img src="/profile_picture.jpg" alt="Piyush Raj Profile" className="w-full h-auto max-h-[420px] object-cover object-top filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] relative z-0" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
