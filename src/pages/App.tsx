import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import About from "./About";
import Blog from "./Blog";
import Projects from "./Project";

function App() {
  return (
    <section className="layout">
      <Header />
      <Sidebar />
      <main className="body">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </section>
  );
}

export default App;
