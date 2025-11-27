import Navbar from "./landingpage/Navbar";
import Hero from "./landingpage/Hero";
import Features from "./landingpage/Features";
import AIDemo from "./landingpage/AIDemo";
import Footer from "./landingpage/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <AIDemo />
    </main>
  );
}
