import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { lazy } from 'react'

// hoc
import withLazyComponent from '../hoc/withLazyComponent'

// components
import LayoutDefault from '../components/layout/LayoutDefault'

// get screens

const Home = withLazyComponent(lazy(() => import('../screens/Home')))
const About = withLazyComponent(lazy(() => import('../screens/About')))
const Technologies = withLazyComponent(lazy(() => import('../screens/Technologies')))
const Projects = withLazyComponent(lazy(() => import('../screens/Project')))
const Contact = withLazyComponent(lazy(() => import('../screens/Contact')))
const NotFoundPage = withLazyComponent(lazy(() => import('../screens/NotFoundPage')))

const PublicRoutes = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <LayoutDefault>
            <Home />
          </LayoutDefault>
        }
      />
      <Route
        path="/about"
        element={
          <LayoutDefault>
            <About />
          </LayoutDefault>
        }
      />
      <Route
        path="/technologies"
        element={
          <LayoutDefault>
            <Technologies />
          </LayoutDefault>
        }
      />
      <Route
        path="/projects"
        element={
          <LayoutDefault>
            <Projects />
          </LayoutDefault>
        }
      />
      <Route
        path="/contact"
        element={
          <LayoutDefault>
            <Contact />
          </LayoutDefault>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
)

export default PublicRoutes
