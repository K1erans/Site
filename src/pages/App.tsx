import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import About from "./About";
import Blog from "./Blog";
import Projects from "./Project";
import { loadBlogPostPage } from "./blogPostLoader";

const BlogPost = lazy(loadBlogPostPage);

function Home() {
  return (
    <section className="layout">
      <Header />
      <Sidebar />
      <Footer />
    </section>
  );
}

function App() {
  return (
    <Suspense fallback={<p className="route-loading">Loading...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Suspense>
  );
}

export default App;
