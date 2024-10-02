import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const navigate = useNavigate();
    const logoutHandler = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }
    

  return (
    <div className='w-[90%] h-[15%] flex justify-end items-center'>
          <button onClick={logoutHandler} className='text-red-500 hover:scale-105 bg-gray-700 shadow-xl border w-fit h-fit border-zinc-600 py-2 px-5 rounded-lg shadow-[5px_10px_15px_rgba(255,255,255,0.1),5px_5px_15px_rgba(0,0,0,0.35)]'>Logout ?</button>
    </div>
  )
}

export default Logout