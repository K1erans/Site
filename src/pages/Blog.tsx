interface Post {
  title: string;
  date: string;
  description: string;
  url: string;
}

const posts: Post[] = [
  {
    title: "Your First Post Title",
    date: "2025-01-01",
    description: "A short description of what this post covers.",
    url: "#",
  },
  {
    title: "Another Post",
    date: "2024-11-15",
    description: "Brief summary of the topic you wrote about.",
    url: "#",
  },
];

export default function Blog() {
  return (
    <div className="page">
      <h2>Blog</h2>
      {posts.length === 0 ? (
        <p className="muted">No posts yet — check back soon.</p>
      ) : (
        <div className="post-list">
          {posts.map((post) => (
            <a
              key={post.url + post.title}
              href={post.url}
              className="post-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="post-date">{post.date}</span>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
