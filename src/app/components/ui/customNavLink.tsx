"use client";
import { Link } from "@radix-ui/themes";
import { useRef, useState } from "react";
import "./navbar.css";
export default function CustomLink({
  children,
  location,
  isSelected,
  id,
}: {
  children: React.ReactNode;
  location: string;
  isSelected: boolean;
  id: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      style={{
        color: "#02cc45",
        padding: "2px",
      }}
      underline="hover"
      data-id={id}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      weight={"bold"}
      className={isSelected ? "selected" : hovered ? "hovered" : ""}
      href={location}
    >
      {children}
    </Link>
  );
}
