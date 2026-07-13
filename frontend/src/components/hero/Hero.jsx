import "./Hero.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="hero-badge">
          India's Practical Cloud Training Institute
        </span>

        <h1>
          Become a <br />
          Cloud Data <br />
          Engineer
        </h1>

        <p>
          Learn Azure Data Engineering through
          <strong> Live Interactive Classes</strong>,
          <strong> Hands-on Learning</strong>,
          <strong> Interview Preparation</strong> and
          <strong> Mentor Support</strong>.
        </p>

        <ul className="hero-features">
          <li>✅ Live Interactive Classes</li>
          <li>✅ Hands-on Learning</li>
          <li>✅ Interview Preparation</li>
        </ul>

        <div className="hero-buttons">
          <Link to="/courses" className="btn-primary">
            Explore Courses
          </Link>

          <Link to="/login" className="btn-secondary">
            Student Login
          </Link>
        </div>

      </div>

      <div className="hero-right">
        <img src={logo} alt="NTIT Technologies" />
      </div>

    </section>
  );
}

export default Hero;