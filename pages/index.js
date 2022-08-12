import Head from 'next/head'
import Script from 'next/script'
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
          content='A personal portfolio website for Jordan Wells. 
            Chemical Engineering Student at the University of Texas at Austin and avid programmer.
          '
        />
        <meta
          name='description'
          content='A personal portfolio website for Jordan Wells. 
            Chemical Engineering Student at the University of Texas at Austin and avid programmer.
          '
        />
        <meta
          property='og:title'
          content='Jordan Wells | jordantwells.com'
          key='title'
        />
        <meta property='og:image' content={'/jordan.webp'} />
        <meta property='og:url' content={'https://jordantwells.com'} />
        <meta name='twitter:card' content='summary_large_image'></meta>
        <meta name='twitter:site' content='@jordantwells42' />
        <meta name='twitter:creator' content='@jordantwells42' />
        <meta name='twitter:title' content='Jordan Wells | jordantwells.com' />
        <meta
          name='twitter:description'
          content='A personal portfolio website for Jordan Wells. 
          Chemical Engineering Student at the University of Texas at Austin and avid programmer.
        '
        />
        <meta name='twitter:image' content='/jordan.webp' />
        <link rel='canonical' href={'https://jordantwells.com'} />
      </Head>
      <Script id='scheme' type='application/ld+json'>{`
{
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": "Jordan Wells",
  "url": "https://jordantwells.com",
  "image": "",
  "sameAs": [
    "https://www.linkedin.com/in/jordantwells/",
    "https://github.com/jordantwells42"
  ],
  "jobTitle": "Student",
  "worksFor": {
    "@type": "Organization",
    "name": "University of Texas at Austin"
  }  
}
`}</Script>
<Script strategy="afterInteractive" async src="https://www.googletagmanager.com/gtag/js?id=G-KDWPV496DM"></Script>
<Script strategy="afterInteractive" id='google'>
  {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-KDWPV496DM');`}
</Script>
      <div
        style={{ scrollBehavior: 'smooth' }}
        className='bg-slate-900 w-full overflow-x-hidden flex flex-col items-center'
      >
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
