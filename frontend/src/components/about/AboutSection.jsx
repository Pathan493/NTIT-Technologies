import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="about-section">

      <div className="about-container">

        {/* Left Side */}

        <div className="about-left">

          <span className="section-tag">
            WHO WE ARE
          </span>

          <h2>
            Practical Cloud Training
            <br />
            Designed for Career Growth
          </h2>

          <p>
            NTIT Technologies is a cloud training institute focused on helping
            learners build strong technical skills through practical learning.
            Our programs emphasize understanding concepts, applying them in
            hands-on environments, and preparing confidently for technical
            interviews.
          </p>

          <p>
            We believe that consistent practice, live interaction with mentors,
            and structured guidance are the foundations of long-term success in
            cloud and data engineering careers.
          </p>

        </div>

        {/* Right Side */}

        <div className="about-right">

          <div className="feature-card">
            <h3>💻 Live Interactive Classes</h3>
            <p>Instructor-led sessions with real-time doubt clearing.</p>
          </div>

          <div className="feature-card">
            <h3>⚡ Hands-on Learning</h3>
            <p>Practice concepts through guided labs and exercises.</p>
          </div>

          <div className="feature-card">
            <h3>🎯 Interview Preparation</h3>
            <p>Resume guidance and technical interview readiness.</p>
          </div>

          <div className="feature-card">
            <h3>🤝 Mentor Support</h3>
            <p>Continuous guidance throughout your learning journey.</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;