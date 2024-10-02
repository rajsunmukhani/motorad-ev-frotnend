const Nav = ({avatar}) => {
  return (
    <div className="p1 h-screen w-[8%] border-r border-r-[#888] py-5 flex flex-col justify-between items-center">
        <div className='bg-red-500 h-16 w-16 overflow-hidden rounded-full'>
            <img className='object-cover object-center h-full w-full' src={avatar} alt="" />
        </div>

        <div className='flex flex-col gap-8'>
            <i className="fa-solid fa-house text-2xl text-[#00dfc4]"></i>
            <i className="fa-solid fa-user text-2xl text-[#00dfc4]"></i>
            <i className="fa-solid fa-money-bill text-2xl text-[#00dfc4]"></i>
            <i className="fa-solid fa-gear text-2xl text-[#00dfc4]"></i>
        </div>
        <div className='flex flex-col gap-5'>
            <i className="fa-solid fa-question text-2xl text-[#00dfc4]"></i>
            <i className="fa-solid fa-phone text-2xl text-[#00dfc4]"></i>
        </div>
    </div> 


  )
}

export default Nav