import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import About from "./About";
import Blog from "./Blog";
import Projects from "./Project";

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
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default App;
