import Head from "next/head";
import Footer from "../components/footer.js";
import Divider from "../components/divider.js";
import AboutMe from "../components/aboutme.js";
import Projects from "../components/projects.js";
import Landing from "../components/landing.js";
import Navbar from "../components/navbar.js";


export default function Home() {
  return (
    <>
      <Head>
        <title>Jordan Wells</title>
         <meta
          property="og:description"
          content="A personal portfolio website for Jordan Wells"
        />
        <meta property="og:title" content="Jordan Wells" key="title" />
        <meta property="og:image" content={"https://ibb.co/swLJzV6"} />
      </Head>
      <div className="bg-slate-900 w-full overflow-x-hidden flex flex-col items-center">
        <Navbar />
        <Landing />
        <AboutMe />
        <Divider />
        <Projects />
        <Footer /> 
      </div>
    </>
  );
}
