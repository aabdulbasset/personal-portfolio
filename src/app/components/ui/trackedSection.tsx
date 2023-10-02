"use client";

import { ViewContext } from "@/app/context/viewContext";
import { useInView } from "framer-motion";
import { useContext, useEffect, useRef } from "react";

export function TrackedSection({ children, index, ...props }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.5,
    once: false,
  });
  const viewContext = useContext(ViewContext);
  useEffect(() => {
    if (isInView) {
      viewContext.setSelected(index);
    }
  }, [isInView]);
  return (
    <section ref={ref} {...props}>
      {children}
    </section>
  );
}
