import "./CourseDetails.css";
import { useParams } from "react-router-dom";
import courses from "../../data/courses";

function CourseDetails() {

  const { slug } = useParams();

  const course = courses.find(
    (item) => item.slug === slug
  );

  if (!course) {
    return (
      <section className="course-not-found">
        <h1>Course Not Found</h1>
      </section>
    );
  }

  return (

    <section className="course-details">

      <div className="course-details-container">

        <span className="course-status">
          {course.status}
        </span>

        <h1>{course.title}</h1>

        <p>
          {course.description}
        </p>

        <div className="course-info">

          <div>

            <h3>Duration</h3>

            <p>{course.duration}</p>

          </div>

          <div>

            <h3>Mode</h3>

            <p>{course.mode}</p>

          </div>

          <div>

            <h3>Level</h3>

            <p>{course.level}</p>

          </div>

        </div>

        <h2>Technologies Covered</h2>

        <div className="technology-list">

          {course.technologies.map((tech) => (

            <span key={tech}>
              {tech}
            </span>

          ))}

        </div>

      </div>

    </section>

  );
}

export default CourseDetails;