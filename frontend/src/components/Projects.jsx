import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects = () => {
    const mainProjects = [
        {
            title: "Mark It – Attendance Management System",
            description: "A comprehensive full-stack web-based attendance management system developed to automate attendance tracking. It supports multiple user roles (Admin, Teacher, Student) with functionalities like managing classes, assigning courses, and marking real-time attendance. Features include role-based access control, secure JWT/Bcrypt authentication, and efficient MongoDB backend integration.",
            tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
            github: "https://github.com/Piyush12379/STUDENT_ATTENDENCE.git",
            external: "#",
            image: "/student_dashboard_ui.png"
        },
        {
            title: "Real-Time Process Monitoring Dashboard",
            description: "A web-based application that displays live system performance data such as CPU usage, memory usage, disk activity, network statistics, and running processes. Built with dynamic graphs that fetch real-time data from Node.js backend APIs to provide an interactive user experience and rapid system performance analysis.",
            tech: ["HTML/CSS", "JavaScript", "Node.js", "Express.js", "Chart.js"],
            github: "https://github.com/Piyush12379/OS-Project.git",
            external: "#",
            image: "/dashboard_screenshot.png"
        },
        {
            title: "Saanidhya (Educational Platform)",
            description: "A full-stack web platform designed to support the learning and development of specially-abled children through educational content, motivational videos, and music therapy. Features user authentication, secure feedback forms, and a responsive interface to ensure an inclusive and positive digital learning space.",
            tech: ["PHP", "MySQL", "JavaScript", "Tailwind CSS"],
            github: "https://github.com/Piyush12379/saanidhya-for-special-children.git",
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
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                            className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 group`}
                        >
                            {/* Project Image */}
                            <div className="w-full md:w-7/12 relative aspect-video glass-panel rounded-2xl overflow-hidden cursor-pointer group-hover:z-10 z-0 hover:border-primary/30 transition-all duration-700 ease-out">
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-700 z-10 mix-blend-overlay"></div>
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                            </div>

                            {/* Project Info */}
                            <div className={`w-full md:w-6/12 relative z-20 ${index % 2 === 0 ? 'md:text-right md:-ml-12' : 'md:text-left md:-mr-12'} flex flex-col justify-center`}>
                                <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Featured Project</p>
                                <h3 className="text-3xl font-black text-textMain mb-6 group-hover:text-primary transition-colors cursor-pointer drop-shadow-md">{project.title}</h3>

                                <div className={`glass-panel p-8 rounded-2xl text-textLight text-base leading-relaxed mb-6 ${index % 2 === 0 ? 'text-left md:text-right' : 'text-left'} transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)] hover:border-primary/20`}>
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
