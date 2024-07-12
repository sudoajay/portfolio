import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="container mx-auto py-2 fixed bottom-0 left-0 right-0">
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
        Built and designed by{' '}
        <a
          className="font-medium"
          href="https://pavanmg.in"
          target="_blank"
          rel="noreferrer noopener"
        >
          Ajay Singh
        </a>{' '}
        with
        <span className="text-gradient font-medium"> ❤️ </span>
        and dedication.
      </p>
    </footer>
  )
}

export default Footer
