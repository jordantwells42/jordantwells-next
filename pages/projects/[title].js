import Image from "next/image";
import Head from "next/head";
import projectsJSON from "../../public/projects.json";
import Divider from "../../components/Divider";
import { Card } from "../../components/Cards";
import Footer from "../../components/Footer";
import ProjectLanding from "../../components/ProjectLanding";
import Section from "../../components/Section";
import Navbar from "../../components/Navbar";

const projects = JSON.parse(JSON.stringify(projectsJSON));

export default function Project({ project }) {
  return (
    <>
      <Head>
        <title>Jordan Wells - {project.title}</title>
        <meta name="description" content={project.title + ". " + project.subtitle} />
      </Head>
      <div className="bg-slate-900 w-full overflow-x-hidden flex flex-col items-center">
        <Navbar />
        <ProjectLanding src={project.images[0]} title={project.title} subtitle={project.subtitle} />
        <Section name="Description">
          <div className=''>
            <p>
              {project.desc}
            </p>
          </div>
        </Section>
        <Divider />
        <Section name="Learn More">
          <div className="grid w-full md:grid-cols-1 lg:grid-cols-2 md:gap-8 sm:gap-4 flex flex-row items-center justify-center">
            {project.links.map((link, idx) => (
              <Card
                img={project.images[(idx + 1) % project.images.length]}
                alt={project.alts[(idx + 1) % project.images.length]}
                key={link.title}
                title={link.title}
                subtitle={link.subtitle}
                link={link.link}
              />
            ))}
          </div>
        </ Section>
        <Footer />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { title: "minimage" } },
      { params: { title: "NoteTab" } },
      { params: { title: "Protein Viewer" } },
      { params: { title: "This Site" } },
      { params: { title: "Ray Marching" } },
      { params: { title: "PalArt" } },
      { params: { title: "They're a 10 but..." } },
    ],
    fallback: false, // false or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const project = projects.filter(
    (project) => project.title === params.title
  )[0];

  // By returning {props: {posts} }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      project,
    },
  };
}
