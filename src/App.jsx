import Home from "./pages/Home";
import Navbar from "./components/nav/Navbar";
import CustomCursor from "./components/CustomCursor";
import About from "./pages/About";
import Project from "./pages/Project";
import ProjGrok from "./pages/ProjGrok";
import ProjDeep from "./pages/ProjDeep";
import ProjChat from "./pages/ProjChat";
import ProjClaude from "./pages/ProjClaude";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <ProjGrok />
      <Contact />
    </>
  );
}

export default App;
