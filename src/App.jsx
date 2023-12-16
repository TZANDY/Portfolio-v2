import "./App.css";
import Footer from "./components/features/footer/Footer";
import Home from "./components/features/home/Home";
import Nav from "./components/features/nav/Nav";
import Projects from "./components/projects/Projects";
//import Contact from "./components/features/contact/Contact";
import { Route, Routes } from "react-router-dom";
import About from "./components/features/about/About";
import Contact from "./components/features/contact/Contact";


function App() {
  return (
    <div id="pages" className="min-h-screen w-full bg-green-300 dark:bg-black bg-gradient-to-t from-indigo-800">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
