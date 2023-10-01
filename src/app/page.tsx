import Image from "next/image";
import Navbar from "./components/navbar";
import "@radix-ui/themes/styles.css";
import { Box } from "@radix-ui/themes";
import AboutSection from "./components/aboutSection";
import ProjectsSection from "./components/projectsSection";

export default function Home() {
  return (
    <>
      <header
        id="navbar"
        className="py-6 justify-center flex w-full fixed backdrop-blur-sm"
        style={{
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Navbar />
      </header>
      <Box id="main-container" className="mx-auto flex w-3/4 flex-col">
        <section id="about" className="min-h-screen">
          <AboutSection />
        </section>
        <section id="projects" className="min-h-screen">
          <ProjectsSection />
        </section>
      </Box>
    </>
  );
}
