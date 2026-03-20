import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TerminalApp from "./pages/TerminalApp";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Navbar from "./components/Navbar";
import { Download } from "lucide-react";
import Cursor from "./components/Cursor";

function App() {
  return (
    <div className="relative min-h-screen bg-background text-textMain selection:bg-primary/30 selection:text-white font-sans overflow-x-hidden">
      <Cursor />
      
      {/* God Level Ambient Background */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-background">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/10 blur-[120px] mix-blend-screen animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] mix-blend-screen animate-blob" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[150px] mix-blend-screen animate-blob" style={{ animationDelay: "4s" }}></div>
        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      </div>

      <Navbar />

      {/* Floating Resume Button */}
      <a
        href="/PiyushCv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-6 md:bottom-10 md:right-10 z-[100] flex items-center justify-center gap-2 bg-primary text-background px-6 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(0,0,0,0.5)] shadow-primary/50 hover:scale-105 hover:bg-white hover:text-primary hover:shadow-primary/80 transition-all duration-300 group ring-2 ring-transparent hover:ring-primary backdrop-blur-md"
      >
        <Download size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
        <span>Resume</span>
      </a>

      <main className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terminal" element={<TerminalApp />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
