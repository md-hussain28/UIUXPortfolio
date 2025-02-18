import AnimatedBackground from "../components/home/AnimatedBackground";
import HeroContent1 from "../components/home/HeroSection";

const Home = () => {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      <AnimatedBackground />
      <HeroContent1 />
    </main>
  );
};

export default Home;
