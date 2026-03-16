// import React from 'react'

// const Login = () => {
//   return (
//     <div>Login</div>
//   )
// }

// export default Login




import { useState, useEffect } from "react";
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


const BIULogo = () => (
  <div className="flex flex-col items-center mb-8">
    <div className="flex items-center gap-3">
      <div className="w-16 h-16 rounded-full flex items-center justify-center border-2">
        <img 
          src="/biulogo.png" 
          alt="Placeholder avatar" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-[#1a2a5e] dark:text-white font-bold text-lg leading-tight tracking-wide">BENSON IDAHOSA</span>
        <span className="text-[#1a2a5e] dark:text-white font-black font-thin text-3xl leading-tight tracking-widest">UNIVERSITY</span>
        <span className="text-[#1a2a5e] dark:text-gray-300 text-black text-xs font-medium">CAMPUS • LIFE • DIVISION</span>
      </div>
    </div>
  </div>
);

const Login = () => {
  const [matric, setMatric] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const handleLoadSim = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  const triggerLogin = () => {
    if (loading) return;
    handleLoadSim();
    navigate('/home');
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      triggerLogin();
    }
  };




  


  return (
    <div className="relative min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center px-4">
      {/* light-only show, dark switch */}
      <button
        onClick={() => setDarkMode((m) => !m)}
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
      >
        {darkMode ? '🌞' : '🌙'}
      </button>

      <BIULogo />

      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-10">
        <h2 className="text-gray-900 dark:text-white text-center text-3xl font-semibold mb-7 tracking-wide">
          Login
        </h2>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Matriculation Number..."
            value={matric}
            onChange={(e) => setMatric(e.target.value)}
            onKeyDown={handleInputKeyDown}
            className="w-full px-4 py-3 rounded-full bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          {/* <input
            type="password"
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-md bg-gray-50 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          /> */}
        </div>

        <button
          onClick={triggerLogin}
          disabled={loading}
          className="mt-6 w-full py-3 rounded-full bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600 text-white font-semibold text-base tracking-wide transition-all duration-200 shadow-md disabled:opacity-70"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <Link
          to="/register"
          className="mt-5 block text-center text-gray-600 dark:text-gray-400 text-sm hover:text-yellow-400 transition"
        >
          Click here to register!
        </Link>
      </div>
    </div>
  );
}


export default Login