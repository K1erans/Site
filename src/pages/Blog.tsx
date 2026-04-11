import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import { allPosts } from "../lib/posts";

export default function Blog() {
  return (
    <PageLayout>
      <div className="page">
        <h2>Blog</h2>
        {allPosts.length === 0 ? (
          <p className="muted">No posts yet — check back soon.</p>
        ) : (
          <div className="post-list">
            {allPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="post-item"
              >
                <span className="post-date">{post.date}</span>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </PageLayout>
  );
}
