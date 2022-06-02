import Head from "next/head";
import { ProjectCard } from "../components/cards";
import MainNavbar from "../components/navbar";
import Section from "../components/section";
import Clouds from "../components/clouds";
import projectsJSON from "../public/projects.json";
import Footer from "../components/footer";
import Divider from "../components/divider";

let projects = JSON.parse(JSON.stringify(projectsJSON));

export default function Home() {
  return (
    <>
      <Head>
        <title>Jordan Wells</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="background" id="Home">
        <MainNavbar />
        <Clouds />
        <Section name="About Me">
          <div className="container">
            <p>
              {" "}
              I am a curious, project-oriented kind of guy.
              <br></br>
              <br></br>
              <br></br>I am currently pursuing a Bachelor&apos;s degree in
              Chemical Engineering at the University of Texas at Austin, and
              supplementing that with a certificate in Elements of Computing. My
              major areas of focus have been on computational biology,
              biotechnology, and computer science.
            </p>
          </div>
        </Section>
        <Divider />
        <Section className="container" name="Projects">
          <div className="row justify-content-center">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                img={project.images[0]}
                alt={project.alts[0]}
                title={project.title}
                subtitle={project.subtitle}
                language={project.skills.join(" | ")}
              />
            ))}
          </div>
        </Section>
        <Divider />
        <Footer />
      </div>
    </>
  );
}
