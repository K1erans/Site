const skills: Record<string, string[]> = {
  Languages: ["TypeScript/Javascript", "C#", "Python", "C"],
  Frameworks: ["React", "Node.js", "Express", "Vite"],
  Tools: ["Git", "Docker", "Claude"],
};

const experience = [
  {
    role: "Tesco Colleague",
    company: "Tesco, Douglas, Isle of Man",
    period: "2021 – Present",
    description: "Tesco Colleague whilst studing for my Computer Science Bsc.",
  },
];

const Education = [
  {
    institution: "University of Chester",
    location: "Douglas, Isle of Man",
    level: "Bachelors of Science in Computer Science",
    period: "2024 – 2027",
  },
];

import PageLayout from "../components/PageLayout";

export default function About() {
  return (
    <PageLayout>
      <div className="page">
        <section className="about-hero">
          <h2>About Me</h2>
          <p>I like tech.</p>
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

        <section className="about-section">
          <h2>Education</h2>
          <div className="Education-list">
            {Education.map((edu, i) => (
              <div key={i} className="exp-item">
                <div className="exp-header">
                  <h3>{edu.institution}</h3>
                  <span className="exp-period">{edu.period}</span>
                </div>
                <p className="exp-company">{edu.location}</p>
                <p className="exp-desc">{edu.level}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
