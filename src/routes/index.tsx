import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { StatsRow } from "@/components/portfolio/StatsRow";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { WhyMe } from "@/components/portfolio/WhyMe";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";


const title = "Muhammad Abdullah — Full-Stack & AI Developer";
const description =
  "Portfolio of Muhammad Abdullah: full-stack and AI developer, CS student at UCP, building voice agents, SaaS platforms and bold web interfaces.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <StatsRow />
        <Projects />
        <Skills />
        <Experience />
        <WhyMe />
        <Testimonials />
        <Contact />

      </main>
      <Footer />
    </div>
  );
}
