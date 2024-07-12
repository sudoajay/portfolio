import React from 'react'

interface WorkProps {
  position: string
  company: string
  type: string
  duration: string
}

const Work: React.FC<WorkProps> = ({ position, company, type, duration }) => (
  <article className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-1 hover:shadow-lg">
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-lg md:text-xl lg:text-2xl text-dark-heading dark:text-light-heading font-bold">
        {position}
      </h1>
      <div className="bg-green-500 text-white text-xs py-1 px-3 rounded-full uppercase">{type}</div>
    </div>
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center space-x-2">
        <svg
          className="h-4 w-4 text-gray-600 dark:text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <circle cx="10" cy="10" r="5" />
        </svg>

        <p className="text-sm text-gray-700 dark:text-gray-300">{company}</p>
      </div>

      <p className="text-sm text-gray-700 dark:text-gray-300">{duration}</p>
    </div>
  </article>
)

export default Work
