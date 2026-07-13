import "./CTA.css";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="cta">

      <div className="cta-content">

        <h2>
          Ready to Build Your Career in Cloud?
        </h2>

        <p>
          Learn Azure Data Engineering through live
          instructor-led training, practical learning,
          and interview-focused guidance.
        </p>

        <div className="cta-buttons">

          <Link to="/courses" className="cta-primary">
            Explore Programs
          </Link>

          <Link to="/contact" className="cta-secondary">
            Contact Us
          </Link>

        </div>

      </div>

    </section>
  );
}

export default CTA;