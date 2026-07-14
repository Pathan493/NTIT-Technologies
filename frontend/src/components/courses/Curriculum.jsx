import "./Curriculum.css";

function Curriculum() {
  const modules = [
    "Cloud Computing Fundamentals",
    "Microsoft Azure Fundamentals",
    "Azure Data Factory (ADF)",
    "Azure Data Lake Storage Gen2",
    "Azure Databricks",
    "PySpark for Data Engineering",
    "Azure Synapse Analytics",
    "Delta Lake",
    "Advanced SQL for Data Engineers",
    "Data Warehousing Concepts",
    "CI/CD & Deployment Basics",
    "Interview Preparation & Resume Building"
  ];

  return (
    <section className="curriculum">

      <div className="curriculum-container">

        <span className="section-tag">
          COURSE CURRICULUM
        </span>

        <h2>
          What You'll Learn
        </h2>

        <p>
          Our curriculum is carefully designed to build your knowledge
          step by step, from cloud fundamentals to advanced Azure Data
          Engineering concepts.
        </p>

        <div className="curriculum-grid">

          {modules.map((module, index) => (

            <div className="module-card" key={index}>

              <div className="module-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3>{module}</h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Curriculum;