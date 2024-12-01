import React, { useRef } from 'react'
import Data from '../json/landingPage.json'
import { AppDetails } from '../types/types'
import gsap from 'gsap'
import useSingleEffect from '../components/useSingleEffect'

const Technologies: React.FC = () => {
  const appDetails: AppDetails = Data as AppDetails

  const {
    android,
    nextjs,
    spring_boot,
    C_Sharp,
    python,
    django,
    VB_NET,
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    sass,
    vscode,
    IntelliJ_IDEA,
    android_studio,
    pycharm,
    sublime,
    ui_path,
    unity,
    git,
    github,
    npm,
    postman,
    figma
  } = appDetails.techStackDetails

  const techStackRef = useRef<HTMLDivElement>(null)
  const toolsRef = useRef<HTMLDivElement>(null)

  useSingleEffect(() => {
    const tl = gsap.timeline()
    if (techStackRef.current && toolsRef.current) {
      tl.from(techStackRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2
      }).from(toolsRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.2
      })
    }
  }, [])

  return (
    <main className="container mx-auto max-w-screen-lg pt-10 pb-20">
      <section ref={techStackRef} className="animate-section">
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold ml-10">
          Tech Stack
        </h1>
      </section>
      <section
        ref={techStackRef}
        className="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-7 items-center gap-10 animate-section mt-2 mx-10 "
      >
        <img src={nextjs} title="Nextjs" alt="Nextjs" />
        <img src={react} title="React" alt="React" />
        <img src={redux} title="Redux" alt="Redux" />
        <img src={spring_boot} title="Spring Boot" alt="Spring Boot" />
        <img src={C_Sharp} title="C Sharp" alt="C Sharp" />
        <img src={python} title="Python" alt="Python" />
        <img src={django} title="Django" alt="Django" />
        <img src={android} title="Android" alt="Android" />
        <img src={VB_NET} title="VB_NET" alt="VB_NET" />
        <img src={html} title="html" alt="HTML" />
        <img src={css} title="CSS" alt="CSS" />
        <img src={js} title="JavaScript" alt="JavaScript" />
        <img src={tailwind} title="Tailwind CSS" alt="Tailwind CSS" />
        <img src={bootstrap} title="Bootstrap" alt="Bootstrap" />
        <img src={sass} title="SASS" alt="SASS" />
      </section>
      <section ref={toolsRef} className="animate-section">
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold ml-10">
          Tools
        </h1>
      </section>
      <section
        ref={toolsRef}
        className="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-7 items-center gap-10 animate-section mx-10"
      >
        <img src={vscode} title="Visual Studio Code" alt="Visual Studio Code" />
        <img src={android_studio} title="Android Studio" alt="Android Studio" />
        <img src={IntelliJ_IDEA} title="IntelliJ IDEA" alt="IntelliJ IDEA" />
        <img src={pycharm} title="PyCharm" alt="PyCharm" />
        <img src={sublime} title="Sublime" alt="Sublime" />
        <img src={unity} title="Unity" alt="Unity" />
        <img src={ui_path} title="UI Path" alt="UI Path" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        <img src={figma} title="Figma" alt="Figma" />
        <img src={npm} title="NPM" alt="NPM" />
        <img src={postman} title="Postman" alt="Postman" />
      </section>
    </main>
  )
}

export default Technologies
