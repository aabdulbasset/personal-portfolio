import { Box, Flex, Heading, Text } from "@radix-ui/themes";

export default function AboutSection() {
  return (
    <Flex
      align={"center"}
      justify={"center"}
      style={{
        height: "100vh",
      }}
    >
      <Box className="flex-grow text-slate-200">
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
          I'm <span id="my-name"> Ahmed Abdulbasset</span>
        </Heading>
        <Text size={"7"}>
          A fullstack web developer currently located in Egypt.
        </Text>
      </Box>
      <Box className="flex-grow">
        <img
          src="freelancer.png"
          width={"700px"}
          className="hero-image mx-auto"
        ></img>
        <div className="image-shadow"></div>
      </Box>
    </Flex>
  );
}
