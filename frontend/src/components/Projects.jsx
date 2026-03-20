import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects = () => {
    const mainProjects = [
        {
            title: "Student Attendance Management System",
            description: "Engineered a scalable attendance system with a modular frontend and backend architecture. Implemented secure role-based authentication using JWT and bcrypt, optimized REST APIs, and designed reusable UI components to enhance tracking efficiency.",
            tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
            github: "#",
            external: "#",
            image: "/student_dashboard_ui.png"
        },
        {
            title: "Real-Time Process Monitoring Dashboard",
            description: "Developed a real-time system monitoring dashboard displaying CPU, memory, disk, and 50+ running processes, updating every 1–2 seconds. Implemented interactive visualizations using Chart.js for quick system performance analysis.",
            tech: ["HTML/CSS", "JavaScript", "Node.js", "Chart.js"],
            github: "#",
            external: "#",
            image: "/dashboard_screenshot.png"
        },
        {
            title: "Saanidhya",
            description: "Built a full-stack educational platform supporting specially-abled children through structured learning, motivation, and music therapy. Designed a responsive interface with efficient content management.",
            tech: ["PHP", "MySQL", "JavaScript", "CSS"],
            github: "#",
            external: "#",
            image: "/education_platform_ui.png"
        }
    ];

    return (
        <section id="projects" className="section-container relative">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-bold flex items-center gap-2 mb-12">
                    <span className="text-primary font-mono text-xl">05.</span> Some Things I've Built
                    <div className="h-[1px] bg-slate-700 flex-1 ml-4 hidden sm:block"></div>
                </h2>

                <div className="flex flex-col gap-24">
                    {mainProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 group`}
                        >
                            {/* Project Image */}
                            <div className="w-full md:w-7/12 relative aspect-video bg-[#0f172a] rounded shadow-2xl overflow-hidden cursor-pointer group-hover:z-10 z-0 border border-slate-700/50">
                                <div className="absolute inset-0 bg-primary/40 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-multiply"></div>
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                            </div>

                            {/* Project Info */}
                            <div className={`w-full md:w-6/12 relative z-20 ${index % 2 === 0 ? 'md:text-right md:-ml-12' : 'md:text-left md:-mr-12'} flex flex-col justify-center`}>
                                <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                                <h3 className="text-2xl font-bold text-textMain mb-6 group-hover:text-primary transition-colors cursor-pointer">{project.title}</h3>

                                <div className={`bg-[#112240] p-6 rounded shadow-xl text-textLight text-base leading-relaxed mb-6 ${index % 2 === 0 ? 'text-left md:text-right' : 'text-left'} backdrop-blur-sm bg-opacity-90`}>
                                    <p>{project.description}</p>
                                </div>

                                <ul className={`flex flex-wrap gap-4 font-mono text-xs text-textLight mb-6 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                    {project.tech.map((t, i) => (
                                        <li key={i}>{t}</li>
                                    ))}
                                </ul>

                                <div className={`flex items-center gap-4 text-textMain ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                    <a href={project.github} className="hover:text-primary transition-colors hover:-translate-y-1 transform duration-300"><Github size={20} /></a>
                                    <a href={project.external} className="hover:text-primary transition-colors hover:-translate-y-1 transform duration-300"><ExternalLink size={20} /></a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
