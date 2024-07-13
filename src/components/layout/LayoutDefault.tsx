import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

type LayoutDefaultProps = {
  children: React.ReactNode
}

const LayoutDefault = ({ children }: LayoutDefaultProps): JSX.Element => {
  return (
    <section className="bg-white dark:bg-dark-mode ">
      <Header />
      <main>{children}</main>
      <Footer />
    </section>
  )
}

export default LayoutDefault
