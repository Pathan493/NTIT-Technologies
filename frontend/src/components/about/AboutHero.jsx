import "./AboutHero.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";

function AboutHero() {
  return (
    <section className="about-hero">

      <div className="about-hero-container">

        {/* Left Side */}
        <div className="about-hero-content">

          <span className="about-badge">
            ABOUT NTIT TECHNOLOGIES
          </span>

          <h1>
            Empowering Future
            <br />
            Cloud Professionals
            <br />
            Through Practical Learning
          </h1>

          <p>
            NTIT Technologies is committed to delivering
            industry-focused cloud training through live
            interactive classes, hands-on practice,
            interview preparation, and continuous mentorship
            to help learners build successful IT careers.
          </p>

          <Link to="/courses" className="about-btn">
            Explore Courses →
          </Link>

        </div>

        {/* Right Side */}

        <div className="about-hero-image">

          <div className="about-image-card">
            <img
              src={Logo}
              alt="NTIT Technologies"
            />
          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutHero;