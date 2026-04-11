const skills: Record<string, string[]> = {
  Languages: ["TypeScript", "JavaScript", "Python", "HTML", "CSS"],
  Frameworks: ["React", "Node.js", "Express", "Vite"],
  Tools: ["Git", "Docker", "Linux", "VS Code"],
};

const experience = [
  {
    role: "Software Developer",
    company: "Company Name",
    period: "2024 – Present",
    description: "Describe your key responsibilities and achievements here.",
  },
  {
    role: "Junior Developer",
    company: "Previous Company",
    period: "2022 – 2024",
    description: "Describe what you worked on and what you learned.",
  },
];

export default function About() {
  return (
    <div className="page">
      <section className="about-hero">
        <h2>About Me</h2>
        <p>
          Hi, I'm Kieran — a developer based in Douglas, Isle of Man. I build
          things for the web and enjoy working on projects that are both
          well-designed and technically interesting. Replace this with your own
          intro.
        </p>
      </section>

      <section className="about-section">
        <h2>Skills</h2>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-group">
            <h3>{category}</h3>
            <div className="skill-tags">
              {items.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="about-section">
        <h2>Experience</h2>
        <div className="experience-list">
          {experience.map((exp, i) => (
            <div key={i} className="exp-item">
              <div className="exp-header">
                <h3>{exp.role}</h3>
                <span className="exp-period">{exp.period}</span>
              </div>
              <p className="exp-company">{exp.company}</p>
              <p className="exp-desc">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
