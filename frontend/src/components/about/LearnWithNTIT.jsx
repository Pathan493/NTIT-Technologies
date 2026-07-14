import "./LearnWithNTIT.css";

function LearnWithNTIT() {

  const features = [

    {
      title: "Live Interactive Classes",
      description:
        "Learn directly from experienced trainers through engaging live online sessions."
    },

    {
      title: "Hands-on Practical Learning",
      description:
        "Practice every concept through guided labs and real-world exercises."
    },

    {
      title: "Industry-Oriented Projects",
      description:
        "Understand practical implementation using project-based learning."
    },

    {
      title: "Weekly Assignments",
      description:
        "Strengthen your concepts with structured assignments every week."
    },

    {
      title: "Interview Preparation",
      description:
        "Resume guidance, mock interviews, and technical interview readiness."
    },

    {
      title: "Continuous Mentor Support",
      description:
        "Get your doubts cleared and receive guidance throughout your learning journey."
    }

  ];

  return (

    <section className="learn-section">

      <div className="learn-header">

        <span>WHY LEARN WITH NTIT</span>

        <h2>Everything You Need To Become Interview Ready</h2>

        <p>
          Our learning methodology focuses on practical understanding,
          consistency, and confidence rather than just completing a syllabus.
        </p>

      </div>

      <div className="learn-grid">

        {features.map((item,index)=>(

          <div className="learn-card" key={index}>

            <div className="learn-number">
              {String(index+1).padStart(2,"0")}
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

          </div>

        ))}

      </div>

    </section>

  );

}

export default LearnWithNTIT;