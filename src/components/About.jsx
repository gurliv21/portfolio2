import React from 'react'
import icon from '../asserts/vecteezy_pixel-art-characters-illustration_49049827.jpg'
function About() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex gap-[20px] mb-[50px] '>
      <div className=''>
         <img src={icon} className='h-[90px] w-auto rounded-2xl'/>
      </div>
     <div className='mt-6'>
     <h1 className='text-3xl text-neutral-300'>Gurliv Kaur Bajwa</h1>
     <p className='text-neutral-400'>Frontend Developer</p>
     </div>
      </div>
      <div className='lg:mx-[500px] space-y-5'>
      <h1>{"<about>"}</h1>
      <p className='text-start text-neutral-500 text-sm'>
      Hi, I’m Gurliv!  I’m passionate about technology, web development, and AI. With experience in React, Node.js, and computer vision, I love building innovative solutions that make an impact. Always eager to learn and contribute, I thrive on turning ideas into reality.
      </p>
      <h1>{"</about>"}</h1>
      </div>
    </div>
  )
}

export default About
