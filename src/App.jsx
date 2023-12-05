import "./App.css";
import Footer from "./components/features/footer/Footer";
import Home from "./components/features/home/Home";
import Nav from "./components/features/nav/Nav";
import Projects from "./components/projects/Projects";
//import Contact from "./components/features/contact/Contact";
import { Route, Routes } from "react-router-dom";
import About from "./components/features/about/About";

function App() {
  return (
    <div className="bg-slate-200 dark:bg-slate-900">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
