import React from 'react'

function Skill() {
  return (
    <div className='flex flex-col justify-center items-left text-neutral-300'>

      <div className='lg:mx-[500px] space-y-5'>
        <h1 className='text-left'>{"<skills>"}</h1>

        {/* Skill List */}
        <div className="space-y-5">
          
          {/* Frontend Development */}
          <div>
            <h2 className='text-lg'>Frontend Development</h2>
            <p className='text-sm text-neutral-400'>React, Next.js, TailwindCSS, JavaScript</p>
            <div className="w-full bg-neutral-700 h-2 mt-2 rounded-full">
              <div className="bg-blue-300 h-2 rounded-full w-[90%]"></div>
            </div>
          </div>

          {/* Backend Development */}
          <div>
            <h2 className='text-lg'>Backend Development</h2>
            <p className='text-sm text-neutral-400'>Node.js, Express.js, MongoDB, Firebase</p>
            <div className="w-full bg-neutral-700 h-2 mt-2 rounded-full">
              <div className="bg-green-400 h-2 rounded-full w-[85%]"></div>
            </div>
          </div>

          {/* AI & Computer Vision */}
          <div>
            <h2 className='text-lg'>AI & Computer Vision</h2>
            <p className='text-sm text-neutral-400'>YOLO, TensorFlow, OpenCV, Gemini API</p>
            <div className="w-full bg-neutral-700 h-2 mt-2 rounded-full">
              <div className="bg-yellow-400 h-2 rounded-full w-[80%]"></div>
            </div>
          </div>

          {/* Version Control & Tools */}
          <div>
            <h2 className='text-lg'>Version Control & Tools</h2>
            <p className='text-sm text-neutral-400'>Git, GitHub, Docker, Postman</p>
            <div className="w-full bg-neutral-700 h-2 mt-2 rounded-full">
              <div className="bg-red-500 h-2 rounded-full w-[75%]"></div>
            </div>
          </div>

        </div>

        <h1 className=' '>{"</skills>"}</h1>
      </div>
    </div>
  )
}

export default Skill
