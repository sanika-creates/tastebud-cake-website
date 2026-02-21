import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 🧁 Hardcoded admin credentials
  const adminEmail = "admin@tastebuds.com";
  const adminPassword = "sweetstories";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === adminEmail && password === adminPassword) {
      alert("Welcome, Admin! Redirecting...");
      navigate("/feedback-dashboard"); // ✅ Redirect to feedback dashboard
    } else {
      alert("Invalid credentials. Please try again!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-pink-100 via-white to-purple-100 py-12 px-6">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center border border-pink-200">
          <h1 className="text-4xl font-cursive text-pink-600 mb-6">Login</h1>
          <p className="text-gray-500 mb-8">
            Access your admin dashboard or manage feedbacks 🍰
          </p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="text-left">
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div className="text-left">
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold py-3 rounded-full hover:scale-105 transform transition"
            >
              Login
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-6">
            Forgot password?{" "}
            <a
              href="#"
              className="text-pink-600 hover:underline"
            >
              Reset here
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
