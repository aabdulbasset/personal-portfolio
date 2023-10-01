import { Flex, Heading, Text } from "@radix-ui/themes";
import ProjectCard from "./ui/projectCard";

export default function Projects() {
  const projects: Project[] = [
    {
      id: "0",
      title: "Project 1",
      description: "This is a description",
      imageURL: "https://picsum.photos/200/300",
      githubURL: "",
      liveURL: "",
      technologies: ["React", "Next.js", "TailwindCSS"],
    },
  ];
  return (
    <Flex direction={"column"}>
      <div
        className="section-title flex items-center flex-grow justify-center gap-4"
        id="projects-section-title"
      >
        <Heading
          style={{
            color: "white",
            textAlign: "center",
          }}
          as={"h1"}
          size={"8"}
        >
          Projects
        </Heading>
        <div className="full-seperator flex-grow h-px w-px border border-[#20be44]  mt-2"></div>
      </div>
      <Flex
        id="projects-container"
        align={"center"}
        justify={"center"}
        gap={"2"}
        wrap={"wrap"}
        className=""
      >
        {projects.map((project) => {
          return <ProjectCard project={project} key={project.id} />;
        })}
      </Flex>
    </Flex>
  );
}
