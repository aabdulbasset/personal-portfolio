"use client";
import { Box, Flex, Grid, Heading, Text } from "@radix-ui/themes";
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
    <Grid
      align={"center"}
      justify={"center"}
      style={{
        height: "100vh",
      }}
      columns={{
        initial: "1",
        md: "2",
      }}
    >
      <MotionBox
        className="flex-grow text-slate-200 text-center lg:text-left"
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
          size={{
            initial: "3",
            sm: "6",
            lg: "7",
          }}
          style={{
            color: "#d3d9e0",
          }}
        >
          Hello there 👋
        </Text>
        <Heading
          className="text-4xl"
          size={{
            initial: "7",
            sm: "9",
            xl: "9",
          }}
          style={{
            lineHeight: "1.5",
          }}
        >
          I&apos;m <span id="my-name"> {name}</span>
        </Heading>
        <Text
          size={{
            initial: "3",
            sm: "6",
            lg: "7",
          }}
        >
          A fullstack web developer currently located in {location}.
        </Text>
      </MotionBox>
      <Box className="flex-grow">
        <Image
          src="/freelancer.png"
          width={600}
          height={600}
          className="hero-image mx-auto -z-10"
          alt="hero image of a freelancer"
        ></Image>
        <div className="image-shadow"></div>
      </Box>
    </Grid>
  );
}
