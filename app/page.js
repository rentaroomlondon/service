import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Capabilities from "@/app/components/Capabilities";
import Approach from "@/app/components/Approach";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Capabilities />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
