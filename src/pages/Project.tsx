import { useState, useEffect } from "react";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  fork: boolean;
}

function ProjectCard({ repo }: { repo: Repo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <h3>{repo.name}</h3>
      <p className="project-desc">
        {repo.description ?? "No description provided."}
      </p>
      {repo.language && <p className="project-lang">{repo.language}</p>}
      <div className="project-stats">
        <span className="stat">⭐ {repo.stargazers_count}</span>
        <span className="stat">🍴 {repo.forks_count}</span>
      </div>
    </a>
  );
}

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/K1erans/repos?sort=updated&per_page=30")
      .then((r) => {
        if (!r.ok) throw new Error("GitHub API error");
        return r.json();
      })
      .then((data: Repo[]) => {
        setRepos(data.filter((r) => !r.fork));
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load projects from GitHub.");
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="page">
        <p className="muted">Loading projects...</p>
      </div>
    );
  if (error)
    return (
      <div className="page">
        <p className="muted">{error}</p>
      </div>
    );

  return (
    <div className="page">
      <h2>Projects</h2>
      <div className="project-grid">
        {repos.map((repo) => (
          <ProjectCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}
