import React from 'react';

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-500 p-4">
      <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-8 w-full max-w-md text-white shadow-xl">
        <h2 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2">
          🔐 Welcome Back
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-2 rounded bg-white bg-opacity-20 text-white placeholder-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full p-2 rounded bg-white bg-opacity-20 text-white placeholder-white focus:outline-none"
            />
          </div>

          <div className="flex justify-between items-center text-sm mt-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox" />
              Remember me
            </label>
            <a href="#" className="text-white hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white py-2 rounded font-semibold"

          >
            🚀 Login
          </button>

          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <a href="#" className="text-yellow-300 font-semibold hover:underline">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;

