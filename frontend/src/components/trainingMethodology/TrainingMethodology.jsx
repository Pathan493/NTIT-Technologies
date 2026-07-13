import "./TrainingMethodology.css";

function TrainingMethodology() {
  const steps = [
    {
      step: "01",
      title: "Enroll",
      description:
        "Choose your training program and begin your cloud learning journey."
    },
    {
      step: "02",
      title: "Attend Live Classes",
      description:
        "Participate in instructor-led online sessions with interactive discussions."
    },
    {
      step: "03",
      title: "Practice",
      description:
        "Strengthen your understanding through hands-on exercises and guided labs."
    },
    {
      step: "04",
      title: "Industry-Oriented Scenarios",
      description:
        "Learn concepts through practical examples inspired by real-world projects."
    },
    {
      step: "05",
      title: "Interview Preparation",
      description:
        "Build your resume and prepare with technical interview guidance."
    },
    {
      step: "06",
      title: "Build Your Career",
      description:
        "Apply your skills confidently and continue learning with mentor support."
    }
  ];

  return (
    <section className="methodology">

      <div className="methodology-header">

        <span>OUR TRAINING METHODOLOGY</span>

        <h2>How You'll Learn at NTIT</h2>

        <p>
          Our structured learning approach focuses on practical understanding,
          continuous guidance, and interview readiness.
        </p>

      </div>

      <div className="methodology-grid">

        {steps.map((item) => (
          <div className="step-card" key={item.step}>

            <div className="step-number">
              {item.step}
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default TrainingMethodology;