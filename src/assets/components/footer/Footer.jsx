import React from "react";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className=" container p-2 py-20 mx-auto grid border-b-2 border-gray-700 grid-cols-2 md:grid-cols-6 gap-2">
        <div className=" col-span-2 text-white">
          <h2 className="font-bold text-[20px] text-white">
            CS — Ticket System
          </h2>
          <ul className="text-gray-400  mr-10 mt-2">
            <li>
              A ticket counter system is a process that manages selling and
              distributing tickets for buses, trains, movies, or events. It
              helps reduce waiting time by organizing queues and handling
              payments.
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="font-semibold text-[18px] text-white">Company</h3>
          <ul className="text-gray-400 mt-2">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Saled</li>
          </ul>
        </div>
        <div className="">
          <h3 className="font-semibold text-[18px] text-white">Services</h3>
          <ul className="text-gray-400 mt-2">
            <li>Products & Services</li>
            <li>Customer Stories</li>
            <li>Download Apps</li>
          </ul>
        </div>
        <div className="">
          <h3 className="font-semibold text-[18px] text-white">Information</h3>
          <ul className="text-gray-400 mt-2">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>
        <div className="">
          <h3 className="font-semibold text-[18px] text-white">Social Links</h3>
          <ul className="text-gray-400 m-2">
            <li>
              <a href="">@CS — Ticket System</a>
            </li>
            <li>
              <a href="">@CS — Ticket System</a>
            </li>
            <li>
              <a href="">@CS — Ticket System</a>
            </li>
            <li>
              <a href="">support@cst.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p className="text-white py-3 text-center">
          © 2025 CS — Ticket System. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
