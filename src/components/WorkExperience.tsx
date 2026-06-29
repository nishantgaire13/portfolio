import "./styles/Career.css";

const WorkExperience = () => {
  return (
    <div className="career-section section-container" id="experience">
      <div className="career-container">
        <h2>
          My work <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <span className="career-node"></span>
            <div className="career-card">
              <div className="career-card-head">
                <h4>Associate Analyst</h4>
                <span className="career-year">2023 – 24</span>
              </div>
              <h5>Maven Solutions · Kathmandu, Nepal</h5>
              <p>
                Spent close to a year as an Associate Analyst, owning quality
                assurance across new web and mobile releases by identifying
                bugs, reporting issues, and verifying fixes through multiple
                product cycles. Also supported the company's career and resume
                platform, refining content workflows and helping sharpen the
                overall user experience.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
