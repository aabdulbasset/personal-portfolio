import { Badge, Box, Button, Flex } from "@radix-ui/themes";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Box className="z-10 w-full backdrop-blur-lg rounded-xl shadow-sm overflow-hidden border border-slate-800 bg-[#3F306B20]">
      <div>
        <img
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "300px",
            objectFit: "cover",
          }}
          src={project.imageURL}
        ></img>
      </div>
      <Flex direction={"column"} gap={"4"} className="px-6 py-8">
        <h1 className="text-white text-3xl font-extrabold	">{project.title}</h1>
        <h3 className="text-slate-500">{project.description}</h3>
        <Flex gap={"1"}>
          {project.technologies.map((technology) => {
            return (
              <Badge
                style={{
                  backgroundColor: technology.color,
                }}
                radius="large"
                variant="solid"
                size="2"
              >
                {technology.name}
              </Badge>
            );
          })}
        </Flex>
        <div className="ml-auto flex items-center justify-center">
          {project.githubURL && (
            <a href={project.githubURL} target="_blank">
              <button className="text-[#1dab42] p-2 rounded-lg transition-all transition-100 border border-transparent hover:border-[#064610] hover:backdrop-blur-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </button>
            </a>
          )}
          {project.liveURL && (
            <a href={project.githubURL} target="_blank">
              <button className="flex items-center justify-center text-[#1dab42] p-2 rounded-lg transition-all transition-100 border border-transparent hover:border-[#064610] hover:backdrop-blur-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" x2="21" y1="14" y2="3"></line>
                </svg>
              </button>
            </a>
          )}
        </div>
      </Flex>
    </Box>
  );
}
