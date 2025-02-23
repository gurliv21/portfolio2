import React from 'react'
import Header from './Header'
import About from './About'
import Project from './Project'
import Skills from './Skills'
import Contact from './Contact'

function Main() {
  return (
    <div className='bg-black text-white relative'>

      

      {/* Header */}
      <Header />

      {/* Sections */}
      <div className="space-y-[60px] pl-[80px]"> 
        <About />
        <Project />
        <Skills />
        <Contact />
      </div>

    </div>
  )
}

export default Main
