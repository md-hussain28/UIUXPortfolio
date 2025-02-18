import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./pages/Home";
import ParticlesBackground from "./components/animations/ParticlesBackground";
import AnimatedBackground from "./components/home/AnimatedBackground";
import Navbar from "./components/nav/Navbar";
import HeroContent1 from "./components/home/Home1";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
      {/* <HeroContent1 /> */}
    </>
  );
}

export default App;
