import "../styles/Navbar.css";
import {
  openNavbar,
  closeNavbar,
  viewMore1,
  viewMore2,
} from "../helpers/toggleNavbar";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const setBackground = () => {
      const nav = document.querySelector("nav");
      if (window.scrollY > 0) {
        nav.classList.add("scroll");
      } else {
        nav.classList.remove("scroll");
      }
    };

    window.addEventListener("scroll", setBackground);
    return () => {
      window.removeEventListener("scroll", setBackground);
    };
  }, []);

  return (
    <>
      <nav>
        <div class="navbar container">
          {!open && (
            <i
              className="open-nav"
              onClick={() => {
                openNavbar();
                setOpen(true);
              }}
              class="bx bx-menu"
              style={{ color: "white" }}
            ></i>
          )}
          {open && (
            <i
              className="close-nav"
              onClick={() => {
                closeNavbar();
                setOpen(false);
              }}
              class="bx bx-x"
              style={{ color: "white" }}
            ></i>
          )}
          <div class="logo">
            <a href="#">BrandIT!</a>
          </div>
          <div class="nav-links">
            <ul class="links">
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Solutions</a>
                <i
                  class="bx bxs-chevron-down dropdown1-arrow arrow"
                  onClick={viewMore1}
                ></i>
                <ul class="dropdown1-sub-menu sub-menu">
                  <li>
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <a href="#">Login Forms</a>
                  </li>
                  <li>
                    <a href="#">Card Design</a>
                  </li>
                  <li class="more"></li>
                </ul>
              </li>
              <li>
                <a href="#">Development</a>
                <i
                  class="bx bxs-chevron-down dropdown2-arrow arrow"
                  onClick={viewMore2}
                ></i>
                <ul class="dropdown2-sub-menu sub-menu">
                  <li>
                    <a href="#">Dynamic Clock</a>
                  </li>
                  <li>
                    <a href="#">Form Validation</a>
                  </li>
                  <li>
                    <a href="#">Card Slider</a>
                  </li>
                  <li>
                    <a href="#">Complete Website</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
            </ul>
            <ul className="engage-site">
              <li>
                <a className="extra-link1" href="#">
                  Sign In
                </a>
              </li>
              <li>
                <a className="extra-link2" href="#">
                  Contact Sales
                </a>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
