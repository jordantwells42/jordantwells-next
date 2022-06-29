import Image from "next/image";
import Head from "next/head";
import MainNavbar from "../../components/navbar";
import projectsJSON from "../../public/projects.json";
import Divider from "../../components/divider";
import { Card } from "../../components/cards";
import Footer from "../../components/footer";

const projects = JSON.parse(JSON.stringify(projectsJSON));

export default function Project({ project }) {
  return (
    <>
      <Head>
        <title>Jordan Wells - {project.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainNavbar />
      <div
        style={{ backgroundImage: "url(" + project.images[0] + ")" }}
        className="herobg container-fluid"
      ></div>
      <div className="herotext">
        <h1 className="align-middle text-center">{project.title}</h1>
        <br></br>
        <h2 className="align-middle text-center">{project.subtitle}</h2>
      </div>
      <div className="container pt-5">
        <p className="col py-5">{project.desc}</p>
      </div>
      <Divider />
      <div className="container py-5">
        <div className="row justify-content-center">
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
      </div>
      <Divider />
      <Footer />
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

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      project,
    },
  };
}
