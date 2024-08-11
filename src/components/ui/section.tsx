import type { ReactNode } from "react";

export default function Section({ children }: { children: ReactNode }) {
  return <section className="mx-auto max-w-5xl px-5 pt-20">{children}</section>;
}
