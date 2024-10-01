const Nav = () => {
  return (
    <div className="p1 h-screen w-[8%] border-r border-r-[#888] py-5 flex flex-col justify-between items-center">
        <div className='bg-red-500 h-16 w-16 overflow-hidden rounded-full'>
            <img className='object-cover object-center h-full w-full' src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>

        <div className='flex flex-col gap-8'>
            <i class="fa-solid fa-house text-2xl text-[#00dfc4]"></i>
            <i class="fa-solid fa-user text-2xl text-[#00dfc4]"></i>
            <i class="fa-solid fa-money-bill text-2xl text-[#00dfc4]"></i>
            <i class="fa-solid fa-gear text-2xl text-[#00dfc4]"></i>
        </div>
        <div className='flex flex-col gap-5'>
            <i class="fa-solid fa-question text-2xl text-[#00dfc4]"></i>
            <i class="fa-solid fa-phone text-2xl text-[#00dfc4]"></i>
        </div>
    </div> 


  )
}

export default Nav