import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import Data from '../json/landingPage.json'
import { AppDetails } from '../types/types'

const Home: React.FC = () => {
  // TypeScript will infer the type from the JSON import
  const appDetails: AppDetails = Data as AppDetails

  const { name, tagline, img } = appDetails.personalDetails
  const elementsRef = useRef<HTMLHeadingElement[]>([])
  const imageRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const tl = gsap.timeline()
    tl.from(elementsRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      stagger: 0.2
    }).from(
      imageRef.current,
      {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: 'elastic.out(1, 0.3)'
      },
      '-=0.5'
    )
  }, [])

  const addToRefs = (el: HTMLHeadingElement) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el)
    }
  }

  return (
    <main className="container mx-auto max-width section flex flex-col md:flex-row justify-between items-center py-10 px-5 md:px-0">
      <div className="flex-1 mb-10 md:mb-0 md:mr-10">
        <h1
          ref={addToRefs}
          className="text-4xl text-dark-heading dark:text-light-heading md:text-6xl xl:text-7xl font-bold mb-4 leading-tight"
        >
          Hello, I'm <span className="text-gradient">{name}</span>
        </h1>
        <h2
          ref={addToRefs}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl font-semibold mb-4"
        >
          {tagline}
        </h2>
      </div>
      <div className="flex-1">
        <img
          ref={imageRef}
          className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto rounded-full shadow-lg"
          src={img}
          alt={name}
        />
      </div>
    </main>
  )
}

export default Home
