import { ProjectCard } from "./cards.js";
import { siteConfig } from "@/config/site";
import Section from "./section.js";

export default function Projects() {
  return (
    <Section name="Projects">
      <div className="w-full flex flex-col items-start justify-center">
        <h3 className="text-start text-xl font-light pb-5 italic">
          Learn more by clicking an image
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-4 sm:gap-2 flex-wrap items-center justify-center">
          {siteConfig.projects.map((project) => (
            <ProjectCard
              key={project.title}
              img={project.images[0]}
              alt={project.alts[0]}
              title={project.title}
              className=""
              subtitle={project.subtitle}
              language={project.skills.join(" | ")}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
