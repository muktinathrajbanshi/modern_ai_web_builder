import React from "react";

const HomePage = () => {
  return (
    <div
      className="h-screen overflow-y-scroll text-white font-sans bg-[url('/bg-img.png')]
    bg-cover bg-center bg-no-repeat"
    >
      {/* Nav  */}
      <nav className="sticky top-0 z-10 flex items-center justify-between px-6 py-4"></nav>
    </div>
  );
};

export default HomePage;
