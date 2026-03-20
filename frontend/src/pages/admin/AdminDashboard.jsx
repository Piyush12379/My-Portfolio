import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, LayoutDashboard, MessageSquare, Plus } from 'lucide-react';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('dashboard');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Check for mock token
        const token = localStorage.getItem('adminToken');
        if (!token) {
            navigate('/admin');
        } else {
            // Mock fetching messages
            setMessages([
                { _id: '1', name: 'John Doe', email: 'john@example.com', message: 'Hi Piyush, I loved your portfolio! Let us connect.', date: '2026-03-17' },
                { _id: '2', name: 'Recruiter', email: 'hire@tech.com', message: 'We are looking for MERN developers. Please apply.', date: '2026-03-16' }
            ]);
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        navigate('/admin');
    };

    return (
        <div className="min-h-screen bg-dark text-textMain flex flex-col pt-20">
            {/* Topbar */}
            <div className="bg-[#112240] h-16 w-full flex items-center justify-between px-8 border-b border-slate-700">
                <div className="flex gap-4 items-center">
                    <span className="w-8 h-8 rounded bg-primary text-dark font-bold font-mono flex items-center justify-center">PR</span>
                    <h2 className="font-bold text-xl tracking-wide">Admin Dashboard</h2>
                </div>
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-textLight hover:text-red-400 transition-colors bg-dark/50 px-4 py-2 rounded"
                >
                    <LogOut size={16} /> Logout
                </button>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <div className="w-64 bg-[#0a192f] border-r border-slate-700 p-6 flex flex-col gap-2">
                    <button
                        onClick={() => setActiveTab('dashboard')}
                        className={`flex items-center gap-3 p-3 rounded font-mono text-sm transition-colors ${activeTab === 'dashboard' ? 'bg-primary/10 text-primary border border-primary/20' : 'text-textLight hover:bg-slate-800'}`}
                    >
                        <LayoutDashboard size={18} /> Overview
                    </button>
                    <button
                        onClick={() => setActiveTab('messages')}
                        className={`flex items-center gap-3 p-3 rounded font-mono text-sm transition-colors ${activeTab === 'messages' ? 'bg-primary/10 text-primary border border-primary/20' : 'text-textLight hover:bg-slate-800'}`}
                    >
                        <MessageSquare size={18} /> Messages
                    </button>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-8 overflow-y-auto">
                    {activeTab === 'dashboard' && (
                        <div>
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="text-2xl font-bold">Projects Overview</h3>
                                <button className="bg-primary text-dark px-4 py-2 rounded font-bold font-mono text-sm flex items-center gap-2 hover:bg-primary/90 transition-colors">
                                    <Plus size={16} /> New Project
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-[#112240] p-6 rounded border border-slate-700 shadow-xl">
                                    <h4 className="text-textLight font-mono text-sm">Total Projects</h4>
                                    <p className="text-3xl font-bold text-primary mt-2">4</p>
                                </div>
                                <div className="bg-[#112240] p-6 rounded border border-slate-700 shadow-xl">
                                    <h4 className="text-textLight font-mono text-sm">Total Messages</h4>
                                    <p className="text-3xl font-bold text-primary mt-2">{messages.length}</p>
                                </div>
                                <div className="bg-[#112240] p-6 rounded border border-slate-700 shadow-xl">
                                    <h4 className="text-textLight font-mono text-sm">Profile Views</h4>
                                    <p className="text-3xl font-bold text-primary mt-2">1,204</p>
                                </div>
                            </div>

                            <div className="bg-[#112240] rounded border border-slate-700 shadow-xl overflow-hidden p-6 text-textLight">
                                <p className="mb-4">Project management table will render here to easily Add/Edit/Delete projects.</p>
                                <div className="h-40 border-2 border-dashed border-slate-600 rounded flex items-center justify-center opacity-50">
                                    <span className="font-mono text-sm">[Projects List Database View]</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'messages' && (
                        <div>
                            <h3 className="text-2xl font-bold mb-8">Inquiries & Messages</h3>
                            <div className="flex flex-col gap-4">
                                {messages.map((msg) => (
                                    <div key={msg._id} className="bg-[#112240] p-6 rounded border border-slate-700 shadow-xl relative group">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h4 className="font-bold text-primary text-lg">{msg.name}</h4>
                                                <p className="text-sm font-mono text-textLight">{msg.email}</p>
                                            </div>
                                            <span className="text-xs font-mono text-slate-500">{msg.date}</span>
                                        </div>
                                        <p className="text-textMain bg-dark p-4 rounded text-sm leading-relaxed border border-slate-800">{msg.message}</p>
                                        <button className="absolute top-6 right-6 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity font-mono tracking-widest text-xs hover:underline">
                                            DELETE
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
