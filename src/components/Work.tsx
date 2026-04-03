import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const certifications = [
  {
    title: "Prompt Engineering",
    category: "Vanderbilt University · Coursera",
    tools: "LLMs, ChatGPT, Claude, AI Workflow Design, Prompt Applications",
    image: "/images/prompt.webp",
    link: "https://drive.google.com/file/d/1Bnkqm7a9yZRNCGxcnZPPKFTXEG0tWbIr/view",
  },
  {
    title: "Google Digital Marketing",
    category: "Google · Certified",
    tools: "SEO, Social Media Marketing, E-commerce, Analytics",
    image: "/images/google.webp",
    link: "https://drive.google.com/file/d/18JMMKIkayF-9vTZeUM5ckAs3DBT9EZny/view",
  },
  {
    title: "JP Morgan Chase & Co.",
    category: "Commercial Banking · Job Simulation",
    tools: "Financial Statements, Company Overview, Industry Analysis",
    image: "/images/jpmorgan.jpg",
    link: "https://drive.google.com/file/d/1hG-TQDd2P1WYSt8z36KYV5NlAgLGg_K_/view",
  },
  {
    title: "BCG",
    category: "Strategy Consulting · Job Simulation",
    tools: "Strategic Thinking, Problem Solving, Innovative Solutions",
    image: "/images/bcg.webp",
    link: "https://drive.google.com/file/d/1W1fPGQ9gpSITxCbDnicT_KcAUbrMzPXB/view",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? certifications.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === certifications.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Certifications</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {certifications.map((cert, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{cert.title}</h4>
                        <p className="carousel-category">{cert.category}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Skills & Topics</span>
                          <p>{cert.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={cert.image}
                        alt={cert.title}
                        link={cert.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {certifications.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to certification ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
