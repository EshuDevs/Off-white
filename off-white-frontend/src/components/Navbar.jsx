import  Logo  from '../assets/logo.png'
import { useState } from 'react'



function Navbar(props) {

  const { open, setOpen } = props

  return (
    <div className='bg-background'>
      <nav className='justify-between w-full flex bg-transparent p-5'>
        <div>
            <img src={Logo} className=' w-1/4'/>
        </div>
        <ul className='list-none align-middle flex gap-5 items-center text-brown font-kanit font-bold text-xl w-auto'>
            <li className='relative'>
                <input type='text' placeholder='Search' className='px-2 w-[12rem] md:w-auto rounded-2xl'/>
                <button className="material-symbols-outlined absolute top-0.5 right-2">search</button>
            </li>
            <li>
            <span className="material-symbols-outlined flex text-3xl">favorite</span>
            </li>
            <li>
            <button onClick={() => setOpen(true)} className="material-symbols-outlined flex text-3xl cursor-pointer">shopping_bag</button>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar