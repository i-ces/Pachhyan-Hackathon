import React, { useState } from "react";
import { List, X } from "phosphor-react";
import "./topbar.css";

export default function TopBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        <div className="text-3xl flex justify-center items-center">
          <span>ETHOS</span>
          <span
            style={{
              color: "#32CD32",
            }}
          >
            HACK
          </span>
        </div>
      </a>
      <div className=" bg-[#1F2334]">
        <button className="hamburger" onClick={toggleNav}>
          {!isNavExpanded ? <List size={32} /> : <X size={32} />}
        </button>
        <div
          className={`navigation-menu bg-[#1F2334] ${
            isNavExpanded ? "expanded" : ""
          }`}
        >
          <ul>
            <li className="nav-link">
              <a href="#home">Home</a>
            </li>
            <li className="nav-link">
              <a href="#prizes">Prize Pool</a>
            </li>
            <li className="nav-link">
              <a href="#sponsors">Sponsors</a>
            </li>
            <li className="nav-link">
              <a href="#coordinators">Contact</a>
            </li>
            <li className="nav-link">
              <a href="#rule-book">Code of Conduct</a>
            </li>
            <li className="nav-link">
              <a href="#faqs">FAQs</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
