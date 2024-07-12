import React from 'react'
import Work from '../components/Work'
import Data from '../json/landingPage.json'
import { AppDetails } from '../types/types'

const About: React.FC = () => {
  // TypeScript will infer the type from the JSON import
  const appDetails: AppDetails = Data as AppDetails
  return (
    <main className="container mx-auto max-w-screen-lg px-4 pt-10 pb-20">
      {/* About Me Section */}
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-dark-heading dark:text-light-heading font-bold mb-6">
          About Me
        </h1>
        <p className="text-lg text-content leading-relaxed">{appDetails.personalDetails.about}</p>
      </section>

      {/* Education Section */}
      <section className="mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-dark-heading dark:text-light-heading font-bold mb-6">
          Education
        </h2>
        <div className="grid md:grid-rows-2 gap-6">
          {appDetails.eduDetails.map(({ Position, Company, Type, Duration }, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-1 hover:shadow-lg"
            >
              <Work position={Position} company={Company} type={Type} duration={Duration} />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default About
