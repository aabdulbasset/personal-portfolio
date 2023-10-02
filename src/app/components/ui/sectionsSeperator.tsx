import { Heading } from "@radix-ui/themes";

export function SectionSeperator({ sectionName }: { sectionName: string }) {
  return (
    <div
      className="section-title flex my-8 items-center flex-grow justify-center gap-4"
      id={sectionName.toLowerCase() + "-section-title"}
    >
      <Heading
        style={{
          color: "white",
          textAlign: "center",
        }}
        as={"h1"}
        size={"8"}
      >
        {sectionName}
      </Heading>
      <div className="full-seperator flex-grow h-px w-px border border-[#20be44]  mt-2"></div>
    </div>
  );
}
