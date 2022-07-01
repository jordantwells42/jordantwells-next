import Head from "next/head";
import Footer from "../components/footer";
import Divider from "../components/divider";
import AboutMe from "../components/aboutme";
import Projects from "../components/projects";
import Landing from "../components/landing";
import Navbar from "../components/navbar";


export default function Home() {
  return (
    <>
      <Head>
        <title>Jordan Wells</title>
        <meta name="viewport"/>
      </Head>
      <div className="bg-slate-900 w-full overflow-x-hidden flex flex-col items-center" id="Home">
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
