import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Flutter & Front-End Engineer</h4>
                <h5>Academic Projects & Professional Training</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Built cross-platform mobile applications using Flutter, focusing
              on scalable architecture, responsive UI systems, and clean,
              maintainable codebases. Strengthened front-end engineering
              fundamentals and gained structured, real-world development
              exposure through hands-on project execution and professional
              training environments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UI/UX Designer</h4>
                <h5>Product Design Lead – Graduation Project</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Product Design Lead – Graduation Project Led the full design cycle
              from initial concept and hand-drawn wireframes to high-fidelity
              prototypes in Figma. Designed structured user flows and scalable
              interface systems with strong emphasis on usability, clarity, and
              technical feasibility.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer | Flutter Developer | UI/UX Designer</h4>
                <h5>Present | Product & Systems Focus</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Operating as a multidisciplinary Software Engineer capable of
              analyzing systems, gathering technical requirements, and
              translating business objectives into scalable digital solutions.
              Combining engineering discipline with UI/UX thinking to build
              products that are technically sound, user-centered, and built for
              long-term growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
