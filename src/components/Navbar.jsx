import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
    <div className='mycontainer flex justify-between items-center px-4 py-5 h-14'>

    <div className='logo font-bold text-white text-2xl'>
    <span className='text-green-500'>&lt;</span>
    Pass
    <span className='text-green-500'>Op/&gt;</span>

    </div>
      {/* <ul>
        <li className='flex gap-4'>
            <a className='font-bold' href="/">Home</a>
            <a className='font-bold' href="#">About</a>
            <a className='font-bold' href="#">Contact</a>
        </li>
      </ul> */}
      <button className='bg-green-500 text-white rounded-full flex justifly-between items-center'>
        <img className='invert w-10 p-1 rounded-full ring-white ' src="icons/github.png" alt="github logo" />
        <span className='font-bold px-2'>Github</span>
      </button>
      </div>
    </nav>
  )
}

export default Navbar
