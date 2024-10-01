import React from 'react'
import Hero from './Hero'

const CardWallet = () => {
  return (
        <div className="p2 h-screen w-[62%] flex flex-col items-center">
            <div className='flex h-[20%] py-5 justify-between w-[90%]'>
                <div>
                    <h4 className='text-zinc-300 text-3xl font-black'>Welcome,</h4>
                    <h2 className='text-center font-semibold text-2xl text-white'>Raj</h2>
                </div>
                <div className='relative flex h-fit w-[40%] gap-2 items-center'>
                    <input className='bg-[#223243] w-full border text-white font-light text-[1em] shadow-[-5px_-5px_15px_rgba(255,255,255,0.1),5px_5px_15px_rgba(0,0,0,0.35)] pl-12 pr-2.5 py-3 rounded-[25px] border-[none] border-solid border-[rgba(0,0,0,0.1)]' type="text" name="" id="" />
                    <i className="absolute w-[25px] text-[#00dfc4] pr-2 px-0 py-0.5 border-r-[#00dfc4] border-r border-solid left-4 top-[15px] fa-solid fa-magnifying-glass" />
                    <i className="fa-regular fa-bell w-[25px] text-[#00dfc4] fa-solid fa-lock"></i>
                </div>
            </div>

            <Hero />
        </div> 
  )
}

export default CardWallet