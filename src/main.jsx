import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Component/Home'
import About from './Component/About'
import Skills from './Component/Skills'
import Contact from './Component/Contact'
import Projects from './Component/Projects'
import Resume from './Component/Resume'
import LandSurvey from './Component/LandSurvey.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ERPComponent from './Component/ERPComponent.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'skills', element: <Skills /> },
      { path: 'projects', element: <Projects /> },
      { path: 'contact', element: <Contact /> },
      { path: 'resume', element: <Resume /> },
      { path: 'landSurvey', element: <LandSurvey /> },
      { path: 'erpcom', element: <ERPComponent /> },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
