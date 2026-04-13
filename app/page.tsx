"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

export default function Home() {
  const { resolvedTheme } = useTheme();

  return (
    <main>
      <section className="relative h-[70vh] min-h-[400px] w-full">
        <Image
          src={
            resolvedTheme === "dark"
              ? "/steve-busch-JD7T8Y1B79U-unsplash.jpg"
              : "/gabriel-alenius-USXfF_ONUGo-unsplash.jpg"
          }
          alt="Hero image"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="max-w-2xl text-center space-y-6 px-4">
            <h1 className="text-4xl font-bold tracking-tight dark:text-white text-foreground sm:text-5xl">
              AI-Powered Web Development
            </h1>
            <p className="text-lg dark:text-white/80 text-foreground/70">
              Exploring the possibilities of modern web development using AI.
              This site serves as a demo showcasing what&apos;s possible when
              combining cutting-edge tools with creative ideas.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
