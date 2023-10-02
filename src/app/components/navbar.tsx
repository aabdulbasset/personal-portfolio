"use client";
import { Box, Flex } from "@radix-ui/themes";
import CustomLink from "./ui/customNavLink";
import { useContext, useEffect, useState } from "react";
import { ViewContext } from "../context/viewContext";

export default function Navbar() {
  const { selected, setSelected } = useContext(ViewContext);

  const routes = [
    {
      name: "About",
      location: "#about",
    },
    {
      name: "Projects",
      location: "#projects",
    },
    {
      name: "Contact",
      location: "#contact",
    },
  ];

  //TODO: animate logo
  return (
    <Box className="w-3/4">
      <Flex justify={"between"} grow={"1"}>
        <h1
          style={{
            color: "#02cc45",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          aabdulbasset
        </h1>
        <Flex
          gap={"5"}
          onClick={(e) => setSelected(e.currentTarget.dataset.id)}
        >
          {routes.map((route, index) => {
            return (
              <CustomLink
                id={index}
                isSelected={selected == index}
                key={index}
                location={route.location}
              >
                {route.name}
              </CustomLink>
            );
          })}
        </Flex>
      </Flex>
    </Box>
  );
}
