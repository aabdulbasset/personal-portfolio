"use client";
import { Box, Button, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { SectionSeperator } from "./ui/sectionsSeperator";
import { MotionFlex } from "./ui/motionFlex";

export default function ContactSection({ email }: { email: string }) {
  return (
    <MotionFlex
      initial={{
        translateY: 100,
        opacity: 0,
      }}
      whileInView={{
        translateY: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
        amount: 0.4,
      }}
      direction={"column"}
      className="mt-12"
    >
      <SectionSeperator sectionName="Contact" />

      <Heading
        size={{
          initial: "6",
          lg: "9",
        }}
        className="text-white ml-4 text-center pt-12"
      >
        Let&apos;s build something great!
      </Heading>
      <a
        className="text-white font-extrabold mx-auto mb-12 mt-12"
        href={"mailto:" + email}
        aria-label="Get in Touch Button"
      >
        <button
          aria-label="Get in Touch Button"
          className=" border-2 border-[#05420e] transition-all hover:bg-[#05420e]  w-[15rem] rounded-full p-4 "
        >
          <Text>Get in Touch</Text>
        </button>
      </a>
    </MotionFlex>
  );
}
