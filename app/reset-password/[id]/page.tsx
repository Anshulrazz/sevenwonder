"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import axios from "axios";

const ResetPassword = () => {
  const router = useRouter();
  const pathname = usePathname();
  const api = axios.create({
    baseURL: "http://localhost:4000",
    withCredentials: true
  });
  
  // Extract token from the URL path
  const token = pathname.split('/').pop();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [countdown, setCountdown] = useState(3);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      setIsLoading(false);
      return;
    }

    try {
      console.log("Sending reset request with token:", token);
      
      const response = await api.post(`/api/auth/reset/${token}`, {
        password,
        confirmPassword,
      });

      const data = response.data;
      console.log("Response:", data);

      if (data.success) {
        setSuccess("Password changed successfully!");
        setError("");
        setIsRedirecting(true);
        
        // Countdown animation
        let count = 3;
        const countdownInterval = setInterval(() => {
          count--;
          setCountdown(count);
          if (count <= 0) {
            clearInterval(countdownInterval);
            router.push("/login");
          }
        }, 1000);
      } else {
        setError(data.message || "Password reset failed");
      }
    } catch (err) {
      console.error("Reset password error:", err.response?.data || err);
      setError(err.response?.data?.message || "An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="p-8 w-full max-w-md bg-white rounded-lg border border-gray-200 shadow-lg">
        {isRedirecting ? (
          <div className="flex flex-col justify-center items-center py-10">
            <div className="mb-4 w-16 h-16 rounded-full border-t-4 border-blue-500 border-solid animate-spin"></div>
            <h2 className="mb-2 text-xl font-semibold text-gray-800">Password Reset Successful!</h2>
            <p className="mb-6 text-gray-600">Redirecting to login page in {countdown} seconds...</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                style={{ width: `${(countdown / 3) * 100}%` }}
              ></div>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-6 text-center">
              <h1 className="mb-2 text-2xl font-bold text-gray-800">Reset Your Password</h1>
              <p className="text-gray-600">Enter a new password below to secure your account.</p>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="password">
                  New Password
                </label>
                <input
                  className="px-4 py-3 w-full text-gray-700 bg-gray-50 rounded border border-gray-300 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  id="password"
                  type="password"
                  placeholder="Enter your new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                />
                <p className="mt-1 text-xs text-gray-500">Password must be at least 6 characters long</p>
              </div>
              
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="confirmPassword">
                  Confirm New Password
                </label>
                <input
                  className="px-4 py-3 w-full text-gray-700 bg-gray-50 rounded border border-gray-300 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              
              {error && (
                <div className="p-3 mb-4 text-sm text-red-800 bg-red-100 rounded-lg">
                  <p>{error}</p>
                </div>
              )}
              
              {success && !isRedirecting && (
                <div className="p-3 mb-4 text-sm text-green-800 bg-green-100 rounded-lg">
                  <p>{success}</p>
                </div>
              )}
              
              <button
                className={`px-4 py-3 w-full font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex justify-center items-center">
                    <svg className="mr-2 w-5 h-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Reset Password"
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;