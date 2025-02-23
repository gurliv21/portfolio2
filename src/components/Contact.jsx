import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

function Contact() {
  return (
    <div className='flex flex-col justify-center  text-neutral-300 mb-[60px]'>

      <div className='mx-[500px] space-y-5'>
        <h1 className=' '>{"<contact>"}</h1>

        {/* Contact Links */}
        <div className="space-y-4 ">
          
          {/* GitHub */}
          <div className="flex  gap-3 ">
            <FaGithub className="text-2xl text-gray-400" />
            <a 
              href="https://github.com/gurliv21" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-blue-500 transition"
            >
              https://github.com/gurliv21
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex gap-3 ">
            <FaLinkedin className="text-2xl text-gray-400" />
            <a 
              href="https://www.linkedin.com/in/gurlivbajwa/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-blue-500 transition"
            >
              https://www.linkedin.com/in/gurlivbajwa/
            </a>
          </div>

          {/* Email */}
          <div className="flex  gap-3 ">
            <FaEnvelope className="text-2xl text-gray-400" />
            <a 
              href="mailto:gurlivbajwa21@gmail.com" 
              className="text-neutral-400 hover:text-blue-500 transition"
            >
              gurlivbajwa21@gmail.com
            </a>
          </div>

        </div>

        <h1 className=' '>{"</contact>"}</h1>
      </div>
    </div>
  )
}

export default Contact
