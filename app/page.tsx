import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ReviewSection from "@/components/ReviewSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Navbar />
      <Hero />
      <ReviewSection />
      <Footer />
    </main>
  );
}