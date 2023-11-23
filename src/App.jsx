import "./App.css";
import Home from "./components/features/home/Home";
import Nav from "./components/features/nav/Nav";

function App() {
  return (
    <div className="bg-slate-200 dark:bg-gray-900">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
