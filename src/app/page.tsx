import Navbar from "./components/navbar";
import "@radix-ui/themes/styles.css";
import { Box, Flex, IconButton, Text } from "@radix-ui/themes";
import AboutSection from "./components/aboutSection";
import ProjectsSection from "./components/projectsSection";
import ContactSection from "./components/contactSection";
import { Github, Linkedin, Mail } from "lucide-react";
export default async function Home() {
  let info = await fetch(process.env.DOMAIN + "api/").then((res) => res.json());
  //TODO: dynamic site name
  return (
    <>
      <header
        id="navbar"
        className="py-6 justify-center flex w-full fixed backdrop-blur-md z-20 border-b "
        style={{
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Navbar />
      </header>
      <Box id="main-container" className="mx-auto flex w-3/4 flex-col mb-8">
        <section id="about" className="min-h-screen">
          <AboutSection name={info.name} location={info.location} />
        </section>
        <section id="projects" className="min-h-screen">
          <ProjectsSection />
        </section>
        <section id="contact">
          <ContactSection email={info.email} />
        </section>
      </Box>
      <footer className="w-full bg-[#1f153c] border-t">
        <Box className="text-slate-300 text-center p-12  flex flex-col gap-2 ">
          <Flex justify={"center"} gap={"2"}>
            <IconButton>
              <a target="_blank" href={info.github}>
                <Github />
              </a>
            </IconButton>
            {info.linkedin && (
              <IconButton>
                <a target="_blank" href={info.linkedin}>
                  <Linkedin />
                </a>
              </IconButton>
            )}
            <IconButton>
              <a href={"mailto:" + info.email}>
                <Mail />
              </a>
            </IconButton>
          </Flex>
          <Text className="block font-bold">
            Made with Next.js, TailwindCSS, Radix-UI
          </Text>
          <Text className="text-sm">
            © {new Date().getFullYear()} All rights reserved
          </Text>
        </Box>
      </footer>
    </>
  );
}
