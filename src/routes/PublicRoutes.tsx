import { Route, Routes, HashRouter } from 'react-router-dom'

// components
import LayoutDefault from '../components/layout/LayoutDefault'

// get screens
import Home from '../screens/Home'
import About from '../screens/About'
import Technologies from '../screens/Technologies'
import Projects from '../screens/Project'
import Contact from '../screens/Contact'

const PublicRoutes = (): JSX.Element => (
  <HashRouter>
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
    </Routes>
  </HashRouter>
)

export default PublicRoutes
