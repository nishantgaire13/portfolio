import { useState, useEffect } from "react";
import "./styles/BottomNav.css";

const navItems = [
  { id: "landingDiv", label: "Home",   icon: "⌂" },
  { id: "about",      label: "About",  icon: "👤" },
  { id: "education",  label: "Edu",    icon: "🎓" },
  { id: "projects",   label: "Work",   icon: "✦" },
  { id: "work",       label: "Certs",  icon: "📜" },
  { id: "contact",    label: "Contact",icon: "✉" },
];

const BottomNav = () => {
  const [activeId, setActiveId] = useState("landingDiv");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.4;
      let current = "landingDiv";
      navItems.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollY >= top) current = id;
        }
      });
      setActiveId(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActiveId(id);
  };

  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-inner">
        {navItems.map(({ id, label, icon }) => (
          <button
            key={id}
            className={`bottom-nav-item ${activeId === id ? "bottom-nav-active" : ""}`}
            onClick={() => handleClick(id)}
          >
            <span className="bottom-nav-icon">{icon}</span>
            <span className="bottom-nav-label">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
