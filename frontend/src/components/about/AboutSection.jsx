import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="about">

      <div className="about-header">

        <span>ABOUT NTIT TECHNOLOGIES</span>

        <h2>
          Learn. Build. Grow.
        </h2>

        <p>
          NTIT Technologies is committed to providing practical,
          industry-oriented cloud training through live instructor-led
          sessions.

          Our programs focus on real-world scenarios, hands-on
          learning, interview preparation, resume guidance, and
          continuous mentor support.

          Whether you're from an IT or Non-IT background,
          we help you build the confidence and skills required
          to begin your Cloud Data Engineering journey.
        </p>

      </div>

      <div className="about-cards">

        <div className="about-card">

          <div className="icon">🎓</div>

          <h3>Live Training</h3>

          <p>
            Instructor-led online sessions with
            interactive learning.
          </p>

        </div>

        <div className="about-card">

          <div className="icon">💻</div>

          <h3>Practical Learning</h3>

          <p>
            Industry-oriented scenarios and
            hands-on practice.
          </p>

        </div>

        <div className="about-card">

          <div className="icon">🎯</div>

          <h3>Interview Preparation</h3>

          <p>
            Resume guidance and mock interview
            preparation.
          </p>

        </div>

        <div className="about-card">

          <div className="icon">👨‍🏫</div>

          <h3>Mentor Support</h3>

          <p>
            Continuous support throughout your
            learning journey.
          </p>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;