"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';


import { AcademicCapIcon, LockClosedIcon } from '@heroicons/react/24/outline';

export default function Login() {
  const [matricNumber, setMatricNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    // Default credentials
    if (matricNumber === '23010231060' && password === 'adeyemi') {
      setError('');
      alert('Login successful!');
      router.push('/dashboard'); // Redirect to dashboard
    } else {
      setError('Invalid matric number or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/library-background.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Login Card */}
      <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 w-full max-w-md shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <AcademicCapIcon className="h-12 w-12 mx-auto text-yellow-400" />
          <h1 className="text-3xl font-bold text-white mt-4">
            Student Login
          </h1>
          <p className="text-gray-300 mt-2">Enter your credentials to access your portal</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          {/* Matric Number Input */}
          <div className="mb-6">
            <label htmlFor="matricNumber" className="block text-sm font-medium text-gray-300 mb-2">
              Matric Number
            </label>
            <div className="relative">
              <input
                type="text"
                id="matricNumber"
                value={matricNumber}
                onChange={(e) => setMatricNumber(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 text-white placeholder-gray-300 pl-12"
                placeholder="Enter your matric number"
                required
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 016 0v2h1a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2h1V7a5 5 0 015-5z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-8">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 text-white placeholder-gray-300 pl-12"
                placeholder="Enter your password"
                required
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                <LockClosedIcon className="h-5 w-5 text-gray-300" />
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-400 text-sm mb-4 text-center">{error}</p>
          )}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-gray-900 py-3 px-4 rounded-lg hover:bg-yellow-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-gray-300 text-sm">
          <p>Forgot password? <a href="#" className="text-yellow-400 hover:underline">Reset here</a></p>
        </div>
      </div>
    </div>
  );
}
