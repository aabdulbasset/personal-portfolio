"use client";
import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import { MotionBox } from "./ui/motionBox";
import Image from "next/image";
export default function AboutSection({
  name,
  location,
}: {
  name: string;
  location: string;
}) {
  return (
    <Flex
      align={"center"}
      justify={"center"}
      style={{
        height: "100vh",
      }}
    >
      <MotionBox
        className="flex-grow text-slate-200"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: true }}
      >
        <Text
          size={"7"}
          style={{
            color: "#d3d9e0",
          }}
        >
          Hello there 👋
        </Text>
        <Heading
          className="text-4xl"
          size={"9"}
          style={{
            lineHeight: "1.5",
          }}
        >
          I&apos;m <span id="my-name"> {name}</span>
        </Heading>
        <Text size={"7"}>
          A fullstack web developer currently located in {location}.
        </Text>
      </MotionBox>
      <Box className="flex-grow">
        <Image
          src="/freelancer.png"
          width={700}
          height={700}
          className="hero-image mx-auto -z-10"
          alt="hero image of a freelancer"
        ></Image>
        <div className="image-shadow"></div>
      </Box>
    </Flex>
  );
}
