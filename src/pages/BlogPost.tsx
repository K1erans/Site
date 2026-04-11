import { useParams, Link } from "react-router-dom";
import Markdown from "react-markdown";
import PageLayout from "../components/PageLayout";
import { getPost } from "../lib/posts";

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
        <Markdown>{post.content}</Markdown>
      </div>
    </PageLayout>
  );
}
