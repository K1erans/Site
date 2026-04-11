import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <section className="page-layout">
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back
      </button>
      <main className="body">{children}</main>
      <Footer />
    </section>
  );
}
