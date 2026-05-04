import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { ProjectsSection } from "@/components/projects-section";
import { Capabilities } from "@/components/capabilities";
import { Footer } from "@/components/footer";
import { Dock } from "@/components/dock";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProjectsSection />
      <Capabilities />
      <Footer />
      <Dock />
    </>
  );
}
