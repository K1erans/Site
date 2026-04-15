import { lazy, Suspense } from "react";
import { Link, useParams } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import { getPost } from "../lib/posts";
import { loadMarkdownContent } from "./blogPostLoader";

const MarkdownContent = lazy(loadMarkdownContent);

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPost(slug) : undefined;

  if (!post) {
    return (
      <PageLayout>
        <div className="page">
          <p className="muted">Post not found.</p>
          <Link to="/blog">← Back to blog</Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="page">
        <Link to="/blog" className="muted">← Back to blog</Link>
        <span className="post-date">{post.date}</span>
        <Suspense fallback={<p className="muted">Loading post content...</p>}>
          <MarkdownContent content={post.content} />
        </Suspense>
      </div>
    </PageLayout>
  );
}
