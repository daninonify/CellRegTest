// import React from 'react'

// const Login = () => {
//   return (
//     <div>Login</div>
//   )
// }

// export default Login




import { useState, useEffect } from "react";
import axios from 'axios'


const BIULogo = () => (
  <div className="flex flex-col items-center mb-8">
    <div className="flex items-center gap-3">
      <div className="w-16 h-16 rounded-full flex items-center justify-center border-2">
        <span className="text-black font-black text-xl">Image</span>
      </div>
      <div className="flex flex-col">
        <span className="text-[#1a2a5e] font-bold text-lg leading-tight tracking-wide">BENSON IDAHOSA</span>
        <span className="text-[#1a2a5e] font-black font-thin text-3xl leading-tight tracking-widest">UNIVERSITY</span>
        <span className="text-[#1a2a5e] text-black text-xs font-medium">CAMPUS • LIFE • DIVISION</span>
      </div>
    </div>
  </div>
);

const Login = () => {
  const [matric, setMatric] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


  const handleLoadSim = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };




  


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <BIULogo />

      <div className="w-full max-w-md bg-[#1a2a5e] rounded-xl shadow-2xl p-10">
        <h2 className="text-white text-center text-3xl font-semibold mb-7 tracking-wide">
          Login
        </h2>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Matriculation Number..."
            value={matric}
            onChange={(e) => setMatric(e.target.value)}
            className="w-full px-4 py-3 rounded-md bg-gray-50 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <input
            type="password"
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-md bg-gray-50 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
        </div>

        <button
          onClick={handleLoadSim}
          disabled={loading}
          className="mt-6 w-full py-3 rounded-md bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600 text-white font-semibold text-base tracking-wide transition-all duration-200 shadow-md disabled:opacity-70"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="mt-5 text-center text-gray-300 text-sm cursor-pointer hover:text-yellow-400 transition">
          Forgot your email or password?
        </p>
      </div>
    </div>
  );
}


export default Login