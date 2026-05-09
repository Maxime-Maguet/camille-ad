import * as m from "motion/react-m";

import { ReactNode } from "react";

type Direction = "up" | "left" | "right";
type RevealProps = {
  direction?: Direction;
  children: ReactNode;
  className?: string;
};

const itemsVariants = {
  up: { initial: { opacity: 0, y: 28 } },
  left: { initial: { opacity: 0, x: -24 } },
  right: { initial: { opacity: 0, x: 24 } },
};

export default function Reveal({
  direction,
  children,
  className,
}: RevealProps) {
  return (
    <m.div
      initial={itemsVariants[direction ?? "up"].initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.85, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {children}
    </m.div>
  );
}
