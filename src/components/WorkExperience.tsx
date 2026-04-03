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
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Analyst</h4>
                <h5>Maven Solutions · Kathmandu, Nepal</h5>
              </div>
              <h3>2023–24</h3>
            </div>
            <p>
              Worked as an Associate Analyst at Maven Solutions for approximately
              11 months. Contributed to quality assurance and testing of new web
              and mobile applications — identifying bugs, reporting issues, and
              verifying fixes across multiple product cycles. Also worked on the
              company's career and resume platform, supporting content workflows
              and helping improve the overall user experience.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
