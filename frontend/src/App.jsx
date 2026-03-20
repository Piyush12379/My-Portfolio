import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TerminalApp from "./pages/TerminalApp";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="relative min-h-screen bg-background text-textMain selection:bg-primary selection:text-background font-sans overflow-x-hidden">
      {/* Abstract dark mode background gradients */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-0 right-0 max-w-lg w-full h-[500px] bg-primary/5 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 max-w-lg w-full h-[500px] bg-blue-500/5 rounded-full blur-[120px] mix-blend-screen"></div>
      </div>

      <Navbar />

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
