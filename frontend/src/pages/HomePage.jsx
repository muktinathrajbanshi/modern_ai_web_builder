import React from "react";
import { useAppContext } from "../context/AppContext";

const HomePage = () => {
  const { user } = useAppContext();

  return (
    <div
      className="h-screen overflow-y-scroll text-white font-sans bg-[url('/bg-img.png')]
    bg-cover bg-center bg-no-repeat"
    >
      {/* Nav  */}
      <nav className="sticky top-0 z-10 flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="logo" className="size-6" />
          <span className="text-xl font-semibold tracking-tight">
            BuilderAI
          </span>
        </div>
        <div className="flex items-center gap-4 text-sm font-medium text-zinc-300">
          <span>{user?.name}</span>
          <button
            className="py-1.5 px-3 border border-white/20 text-white hover:bg-white/10
          text-xs rounded-md cursor-pointer bg-transparent"
          >
            Sign out
          </button>
        </div>
      </nav>

      {/* Hero  */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-20 mt-8 xl:mt-28">
        <div className="w-full max-w-2xl flex flex-col items-center">
          {/* Promo Badge  */}
          <div
            className="flex items-center gap-2 p-1.5 pr-3 bg-white/10 backdrop-blur-md
          rounded-full border border-white/20 text-[13px] text-white/90"
          >
            <span className="px-3 py-1 text-[11px] bg-red-700 rounded-full font-medium tracking-wider">
              PROMO
            </span>
            <span>Create your first project for free.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
