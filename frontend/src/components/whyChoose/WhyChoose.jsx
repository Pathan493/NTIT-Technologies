import "./WhyChoose.css";

function WhyChoose() {
  const features = [
    {
      title: "Live Interactive Training",
      description:
        "Attend live instructor-led sessions with real-time interaction and doubt clearing.",
      icon: "🎥",
    },
    {
      title: "Industry-Oriented Learning",
      description:
        "Learn using practical scenarios inspired by real-world cloud projects.",
      icon: "☁️",
    },
    {
      title: "Interview Preparation",
      description:
        "Prepare with resume guidance, mock interviews, and commonly asked interview questions.",
      icon: "🎯",
    },
    {
      title: "Hands-on Practice",
      description:
        "Gain confidence by practicing Azure services with guided exercises.",
      icon: "💻",
    },
    {
      title: "Mentor Support",
      description:
        "Get continuous support throughout your learning journey.",
      icon: "👨‍🏫",
    },
    {
      title: "Structured Curriculum",
      description:
        "A carefully designed learning path from fundamentals to advanced concepts.",
      icon: "📚",
    },
  ];

  return (
    <section className="why">
      <div className="why-header">
        <span>WHY LEARN WITH NTIT</span>

        <h2>Learn Smarter. Build Faster.</h2>

        <p>
          Our training is designed to help learners build practical cloud
          skills through live sessions, industry-oriented learning, and
          interview-focused preparation.
        </p>
      </div>

      <div className="why-grid">
        {features.map((item, index) => (
          <div className="why-card" key={index}>
            <div className="why-icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChoose;