"use client";

import { cn } from "@/lib/utils";
import InfinityScroll from "./infinite-scroll";
import FlashCard from "./flash-card";

const projects = require('@/data/projects.json')

const firstRow = projects.slice(0, projects.length / 2);
const secondRow = projects.slice(projects.length / 2);

function ProjectSection() {
  return (
    <>
      <div id="projects-section" className="relative flex h-auto p-12 px-12 w-[100%] flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent md:shadow-xl">
        <h2>Projects</h2>
        <InfinityScroll pauseOnHover className="[--duration:20s] my-5">
          {firstRow.map((projects: React.JSX.IntrinsicAttributes & { name: string; body: string; img: string; site: string; github: string; contribs: string[]; }) => (
            <FlashCard key={projects.name} {...projects} />
          ))}
        </InfinityScroll>
        <InfinityScroll reverse pauseOnHover className="[--duration:20s] my-5" jsonData={projects}>
          {secondRow.map((projects: React.JSX.IntrinsicAttributes & { name: string; body: string; img: string; site: string; github: string; contribs: string[]; }) => (
            <FlashCard key={projects.name} {...projects} />
          ))}
        </InfinityScroll>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-stone-100 dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-stone-100 dark:from-background"></div>
      </div>
    </>
  );
}

export default ProjectSection;
