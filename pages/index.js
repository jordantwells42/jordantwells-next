import Head from "next/head";
import Footer from "../components/Footer";
import Divider from "../components/Divider";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";


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
