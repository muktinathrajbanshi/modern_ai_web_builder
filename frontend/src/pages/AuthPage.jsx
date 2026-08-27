import React from "react";
import LoginLeft from "../components/LoginLeft";

const AuthPage = ({ mode }) => {
  const isLogin = mode === "login";

  return (
    <div className="min-h-screen bg-white flex text-zinc-900 font-sans">
      {/* Left Panel - Branding  */}
      <LoginLeft />

      {/* Right Panel - Form  */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <div className="mb-10">
            <h1>{isLogin ? "Sign in" : "Create an account"}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
