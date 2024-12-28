import { siteConfig } from "@/config/site";
import Section from "./section.js";

export default function Publications() {
  return (
    <Section name="Publications">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 sm:gap-2 flex-wrap items-center justify-center">
          {siteConfig.publications.map((pub) => (
            <a
              className="bg-indigo-950 hover:bg-indigo-900 rounded-xl hover-hover group-hover:cursor-pointer p-4 w-full flex flex-col justify-start items-start text-left w-full"
              target="_blank"
              rel="noreferrer"
              key={pub.title}
              href={pub.link}
            >
              <p className="w-full text-lg font-bold">{pub.title}</p>
              <p className="w-full text-sm font-normal italic">{pub.authors}</p>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
