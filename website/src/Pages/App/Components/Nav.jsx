import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const MyNavbar = () => {
  const location = useLocation();
  const [activeKey, setActiveKey] = useState(location.pathname);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      setLastScrollY(currentScrollY);
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsExpanded(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [lastScrollY]);

  const navexpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <nav className={`mynav ${isExpanded ? "expanded" : ""}`}>
        <div className={`mycontainer nav-container ${isExpanded ? "vertical" : ""}`}>
          <div className={`mylogo`}>
            <span className="merriweather">PARTH PARMAR</span>
          </div>
          <ul
            className={`mylinks ${
              isExpanded ? "vertical viewable" : "horizontal"
            }`}
          >
            <li className="active hover-target">Home</li>
            <li className="hover-target">Project</li>
            <li className="hover-target">About</li>
          </ul>
          <button className="mybutton" onClick={navexpand}>
            <div className="navOpenButton">
              <div className={`line1 ${isExpanded ? "rotate1" : ""}`}></div>
              <div className={`line2 ${isExpanded ? "rotate2" : ""}`}></div>
            </div>
          </button>
        </div>
      </nav>

    </>
  );
};

export default MyNavbar;
