"use client";
import { Flex, Grid, Heading, Text } from "@radix-ui/themes";
import ProjectCard from "./ui/projectCard";
import { SectionSeperator } from "./ui/sectionsSeperator";
import { MotionFlex } from "./ui/motionFlex";

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <MotionFlex
      direction={"column"}
      initial={{
        translateY: 100,
        opacity: 0,
      }}
      whileInView={{
        translateY: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
    >
      <SectionSeperator sectionName={"Projects"} />

      <Grid id="projects-container" columns={{ sm: "1", md: "2" }} gap={"4"}>
        {projects.map((project) => {
          return <ProjectCard project={project} key={project.id} />;
        })}
      </Grid>
    </MotionFlex>
  );
}
