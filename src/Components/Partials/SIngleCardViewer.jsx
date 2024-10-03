import React from 'react'
import Logout from './Logout'

const SIngleCardViewer = () => {
  return (
    <div className="p3 h-screen gap-3 w-[30%] items-center flex flex-col border-l border-l-[#888]">
        <Logout />
        <div className='border h-[80%] w-[90%] rounded-xl shadow-[-5px_-5px_15px_rgba(255,255,255,0.1),5px_5px_15px_rgba(0,0,0,0.35)] flex flex-col p-5 gap-5 items-center'>
          <div className='flex justify-between items-center w-full'>
            <h1 className='text-white text-xl'>Details</h1>
            <h1 className='text-white text-xl border rounded-full px-2'>+</h1>
          </div>
          <div className="card flex justify-center items-center flex-col cursor-pointer bg-red-200 rounded-lg h-40 w-80">
            {/* Additional content can go here */}
          </div>
          <div className='w-full text-white border-b pb-5 uppercase'>
            <div>
              <h3>CARD NUMBER</h3>
              <p>1234 5678 9012 3456</p>
            </div>

            <div className='flex items-center justify-between mt-5'>
              <div>
                <h4>Expiry Date</h4>
                <p>08/28</p>
              </div>
              <div className='border-r border-l px-8'>
                <h4>CVV</h4>
                <p>848</p>
              </div>
              <div>
                <h1>Limit</h1>
                <p>$ 64000/-</p>
              </div>
            </div>
          </div>
          <div className='w-full flex flex-col text-white'>
              <h3 className='mb-5'>Card Analysis</h3>
              <div className="bar w-[100%] h-[3vh] bg-zinc-400 overflow-hidden shadow-2xl rounded-xl">
                  <div className="status w-[30%] rounded-full h-full bg-[#00dfc4]"></div>
              </div>
              <div className='flex w-full items-center justify-between'>
                <p>$4000 Spent of $20000</p>
                <p>20%</p>
              </div>
          </div>
          <div className='w-full text-white'>
            Get
            &nbsp;
            <a className='text-[#00dfc4]'>
              Transactions!
            </a>
          </div>
        </div>
      </div>
  )
}

export default SIngleCardViewer