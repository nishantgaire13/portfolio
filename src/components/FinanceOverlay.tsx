import { useEffect, useRef } from "react";
import "./styles/FinanceOverlay.css";

const FinanceOverlay = () => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (overlayRef.current) {
        const scrollY = window.scrollY;
        const viewportH = window.innerHeight;
        const opacity = Math.max(0, 1 - scrollY / (viewportH * 0.6));
        overlayRef.current.style.opacity = String(opacity);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="finance-overlay" ref={overlayRef}>
      {/* Left side elements */}
      <div className="finance-symbol sym-dollar">$</div>
      <div className="finance-symbol sym-euro">€</div>
      <div className="finance-symbol sym-percent">%</div>

      {/* Right side elements */}
      <div className="finance-symbol sym-bitcoin">₿</div>
      <div className="finance-symbol sym-pound">£</div>

      {/* Left chart */}
      <div className="finance-chart chart-left">
        <svg width="160" height="80" viewBox="0 0 160 80">
          <polyline
            points="0,70 20,60 40,45 60,50 80,30 100,35 120,15 140,20 160,5"
            fill="none"
            stroke="#14b8a6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.7"
          />
          <polyline
            points="0,70 20,60 40,45 60,50 80,30 100,35 120,15 140,20 160,5"
            fill="url(#grad1)"
            stroke="none"
            opacity="0.15"
          />
          <defs>
            <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#14b8a6" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Right chart */}
      <div className="finance-chart chart-right">
        <svg width="130" height="70" viewBox="0 0 130 70">
          <polyline
            points="0,60 18,50 36,38 54,42 72,25 90,28 108,12 126,8"
            fill="none"
            stroke="#0d9488"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Left bar chart */}
      <div className="finance-bars bars-left">
        {[30, 50, 40, 65, 55, 80, 70].map((h, i) => (
          <div
            key={i}
            className="finance-bar"
            style={{
              height: `${h}%`,
              animationDelay: `${i * 0.15}s`,
              opacity: i % 2 === 0 ? 0.7 : 0.5,
            }}
          />
        ))}
      </div>

      {/* Right bar chart */}
      <div className="finance-bars bars-right">
        {[45, 60, 35, 75, 50, 65].map((h, i) => (
          <div
            key={i}
            className="finance-bar"
            style={{
              height: `${h}%`,
              animationDelay: `${i * 0.2}s`,
              opacity: i % 2 === 0 ? 0.6 : 0.4,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FinanceOverlay;
