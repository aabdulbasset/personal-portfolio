"use client";
import { Box, Button, Flex, Grid, Heading } from "@radix-ui/themes";
import { SectionSeperator } from "./ui/sectionsSeperator";

export default function ContactSection() {
  return (
    <Flex direction={"column"} className="mt-12">
      <SectionSeperator sectionName="Contact" />

      <Heading size={"9"} className="text-white ml-4 text-center pt-12">
        Let's build something great!
      </Heading>
      <button className="mb-12 border-2 border-[#05420e] transition-all hover:bg-[#05420e] mt-12 w-[15rem] mx-auto rounded-full p-4 ">
        <a
          className="text-white text-xl font-extrabold"
          href="mailto:ahmed@aabdulbasset.com"
        >
          Get in Touch
        </a>
      </button>
    </Flex>
  );
}
