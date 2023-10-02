"use client";
import { Box, Flex, IconButton, Text } from "@radix-ui/themes";
import AboutSection from "./aboutSection";
import ProjectsSection from "./projectsSection";
import ContactSection from "./contactSection";
import Navbar from "./navbar";
import { useContext, useState } from "react";
import { ViewContext } from "../context/viewContext";
import { TrackedSection } from "./ui/trackedSection";

export function MainBox({
  info,
  projects,
}: {
  info: any;
  projects: Project[];
}) {
  const [selected, setSelected] = useState(0);
  return (
    <ViewContext.Provider value={{ selected, setSelected }}>
      <header
        id="navbar"
        className="py-4 justify-center flex w-full fixed backdrop-blur-md z-20 border-b "
        style={{
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Navbar />
      </header>
      <Box
        id="main-container"
        className="mx-auto flex lg:w-3/4 w-11/12 flex-col mb-8"
      >
        <TrackedSection
          index={0}
          id="about"
          className="min-h-screen md:mt-0 mt-[10vh]"
        >
          <AboutSection name={info.name} location={info.location} />
        </TrackedSection>
        <TrackedSection index={1} id="projects" className="min-h-screen">
          {projects.length > 0 && <ProjectsSection projects={projects} />}
        </TrackedSection>
        <TrackedSection index={2} id="contact">
          <ContactSection email={info.email} />
        </TrackedSection>
      </Box>
    </ViewContext.Provider>
  );
}
