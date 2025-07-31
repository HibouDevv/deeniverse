import React from 'react'
import Home from './Components/Layout/Home'
import AboutUs from './Components/About us/AboutUs'
import ContactUs from './Components/Contact Us/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Courses from './Components/Our Courses/Courses'
import CourseDetail from './Components/Our Courses/CourseDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about-us',
    element: <AboutUs />,
  },
  {
    path: '/courses',
    element: <Courses />,
  },
  {
    path: '/contact-us',
    element: <ContactUs />,
  },
  {
    path: '/courses/:id',
    element: <CourseDetail />,
},
])

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
