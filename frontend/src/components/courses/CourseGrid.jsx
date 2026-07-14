import "./CourseGrid.css";
import CourseCard from "./CourseCard";
import courses from "../../data/courses";

function CourseGrid() {
  return (
    <section className="course-grid-section">
      <div className="course-grid">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
          />
        ))}
      </div>
    </section>
  );
}

export default CourseGrid;