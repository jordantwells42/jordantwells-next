import Head from 'next/head'
import Footer from '../components/footer.js'
import Divider from '../components/divider.js'
import AboutMe from '../components/aboutme.js'
import Projects from '../components/projects.js'
import Landing from '../components/landing.js'
import Navbar from '../components/navbar.js'

export default function Home () {
  return (
    <>
      <Head>
        <title>Jordan Wells | jordantwells.com</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        ></meta>
        <meta
          property='og:description'
          content="A personal portfolio website for Jordan Wells. 
            I am a curious, project-oriented kind of guy.
            I am currently pursuing a Bachelor's degree in Chemical
            Engineering at the University of Texas at Austin, as well as a
            certificate in Elements of Computing.
            My interests have recently been in computational biology,
            biotechnology, web development, and computer science.
          "
        />
        <meta
          name='description'
          content="A personal portfolio website for Jordan Wells. 
            I am a curious, project-oriented kind of guy.
            I am currently pursuing a Bachelor's degree in Chemical
            Engineering at the University of Texas at Austin, as well as a
            certificate in Elements of Computing.
            My interests have recently been in computational biology,
            biotechnology, web development, and computer science.
          "
        />
        <meta property='og:title' content='Jordan Wells | jordantwells.com' key='title' />
        <meta
          property='og:image'
          content={
            '/jordan.webp'
          }
        />
        <meta property='og:url' content={'https://jordantwells.com'} />
        <link rel="canonical" href={'https://jordantwells.com'} />
      </Head>
      <div className='bg-slate-900 w-full overflow-x-hidden flex flex-col items-center'>
        <Navbar />
        <Landing />
        <AboutMe />
        <Divider />
        <Projects />
        <Footer />
      </div>
    </>
  )
}
