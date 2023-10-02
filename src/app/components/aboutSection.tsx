import { Box, Flex, Heading, Text } from "@radix-ui/themes";

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
          I'm <span id="my-name"> {name}</span>
        </Heading>
        <Text size={"7"}>
          A fullstack web developer currently located in {location}.
        </Text>
      </Box>
      <Box className="flex-grow">
        <img
          src="freelancer.png"
          width={"700px"}
          className="hero-image mx-auto -z-10"
        ></img>
        <div className="image-shadow"></div>
      </Box>
    </Flex>
  );
}
