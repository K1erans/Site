import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import ThemeToggle from "./ThemeToggle";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <section className="page-layout">
      <div className="page-layout-topbar">
        <button className="back-btn" onClick={() => navigate("/")}>
          ← Back
        </button>
        <ThemeToggle />
      </div>
      <main className="body">{children}</main>
      <Footer />
    </section>
  );
}
