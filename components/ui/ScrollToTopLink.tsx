"use client";

import Link from "next/link";

export default function ScrollToTopLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={(e) => {
        if (window.location.pathname === "/") {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
          history.replaceState(null, "", "/");
        }
      }}
      className={className}
    >
      {children}
    </Link>
  );
}
