import React from 'react'
import Laptop from '../assets/laptop.jpg'

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="laptop" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste et ea accusamus harum blanditiis itaque voluptas non tempora obcaecati eum id iure, eaque nemo molestias mollitia libero cupiditate repudiandae porro?</p>
                <button className='bg-black w-[200px] rounded-md font-medium mx-auto md:mx-0 py-3 my-6 text-[#00df9a] border border-slate-300 hover:border-slate-400'>Get started</button>
            </div>
            
        </div>

    </div>
  )
}

export default Analytics