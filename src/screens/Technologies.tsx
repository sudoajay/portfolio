import React, { useEffect, useRef } from 'react'
import Data from '../json/landingPage.json'
import { AppDetails } from '../types/types'
import gsap from 'gsap'

const Technologies: React.FC = () => {
  const appDetails: AppDetails = Data as AppDetails

  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    sass,
    vscode,
    git,
    github,
    npm,
    postman,
    figma
  } = appDetails.techStackDetails

  const techStackRef = useRef<HTMLDivElement>(null)
  const toolsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
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
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
      </section>
      <section
        ref={techStackRef}
        className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 animate-section mt-2 "
      >
        <img src={html} title="html" alt="HTML" />
        <img src={css} title="CSS" alt="CSS" />
        <img src={js} title="JavaScript" alt="JavaScript" />
        <img src={react} title="React" alt="React" />
        <img src={redux} title="Redux" alt="Redux" />
        <img src={tailwind} title="Tailwind CSS" alt="Tailwind CSS" />
        <img src={bootstrap} title="Bootstrap" alt="Bootstrap" />
        <img src={sass} title="SASS" alt="SASS" />
      </section>
      <section ref={toolsRef} className="animate-section">
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section
        ref={toolsRef}
        className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 animate-section"
      >
        <img src={vscode} title="Visual Studio Code" alt="Visual Studio Code" />
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
