import AnimatedBackground from "../components/home/AnimatedBackground";
import HeroContent from "../components/home/HeroSection";

const Home = () => {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      <AnimatedBackground />
      <HeroContent />
    </main>
  );
};

export default Home;
