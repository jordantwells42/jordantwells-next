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
          content='A personal portfolio website for Jordan Wells'
        />
        <meta
          name='description'
          content='A personal portfolio website for Jordan Wells'
        />
        <meta property='og:title' content='Jordan Wells' key='title' />
        <meta
          property='og:image'
          content={
            'https://i.ibb.co/zRKHD47/Screen-Shot-2022-07-01-at-3-18-55-PM.png'
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
