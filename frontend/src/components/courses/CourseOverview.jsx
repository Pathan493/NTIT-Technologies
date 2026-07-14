import "./CourseOverview.css";

function CourseOverview() {
  return (
    <section className="course-overview">

      <div className="course-container">

        <div className="course-left">

          <span className="course-status">
            🔥 NOW ENROLLING
          </span>

          <h2>Azure Data Engineer Master Program</h2>

          <p>
            A complete industry-oriented Azure Data Engineering program
            designed to help beginners and working professionals build
            practical cloud skills through live classes, assignments,
            hands-on projects, and interview preparation.
          </p>

          <div className="course-features">

            <div>✅ Live Interactive Classes</div>
            <div>✅ Hands-on Practical Sessions</div>
            <div>✅ Real-Time Industry Scenarios</div>
            <div>✅ Weekly Assignments</div>
            <div>✅ Resume Building</div>
            <div>✅ Mock Interviews</div>
            <div>✅ Interview Preparation</div>
            <div>✅ Mentor Support</div>

          </div>

        </div>

        <div className="course-right">

          <div className="info-card">

            <h3>Course Information</h3>

            <div className="info-row">
              <span>Duration</span>
              <strong>60 Days</strong>
            </div>

            <div className="info-row">
              <span>Mode</span>
              <strong>Live Online</strong>
            </div>

            <div className="info-row">
              <span>Level</span>
              <strong>Beginner → Advanced</strong>
            </div>

            <div className="info-row">
              <span>Assignments</span>
              <strong>Weekly</strong>
            </div>

            <div className="info-row">
              <span>Projects</span>
              <strong>Industry Oriented</strong>
            </div>

            <button>
              Download Curriculum
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CourseOverview;