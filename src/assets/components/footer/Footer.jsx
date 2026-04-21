import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-6 gap-8 border-b border-gray-700">
        
        {/* Brand */}
        <div className="col-span-2">
          <h2 className="font-bold text-2xl tracking-wide">
            CS — Ticket System
          </h2>
          <p className="text-gray-400 mt-4 leading-relaxed">
            A ticket counter system helps manage ticket sales for buses, trains,
            movies, or events. It reduces waiting time by organizing queues and
            handling payments efficiently.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer transition">About Us</li>
            <li className="hover:text-white cursor-pointer transition">Our Mission</li>
            <li className="hover:text-white cursor-pointer transition">Contact Sales</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer transition">Products & Services</li>
            <li className="hover:text-white cursor-pointer transition">Customer Stories</li>
            <li className="hover:text-white cursor-pointer transition">Download Apps</li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Information</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer transition">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer transition">Terms & Conditions</li>
            <li className="hover:text-white cursor-pointer transition">Join Us</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Social Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition">@CS — Ticket System</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">@CS — Ticket System</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">@CS — Ticket System</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">support@cst.com</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="text-center py-5 text-gray-400 text-sm">
        © 2025 <span className="text-white font-medium">CS — Ticket System</span>. All rights reserved.
      </div>
      
    </footer>
  );
};

export default Footer;