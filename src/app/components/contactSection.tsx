"use client";
import { Box, Button, Flex, Grid, Heading } from "@radix-ui/themes";
import { SectionSeperator } from "./ui/sectionsSeperator";
import { MotionFlex } from "./ui/motionFlex";

export default function ContactSection({ email }: { email: string }) {
  return (
    <MotionFlex initial={{
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
        
    }} direction={"column"} className="mt-12">
      <SectionSeperator sectionName="Contact" />

      <Heading size={"9"} className="text-white ml-4 text-center pt-12">
        Let's build something great!
      </Heading>
      <a
          className="text-white text-xl font-extrabold mx-auto"
          href={"mailto:" + email}
        >
      <button className="mb-12 border-2 border-[#05420e] transition-all hover:bg-[#05420e] mt-12 w-[15rem] rounded-full p-4 ">

          Get in Touch
        
      </button>
      </a>
    </MotionFlex>
  );
}
