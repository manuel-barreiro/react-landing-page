import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter'

function Hero() {
    const [text] = useTypewriter({
        words: ['BTB', 'BTC', 'SASS'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 140
    })

  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen text-center flex flex-col justify-center mx-auto'>
            <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
            <div>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, flexible financing for <span>{text}</span><span className='text-[#00df9a]'><Cursor/></span></p>
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500 px-2'>Monitor your data analytics to increase revenue for BTB, BTC & SAAS platforms.</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto py-3 my-6 text-black border border-slate-300 hover:border-slate-400'>Get started</button>
        </div>
    </div>
  )
}

export default Hero