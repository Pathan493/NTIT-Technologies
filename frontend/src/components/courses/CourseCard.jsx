import "./CourseCard.css";
import { Link } from "react-router-dom";

function CourseCard({ course }) {

  return (

    <div className="course-card">

      <div className="course-status">

        <span
          className={
            course.status === "Available"
              ? "status available"
              : "status coming"
          }
        >
          {course.status}
        </span>

      </div>

      <h2>{course.title}</h2>

      <p>{course.description}</p>

      <div className="course-info">

        <div>

          <strong>Duration</strong>

          <span>{course.duration}</span>

        </div>

        <div>

          <strong>Mode</strong>

          <span>{course.mode}</span>

        </div>

        <div>

          <strong>Level</strong>

          <span>{course.level}</span>

        </div>

      </div>

      <h4>Technologies Covered</h4>

      <div className="tech-stack">

        {course.technologies.map((tech) => (

          <span key={tech}>{tech}</span>

        ))}

      </div>

      {course.status === "Available" ? (

        <Link
          to={`/courses/${course.slug}`}
          className="course-button"
        >
          View Course
        </Link>

      ) : (

        <button
          className="course-button disabled"
          disabled
        >
          Coming Soon
        </button>

      )}

    </div>

  );

}

export default CourseCard;