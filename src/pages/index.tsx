
import About from 'components/About'
import ContactMe from 'components/ContactMe'
import Header from 'components/Header'
import Hero from 'components/Hero'
import Projects from 'components/Projects'
import Skills from 'components/Skills'
import WorkExperience from 'components/WorkExperience'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Experience, PageInfo, Project, Skill, Social } from 'typing'
import { fetchExperience } from 'utils/fetchExperience'
import { fetchPageInfo } from 'utils/fetchPageInfo'
import { fetchProjects } from 'utils/fetchProjects'
import { fetchSkills } from 'utils/fetchSkills'
import { fetchSocials } from 'utils/fetchSocials'

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
        <WorkExperience/>
      </section>

      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills skills={skills}/>
      </section>

      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects/>
      </section>

      {/* Contact Me */}
      <section id='contact' className='snap-start'>
        <ContactMe/>
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo()
  const experiences: Experience[] = await fetchExperience()
  const skills: Skill[] = await fetchSkills()
  const projects: Project[] = await fetchProjects()
  const socials: Social[] = await fetchSocials()

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