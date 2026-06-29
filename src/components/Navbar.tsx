import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const sections = [
  { id: "about",      label: "ABOUT" },
  { id: "education",  label: "EDUCATION" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects",   label: "PROJECTS" },
  { id: "work",       label: "CERTIFICATIONS" },
  { id: "contact",    label: "CONTACT" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

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

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let el = e.currentTarget as HTMLAnchorElement;
          let section = el.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
      });
    });

    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });

    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.3;
      let current = "";
      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollY >= top) current = id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileNavClick = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          NG
        </a>

        {/* Desktop nav links */}
        <ul className="desktop-nav">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                data-href={`#${id}`}
                href={`#${id}`}
                className={activeSection === id ? "nav-active" : ""}
              >
                <HoverLinks text={label} />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger button */}
        <button
          className={`hamburger ${menuOpen ? "hamburger-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}>
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`mobile-menu-item ${activeSection === id ? "mobile-menu-active" : ""}`}
            onClick={() => handleMobileNavClick(id)}
          >
            {label}
          </a>
        ))}
      </div>
      {menuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)} />
      )}

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
