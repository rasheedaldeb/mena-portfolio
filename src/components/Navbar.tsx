import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Logo from "../../public/images/Logo2.png";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          const elem = e.currentTarget as HTMLAnchorElement;
          const section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
      });
    });

    // Handle mobile menu link clicks
    const mobileLinks = document.querySelectorAll(".mobile-nav a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        setIsMenuOpen(false);
        document.body.style.overflow = "auto";
      });
    });

    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
      // Close mobile menu on resize if screen becomes larger
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
        document.body.style.overflow = "auto";
      }
    });

    // Prevent scrolling when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={`header ${isMenuOpen ? "menu-open" : ""}`}>
        <a href="/#" className="navbar-title" data-cursor="disable">
          <img src={Logo} alt="Logo" width={75} />
        </a>

        {/* Desktop Navigation */}
        <ul className="desktop-nav">
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
          <li>
            <a data-href="#whatIDo" href="#whatIDo">
              <HoverLinks text="WHAT I DO" />
            </a>
          </li>
          <li>
            <a data-href="#career" href="#career">
              <HoverLinks text="CAREER" />
            </a>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? "active" : ""}`}>
          <div className="mobile-nav-content">
            <ul>
              <li>
                <a data-href="#about" href="#about" onClick={toggleMenu}>
                  <HoverLinks text="ABOUT" />
                </a>
              </li>
              <li>
                <a data-href="#work" href="#work" onClick={toggleMenu}>
                  <HoverLinks text="WORK" />
                </a>
              </li>
              <li>
                <a data-href="#contact" href="#contact" onClick={toggleMenu}>
                  <HoverLinks text="CONTACT" />
                </a>
              </li>
              <li>
                <a data-href="#whatIDo" href="#whatIDo" onClick={toggleMenu}>
                  <HoverLinks text="WHAT I DO" />
                </a>
              </li>
              <li>
                <a data-href="#career" href="#career" onClick={toggleMenu}>
                  <HoverLinks text="CAREER" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
