import Home from "./pages/Home";
import Navbar from "./components/nav/Navbar";
import CustomCursor from "./components/CustomCursor";
import About from "./pages/About";
import About1 from "./pages/About1";
import About2 from "./pages/About2";

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Home />
      <About />
      <About1 />
      <About2 />
    </>
  );
}

export default App;
