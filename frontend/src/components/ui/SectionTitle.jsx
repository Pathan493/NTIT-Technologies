import "./SectionTitle.css";

function SectionTitle({
  subtitle,
  title,
  description,
}) {
  return (
    <div className="section-title">

      <span>{subtitle}</span>

      <h2>{title}</h2>

      <p>{description}</p>

    </div>
  );
}

export default SectionTitle;