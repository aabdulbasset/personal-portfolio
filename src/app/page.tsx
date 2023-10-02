import "@radix-ui/themes/styles.css";
import { Box, Flex, IconButton, Text } from "@radix-ui/themes";
import { Github, Linkedin, Mail } from "lucide-react";
import { MainBox } from "./components/mainBox";

export default async function Home() {
  const info = await fetch(process.env.DOMAIN + "api/")
    .then((res) => res.json())
    .catch((err) => console.log(err));
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
