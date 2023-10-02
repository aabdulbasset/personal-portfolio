import { Flex, Grid, Heading, Text } from "@radix-ui/themes";
import ProjectCard from "./ui/projectCard";
import { SectionSeperator } from "./ui/sectionsSeperator";
export default async function Projects() {
  const projects: Project[] = await (
    await fetch(process.env.DOMAIN + "api/projects")
  ).json();
  return (
    <Flex direction={"column"}>
      <SectionSeperator sectionName={"Projects"} />

      <Grid id="projects-container" columns={{ sm: "1", md: "2" }} gap={"4"}>
        {projects.map((project) => {
          return <ProjectCard project={project} key={project.id} />;
        })}
      </Grid>
    </Flex>
  );
}
