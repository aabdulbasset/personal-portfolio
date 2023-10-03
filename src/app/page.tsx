import "@radix-ui/themes/styles.css";
import { Box, Flex, IconButton, Text } from "@radix-ui/themes";
import { Github, Linkedin, Mail } from "lucide-react";
import { MainBox } from "./components/mainBox";

export default async function Home() {
  const info = await fetch(process.env.DOMAIN + "api/").then((res) =>
    res.json()
  );

  const projects = await (
    await fetch(process.env.DOMAIN + "api/projects/")
  ).json();

  //TODO: dynamic site name
  return (
    <>
      <MainBox info={info} projects={projects} />
      <footer className="w-full bg-[#1f153c] border-t">
        <Box className="text-slate-300 text-center p-12  flex flex-col gap-2 ">
          <Flex justify={"center"} gap={"2"}>
            <IconButton aria-label="Github icon">
              <a target="_blank" href={info.github} aria-label="Github link">
                <Github />
              </a>
            </IconButton>
            {info.linkedin && (
              <IconButton aria-label="Linkedin icon">
                <a
                  target="_blank"
                  href={info.linkedin}
                  aria-label="Linkedin Link"
                >
                  <Linkedin />
                </a>
              </IconButton>
            )}
            <IconButton aria-label="Email icon">
              <a href={"mailto:" + info.email} aria-label="Email to link">
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
