import "./CoursesPreview.css";
import { Link } from "react-router-dom";

function CoursesPreview() {
  return (
    <section className="courses-preview">

      <div className="courses-header">
        <span>OUR TRAINING PROGRAMS</span>

        <h2>Build Practical Cloud Skills</h2>

        <p>
          Our programs are designed to help learners build strong cloud
          fundamentals through live instructor-led training, hands-on
          practice, and interview-focused preparation.
        </p>
      </div>

      <div className="courses-grid">

        <div className="course-card featured">

          <div className="course-status available">
            Available Now
          </div>

          <h3>Azure Data Engineering</h3>

          <ul>
            <li>✔ Live Online Training</li>
            <li>✔ Azure Data Factory</li>
            <li>✔ Azure Databricks</li>
            <li>✔ Azure Synapse Analytics</li>
            <li>✔ Azure Data Lake Storage</li>
            <li>✔ PySpark</li>
            <li>✔ Advanced SQL</li>
            <li>✔ Delta Lake</li>
            <li>✔ Interview Preparation</li>
          </ul>

          <Link to="/courses" className="course-btn">
            View Program
          </Link>

        </div>

        <div className="course-card">

          <div className="course-status upcoming">
            Coming Soon
          </div>

          <h3>GCP Data Engineering</h3>

          <p>
            Comprehensive Google Cloud Data Engineering program.
          </p>

        </div>

        <div className="course-card">

          <div className="course-status upcoming">
            Coming Soon
          </div>

          <h3>AWS Data Engineering</h3>

          <p>
            Practical AWS-based Data Engineering training.
          </p>

        </div>

      </div>

    </section>
  );
}

export default CoursesPreview;