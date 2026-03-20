import React, { useState, useRef, useEffect } from 'react';

const TerminalApp = () => {
    const [history, setHistory] = useState([
        { type: 'system', content: 'Welcome to PiyushOS v1.0.0' },
        { type: 'system', content: "Type 'help' to see available commands." }
    ]);
    const [input, setInput] = useState('');
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const handleCommand = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const cmd = input.trim().toLowerCase();
        const newHistory = [...history, { type: 'user', content: `visitor@piyush-portfolio:~$ ${input}` }];

        switch (cmd) {
            case 'help':
                newHistory.push({ type: 'system', content: 'Available commands: whoami, skills, education, experience, achievements, certifications, projects, clear, contact' });
                break;
            case 'whoami':
                newHistory.push({ type: 'system', content: 'Piyush Raj - Software Engineer, Problem Solver, B.Tech CSE student at LPU.' });
                break;
            case 'skills':
                newHistory.push({ type: 'system', content: 'C++, JavaScript, React, Node.js, PHP, MongoDB, TailwindCSS' });
                break;
            case 'education':
                newHistory.push({ type: 'system', content: 'B.Tech CSE @ LPU (CGPA: 8.27)\nIntermediate @ Shivam School (77.8%)\nMatriculation @ DAV Public School (94.2%)' });
                break;
            case 'experience':
                newHistory.push({ type: 'system', content: 'DSA Trainee @ ByteXL (Jun 2025 - Jul 2025)' });
                break;
            case 'achievements':
                newHistory.push({ type: 'system', content: '⭐ 5-Star HackerRank in C++\n⭐ 400+ DSA Problems on LeetCode & GeeksforGeeks' });
                break;
            case 'certifications':
                newHistory.push({ type: 'system', content: '1. NPTEL Social Networks\n2. Master Generative AI (Infosys)\n3. Python Programming (CipherSchools)' });
                break;
            case 'projects':
                newHistory.push({ type: 'system', content: '1. Saanidhya\n2. Real-Time Process Monitor\n3. Student Attendance System' });
                break;
            case 'contact':
                newHistory.push({ type: 'system', content: 'Email: praj1230000@gmail.com | Phone: +91-7992356070 | GitHub: Piyush12379' });
                break;
            case 'clear':
                setHistory([]);
                setInput('');
                return;
            default:
                newHistory.push({ type: 'system', content: `Command not found: ${cmd}` });
        }

        setHistory(newHistory);
        setInput('');
    };

    return (
        <div className="min-h-screen pt-24 px-6 md:px-12 flex items-center justify-center section-container">
            <div className="w-full max-w-3xl h-[60vh] bg-[#0f172a] rounded-lg shadow-2xl border border-slate-700 font-mono text-sm overflow-hidden flex flex-col">
                {/* Terminal Header */}
                <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-4 text-xs text-slate-400">visitor@piyush-portfolio:~</span>
                </div>

                {/* Terminal Body */}
                <div className="p-4 flex-1 overflow-y-auto w-full">
                    <div className="flex flex-col gap-2">
                        {history.map((cmd, index) => (
                            <div key={index} className="whitespace-pre-wrap">
                                {cmd.type === 'user' ? (
                                    <span className="text-primary font-bold">{cmd.content}</span>
                                ) : (
                                    <span className="text-textMain">{cmd.content}</span>
                                )}
                            </div>
                        ))}
                        <div ref={bottomRef} />
                    </div>

                    <form onSubmit={handleCommand} className="mt-4 flex gap-2">
                        <span className="text-green-400">visitor@piyush-portfolio:~$</span>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-1 bg-transparent outline-none text-textMain border-none"
                            autoFocus
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TerminalApp;
