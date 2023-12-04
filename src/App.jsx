import "./App.css";
import Curriculum from "./components/curriculum/Curriculum";
import Footer from "./components/features/footer/Footer";
import Home from "./components/features/home/Home";
import Nav from "./components/features/nav/Nav";
import Projects from "./components/projects/Projects";
//import Contact from "./components/features/contact/Contact";
import Education from "./components/education/Education";
import { Floating } from "flowbite-react/lib/esm/components/Floating";

function App() {
  return (
    <div className="bg-slate-200 dark:bg-gray-900">
      <Nav />
      <Home />
      <Curriculum/>
      <Education/>
      <Projects/>
      
      <Footer/>
      
      
    </div>
    
  );
}

export default App;
