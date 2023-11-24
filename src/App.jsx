import { Floating } from "flowbite-react/lib/esm/components/Floating";
import "./App.css";
import Curriculum from "./components/curriculum/Curriculum";
import Footer from "./components/features/footer/Footer";
import Home from "./components/features/home/Home";
import Nav from "./components/features/nav/Nav";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="bg-slate-200 dark:bg-gray-900">
      <Nav />
      <Home />
      <Curriculum/>
      <Projects/>
      <Footer/>
      
    </div>
    
  );
}

export default App;
