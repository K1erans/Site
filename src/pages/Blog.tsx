import { useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import { allPosts } from "../lib/posts";

const filters = ["Education", "Projects", "misc"] as const;

export default function Blog() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number] | "All">("All");
  const visiblePosts =
    activeFilter === "All"
      ? allPosts
      : allPosts.filter((post) => post.category === activeFilter);

  return (
    <PageLayout>
      <div className="page">
        <h2>Blog</h2>
        {allPosts.length === 0 ? (
          <p className="muted">No posts yet — check back soon.</p>
        ) : (
          <>
            <div className="blog-filters" aria-label="Blog categories">
              <button
                type="button"
                className={`blog-filter${activeFilter === "All" ? " is-active" : ""}`}
                onClick={() => setActiveFilter("All")}
              >
                All
              </button>
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={`blog-filter${activeFilter === filter ? " is-active" : ""}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>

            {visiblePosts.length === 0 ? (
              <p className="muted">No posts in this category yet.</p>
            ) : (
              <div className="post-list">
                {visiblePosts.map((post) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="post-item"
                  >
                    <span className="post-date">{post.date}</span>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <span className="post-category">{post.category}</span>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </PageLayout>
  );
}
