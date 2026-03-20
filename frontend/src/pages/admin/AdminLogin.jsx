import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Placeholder: Call actual login API here later
            // const res = await axios.post('/api/admin/login', { username, password });

            // For now, mock a successful login if it's admin/admin123
            if (username === 'admin' && password === 'admin123') {
                localStorage.setItem('adminToken', 'mock-jwt-token');
                navigate('/admin/dashboard');
            } else {
                setError('Invalid credentials');
            }
        } catch (err) {
            setError('Login failed');
        }
    };

    return (
        <div className="min-h-screen pt-24 px-6 flex items-center justify-center section-container">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md bg-[#112240] p-8 rounded shadow-2xl border border-slate-700"
            >
                <div className="flex flex-col items-center mb-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex justify-center items-center text-primary mb-4">
                        <Lock size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-textMain">Admin Access</h2>
                    <p className="text-textLight font-mono text-sm mt-2">Identify yourself to proceed</p>
                </div>

                {error && <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 mb-6 rounded text-sm text-center font-mono">{error}</div>}

                <form onSubmit={handleLogin} className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-mono text-textLight">Username</label>
                        <input
                            type="text"
                            required
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            className="bg-dark border border-slate-700 rounded p-3 text-textMain focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-mono text-textLight">Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="bg-dark border border-slate-700 rounded p-3 text-textMain focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>

                    <button type="submit" className="w-full py-4 mt-4 bg-primary text-dark font-bold rounded hover:bg-primary/90 transition-colors">
                        Authenticate
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default AdminLogin;
