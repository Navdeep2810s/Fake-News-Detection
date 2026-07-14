import Navbar from "../components/navbar/navbar";
import Hero from "../components/hero/hero";
import Features from "../components/Features/Features";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Stats from "../components/Stats/Stats";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
    </>
  );
}

export default Home;