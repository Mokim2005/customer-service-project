import React from "react";

const Navber = () => {
  return (
    // Full-width background
    <div className="bg-base-100 shadow-sm w-full">
      {/* Inner container */}
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Left side */}
        <div className="flex items-center gap-2">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li><a>Home</a></li>
              <li><a>FAQ</a></li>
              <li><a>Changelog</a></li>
              <li><a>Blog</a></li>
              <li><a>Download</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">CS — Ticket System</a>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <ul className="hidden lg:flex menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>FAQ</a></li>
            <li><a>Changelog</a></li>
            <li><a>Blog</a></li>
            <li><a>Download</a></li>
            <li><a>Contact</a></li>
          </ul>
          <button className="btn bg-gradient-to-r from-[#632ee3] text-white font-semibold to-[#9f62f2]">
            <span>+</span> New Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navber;
