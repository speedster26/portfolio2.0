
import About from 'components/About'
import ContactMe from 'components/ContactMe'
import Header from 'components/Header'
import Hero from 'components/Hero'
import Projects from 'components/Projects'
import Skills from 'components/Skills'
import WorkExperience from 'components/WorkExperience'
import { GetStaticProps } from 'next'
import { groq } from 'next-sanity'
import Head from 'next/head'
import { sanityClient } from '../../sanity'
import { Experience, PageInfo, Project, Skill, Social } from 'typing'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[]
}

export default function Home({ pageInfo, experiences, skills, projects, socials }: Props) {
  return (
    <div className='bg-[rgb(36,36,36)] h-screen text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Harshit&apos;s Portfolio</title>
      </Head>
      {/* Header */}
      <Header socials={socials}/>

      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo}/>
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo}/>
      </section>

      {/* Experience */}
      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences}/>
      </section>

      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills skills={skills}/>
      </section>

      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects projects={projects} />
      </section>

      {/* Contact Me */}
      <section id='contact' className='snap-start'>
        <ContactMe pageInfo={pageInfo}/>
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const query1 = groq`*[_type == "experience"]{
    ...,
    technologies[]->
  }`;
  const query2 = groq`*[_type == "pageInfo"][0]`;
  const query3 = groq`*[_type == "project"]{
    ...,
    technologies[]->
  }`;
  const query4 = groq`*[_type == "skill"]`;
  const query5 = groq`*[_type == "social"]`;
  
  const experiences: Experience[] = await sanityClient.fetch(query1)
  const pageInfo: PageInfo = await sanityClient.fetch(query2)
  const projects: Project[] = await sanityClient.fetch(query3)
  const skills: Skill[] = await sanityClient.fetch(query4)
  const socials: Social[] = await sanityClient.fetch(query5)

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    },
    revalidate: 10
  }
}