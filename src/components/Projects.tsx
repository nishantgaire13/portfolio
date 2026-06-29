import { MdArrowOutward } from "react-icons/md";
import "./styles/Projects.css";

interface Project {
  index: string;
  kind: string;
  status: string;
  title: string;
  description: string;
  features: string[];
  stats: string[];
  link: string;
}

const projects: Project[] = [
  {
    index: "01",
    kind: "Finance Reference Tool",
    status: "Live",
    title: "The NFRS Archive",
    description:
      "A free, searchable reference that maps every Nepal Financial Reporting Standard to its IFRS counterpart, with side-by-side treatment, carve-out analysis, worked examples, and paragraph-level citations. Built for Nepali auditors and CA / ACCA students who used to rely on scattered PDFs.",
    features: [
      "NFRS ↔ IFRS mapping",
      "Carve-out analysis",
      "Worked examples",
      "Paragraph citations",
    ],
    stats: ["25 NAS", "17 NFRS standards"],
    link: "https://the-nfrs-archive.vercel.app/",
  },
  {
    index: "02",
    kind: "Personal Finance Web App",
    status: "Live",
    title: "PaisaTrack",
    description:
      "A fully client-side budget tracker secured with AES-256 local encryption. It handles category budgets, transaction logging, and monthly income-versus-expense reporting with no server and no data sharing, tailored for Nepal with NPR support, Bikram Sambat dates, and district-level location selection.",
    features: [
      "AES-256 encryption",
      "Category budgets",
      "Income vs expense",
      "Bikram Sambat calendar",
    ],
    stats: ["100% client-side", "Nepal-first (NPR)"],
    link: "https://paisatrack-five.vercel.app/",
  },
];

const handleMove = (e: React.MouseEvent<HTMLElement>) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  card.style.setProperty("--x", `${e.clientX - rect.left}px`);
  card.style.setProperty("--y", `${e.clientY - rect.top}px`);
};

const Projects = () => {
  return (
    <div className="projects-section section-container" id="projects">
      <div className="projects-glow" aria-hidden="true"></div>
      <div className="projects-container">
        <div className="projects-head">
          <span className="projects-eyebrow">Selected Work</span>
          <h2>
            My <span>Projects</span>
          </h2>
          <p className="projects-sub">
            Finance-focused tools I designed and built end to end.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.index}
              onMouseMove={handleMove}
            >
              <div className="project-spotlight" aria-hidden="true"></div>
              <span className="project-index">{project.index}</span>

              <div className="project-card-in">
                <div className="project-card-top">
                  <span className="project-kind">{project.kind}</span>
                  <span className="project-status">
                    <i></i>
                    {project.status}
                  </span>
                </div>

                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-features">
                  {project.features.map((feature) => (
                    <span className="project-tag" key={feature}>
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="project-card-foot">
                  <div className="project-stats">
                    {project.stats.map((stat) => (
                      <span className="project-stat" key={stat}>
                        {stat}
                      </span>
                    ))}
                  </div>
                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="disable"
                  >
                    <span>Visit Project</span>
                    <MdArrowOutward />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
