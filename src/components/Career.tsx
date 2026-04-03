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
            <div className="career-info-in">
              <div className="career-role">
                <h4>ACCA</h4>
                <h5>Certified College of Accountancy · Kathmandu</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently pursuing ACCA (Association of Chartered Certified
              Accountants) — building a strong foundation in financial
              reporting, management accounting, taxation, audit, and
              business strategy.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>+2 Science</h4>
                <h5>Kumudini E.B.H.S · Bardaghat, Nawalparasi &nbsp;|&nbsp; GPA: 3.19</h5>
              </div>
              <h3>+2</h3>
            </div>
            <p>
              Completed Higher Secondary Education (+2) in Science stream
              from Kumudini E.B.H.S School, achieving a GPA of 3.19.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SEE</h4>
                <h5>Kumudini E.B.H.S · Bardaghat, Nawalparasi &nbsp;|&nbsp; GPA: 3.85</h5>
              </div>
              <h3>SEE</h3>
            </div>
            <p>
              Completed Secondary Education Examination (SEE) from
              Kumudini E.B.H.S School with a strong GPA of 3.85,
              demonstrating solid academic foundations.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
