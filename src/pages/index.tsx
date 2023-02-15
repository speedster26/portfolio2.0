
import About from 'components/About'
import Header from 'components/Header'
import Hero from 'components/Hero'
import WorkExperience from 'components/WorkExperience'
import Head from 'next/head'


export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] h-screen text-white snap-y snap-mandatory overflow-scroll overflow-x-hidden z-0 scroll-smooth'>
      <Head>
        <title>Harshit&apos;s Portfolio</title>
      </Head>
      {/* Header */}
      <Header/>

      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero/>
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About/>
      </section>

      {/* Experience */}
      <section id='experience' className='snap-center'>
        <WorkExperience/>
      </section>

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  )
}
