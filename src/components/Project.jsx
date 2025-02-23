import React from 'react'

function Project() {
  return (
    <div className='flex flex-col justify-center items-center text-neutral-300'>

      <div className='lg:mx-[500px] space-y-5'>
        <h1>{"<projects>"}</h1>

        {/* Project 1: MathAI */}
        <div className="flex items-center gap-5">
          <img 
            src='src/asserts/img2.png' 
            className='h-[60px] w-[90px] rounded-md border border-gray-100'
            alt='MathAI'
          />
          <div>
            <h2 className='text-lg'>MathAI</h2>
            <p className='text-neutral-500 text-sm'>
              An AI-powered tool that generates math solutions from text or images.
            </p>
            <p className='text-xs text-neutral-400'>Tech Used: React, TailwindCSS, Gemini API</p>
          </div>
        </div>

        {/* Project 2: Eclipse */}
        <div className="flex items-center gap-5">
          <img 
            src='src/asserts/img5.png' 
            className='h-[60px] w-[120px] rounded-md border border-gray-300'
            alt='Eclipse'
          />
          <div>
            <h2 className='text-lg'>Eclipse</h2>
            <p className='text-neutral-500 text-sm'>
              A code conversion tool that translates between programming languages.
            </p>
            <p className='text-xs text-neutral-400'>Tech Used: Python, AI Models</p>
          </div>
        </div>

        {/* Project 3: Weaponry Detection System */}
        <div className="flex items-center gap-5">
          <img 
            src='src/asserts/img1.png' 
            className='h-[60px] w-[100px] rounded-md border border-gray-300'
            alt='Weaponry Detection System'
          />
          <div>
            <h2 className='text-lg'>Weaponry Detection System</h2>
            <p className='text-neutral-500 text-sm'>
              A real-time system that detects weapons using computer vision.
            </p>
            <p className='text-xs text-neutral-400'>Tech Used: Python, Tkinter, YOLO</p>
          </div>
        </div>

        {/* Project 4: Climate Change Visualizer */}
        <div className="flex items-center gap-5">
          <img 
            src='src/asserts/img4.png' 
            className='h-[60px] w-[90px] rounded-md border border-gray-300'
            alt='Climate Change Visualizer'
          />
          <div>
            <h2 className='text-lg'>Climate Change Visualizer</h2>
            <p className='text-neutral-500 text-sm'>
              A data visualization tool that presents climate change trends.
            </p>
            <p className='text-xs text-neutral-400'>Tech Used: React, D3.js, API Data</p>
          </div>
        </div>

        {/* Project 5: Sketch to Solution AI */}
        <div className="flex items-center gap-5">
          <img 
            src='src/asserts/img3.png' 
            className='h-[60px] w-auto rounded-md border border-gray-300'
            alt='Sketch to Solution AI'
          />
          <div>
            <h2 className='text-lg'>Sketch to Solution AI</h2>
            <p className='text-neutral-500 text-sm'>
              Converts sketches into structured solutions, similar to Apple Notes.
            </p>
            <p className='text-xs text-neutral-400'>Tech Used: AI, Computer Vision, React</p>
          </div>
        </div>

        <h1>{"</projects>"}</h1>
      </div>
    </div>
  )
}

export default Project
