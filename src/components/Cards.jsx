import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

function Cards() {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-2xl rounded-3xl flex flex-col p-4 my-4 hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="single" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium mt-8'>
                    <p className='py-2 border-b mx-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2gb</p>
                </div>
                    <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3'>
                    Start Trial
                    </button>
            </div>

            <div className='w-full shadow-2xl rounded-3xl flex flex-col p-4 my-8 md:my-0 hover:scale-105 duration-300 bg-gray-100'>
                <img className='w-20 mx-auto mt-[-3rem]' src={Double} alt="single" />
                <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
                <p className='text-center text-4xl font-bold'>$199</p>
                <div className='text-center font-medium mt-8'>
                    <p className='py-2 border-b mx-8'>1 TB Storage</p>
                    <p className='py-2 border-b mx-8'>3 Users Allowed</p>
                    <p className='py-2 border-b mx-8'>Send up to 10gb</p>
                </div>
                    <button className='bg-black text-[#00df9a] rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3'>
                    Start Trial
                    </button>
            </div>

            <div className='w-full shadow-2xl rounded-3xl flex flex-col p-4 my-4 hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="single" />
                <h2 className='text-2xl font-bold text-center py-8'>Triple User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium mt-8'>
                    <p className='py-2 border-b mx-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2gb</p>
                </div>
                    <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3'>
                    Start Trial
                    </button>
            </div>
        </div>
    </div>
  )
}

export default Cards