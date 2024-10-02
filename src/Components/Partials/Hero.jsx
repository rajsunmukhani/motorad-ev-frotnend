const Hero = () => {
  return (

    <div className='w-[90%] flex flex-col gap-5 min-h-[65%] border rounded-2xl p-5 shadow-[-5px_-5px_15px_rgba(255,255,255,0.1),5px_5px_15px_rgba(0,0,0,0.35)]'>
        <div className="flex justify-between w-full items-center">
            <h1 className='text-white text-xl'>Details</h1>
            <i className="fa-solid fa-grip text-white border rounded-full p-3"></i>
        </div>

        <div className="bar w-[100%] h-[10vh] bg-zinc-400 overflow-hidden shadow-2xl rounded-xl">
            <div className="status w-[30%] rounded-full h-full bg-[#00dfc4]"></div>
        </div>
        
        <div className="flex flex-col gap-5">
            <h1 className='text-white text-xl'>Cards <span className="text-sm bg-zinc-800 p-1 rounded-md">2</span> </h1>
            <div className="cards flex gap-5 px-5 flex-wrap">
                <div className="card flex justify-center items-center flex-col cursor-pointer bg-red-200 rounded-lg h-36 w-56">

                </div>
                <div className="card flex justify-center items-center flex-col cursor-pointer bg-red-200 rounded-lg h-36 w-56">

                </div>
                <div className="card flex justify-center items-center flex-col cursor-pointer bg-red-200 rounded-lg h-36 w-56">

                </div>
                <div className="card flex justify-center items-center flex-col cursor-pointer bg-red-200 rounded-lg h-36 w-56">

                </div>
                <div className="card flex justify-center items-center flex-col cursor-pointer bg-zinc-600 rounded-lg h-36 w-56">
                    <h3>+</h3>
                    <h3>Add Card</h3>
                </div>
            </div>
            <div className="flex py-5 border items-center text-zinc-400 justify-center gap-10 rounded-lg">
                <div className="flex items-center justify-center gap-3 py-4">
                    <div className="box bg-blue-200 h-8 w-8 rounded-lg"></div>
                    <div className="summ leading-tight">
                        <h5>Total Limit</h5>
                        <h3 className="text-2xl font-black">$ 1234</h3>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                    <div className="box bg-gray-200 h-8 w-8 rounded-lg"></div>
                    <div className="summ leading-tight">
                        <h5>Total Expenditure</h5>
                        <h3 className="text-2xl font-black">$ 1234</h3>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                    <div className="box bg-yellow-200 h-8 w-8 rounded-lg"></div>
                    <div className="summ leading-tight">
                        <h5>Total Balance</h5>
                        <h3 className="text-2xl font-black">$ 1234</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Hero