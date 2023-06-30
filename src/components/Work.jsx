import React from 'react'
import Roamers from '../assets/roamers.png'
import Portfolio from '../assets/portfolio-img.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>

      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
          <p className='py-6 '>// Checkout some of my recent work</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* Grid Item */}
          <div style={{backgroundImage: `url(${Roamers})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl fond-bold text-white tracking-wider'>
                AI Travel Planner
              </span>
              <div className='pt-8 text-center'>
                <a href="https://www.roamersroute.com/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/maxkaiser11">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${Portfolio})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl fond-bold text-white tracking-wider text-center'>
                My Portfolio
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/maxkaiser11">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Work
