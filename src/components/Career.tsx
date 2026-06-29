import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="education">
      <div className="career-container">
        <h2>
          My education <span>&</span>
          <br /> qualifications
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <span className="career-node"></span>
            <div className="career-card">
              <div className="career-card-head">
                <h4>ACCA</h4>
                <span className="career-year">In Progress</span>
              </div>
              <h5>Certified College of Accountancy · Kathmandu</h5>
              <p>
                Pursuing the ACCA (Association of Chartered Certified
                Accountants) qualification, building depth across financial
                reporting, management accounting, taxation, audit, and
                business strategy.
              </p>
            </div>
          </div>

          <div className="career-info-box">
            <span className="career-node"></span>
            <div className="career-card">
              <div className="career-card-head">
                <h4>BBS</h4>
                <span className="career-year">In Progress</span>
              </div>
              <h5>Tribhuvan University · Nepal</h5>
              <p>
                Bachelor of Business Studies, broadening the academic
                foundation in accounting, economics, and business
                management alongside professional ACCA studies.
              </p>
            </div>
          </div>

          <div className="career-info-box">
            <span className="career-node"></span>
            <div className="career-card">
              <div className="career-card-head">
                <h4>+2 Science</h4>
                <span className="career-year">GPA 3.19</span>
              </div>
              <h5>Kumudini E.B.H.S · Bardaghat, Nawalparasi</h5>
              <p>
                Completed Higher Secondary Education in the Science stream,
                developing the analytical and quantitative discipline that
                now underpins a finance-focused path.
              </p>
            </div>
          </div>

          <div className="career-info-box">
            <span className="career-node"></span>
            <div className="career-card">
              <div className="career-card-head">
                <h4>SEE</h4>
                <span className="career-year">GPA 3.85</span>
              </div>
              <h5>Kumudini E.B.H.S · Bardaghat, Nawalparasi</h5>
              <p>
                Completed the Secondary Education Examination with a strong
                3.85 GPA, reflecting consistent academic performance and a
                solid grounding in the fundamentals.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
