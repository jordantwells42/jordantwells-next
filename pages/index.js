import Head from "next/head";
import { ProjectCard } from "../components/Cards";
import MainNavbar from "../components/Navbar";
import Section from "../components/Section";
import Clouds from "../components/Clouds";

import Footer from "../components/Footer";
import Divider from "../components/Divider";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";


export default function Home() {
  return (
    <>
      <Head>
        <title>Jordan Wells</title>
        <meta name="viewport"/>
      </Head>
      <div className="bg-cyan-600 w-full overflow-x-hidden flex flex-col items-center" id="Home">
        <Clouds />
        <AboutMe />
        <Divider />
        <Projects />
      </div>
    </>
  );
}
