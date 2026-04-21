import React from "react";

const Navber = () => {
  return (
    // Full-width background
    <div className="bg-base-100/80 backdrop-blur-md shadow-md w-full sticky top-0 z-50">
      {/* Inner container */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Left side */}
        <div className="flex items-center gap-3">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-xl z-10 mt-3 w-52 p-2 shadow-lg"
            >
              <li><a>Home</a></li>
              <li><a>FAQ</a></li>
              <li><a>Changelog</a></li>
              <li><a>Blog</a></li>
              <li><a>Download</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>

          <a className="text-xl font-bold tracking-wide cursor-pointer">
            CS — Ticket System
          </a>
        </div>

        {/* Center menu (desktop) */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1 font-medium">
            <li><a className="hover:text-primary transition">Home</a></li>
            <li><a className="hover:text-primary transition">FAQ</a></li>
            <li><a className="hover:text-primary transition">Changelog</a></li>
            <li><a className="hover:text-primary transition">Blog</a></li>
            <li><a className="hover:text-primary transition">Download</a></li>
            <li><a className="hover:text-primary transition">Contact</a></li>
          </ul>
        </div>

        {/* Right side */}
        <div>
          <button className="btn rounded-full px-5 bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white font-semibold border-none hover:scale-105 transition duration-300 shadow-md">
            <span className="text-lg">+</span> New Ticket
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navber;