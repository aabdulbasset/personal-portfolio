import { Flex, Grid, Heading, Text } from "@radix-ui/themes";
import ProjectCard from "./ui/projectCard";
import { SectionSeperator } from "./ui/sectionsSeperator";

export default function Projects() {
  const projects: Project[] = [
    {
      id: "0",
      title: "Project 1",
      description: "This is a description",
      imageURL: "971.jpg",
      githubURL: "test",
      liveURL: "",
      technologies: [
        {
          name: "React.js",
          color: "#268fb5",
        },
        {
          name: "Next.js",
          color: "Black",
        },
      ],
    },
    {
      id: "0",
      title: "Project 1",
      description: "This is a description",
      imageURL: "971.jpg",
      githubURL: "test",
      liveURL: "test",
      technologies: [
        {
          name: "React.js",
          color: "#268fb5",
        },
        {
          name: "Next.js",
          color: "Black",
        },
      ],
    },
    {
      id: "0",
      title: "Project 1",
      description: "This is a description",
      imageURL: "971.jpg",
      githubURL: "test",
      liveURL: "",
      technologies: [
        {
          name: "React.js",
          color: "#268fb5",
        },
        {
          name: "Next.js",
          color: "Black",
        },
      ],
    },
  ];
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
