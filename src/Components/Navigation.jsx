import React from 'react'
import Logo from "../assets/Logo";
import Vector1 from '../assets/Vector1'
import Vector2 from '../assets/Vector2'
import Vector3 from '../assets/Vector3'
import Vector4 from '../assets/Vector4'
function Navigation() {
  return (
    <div className='bg-gray-900'>
      <nav>
        <div className='flex justify-between p-6'>
             <div>
             <ul className='list-none flex flex-row gap-5 '>
                <li className=' text-white'>Home</li>
                <li className=' text-white'>About</li>
                <li className='  text-white'>Services</li>
                <li className=' text-white'>Register</li>
                <li className=' text-white'>Contact us</li>
             </ul>
             </div>


             <div>
                 <Logo />
             </div>


             <div>
             <ul className='list-none flex flex-row gap-5 '>
                <li className=' text-white'><Vector1/></li>
                <li className=' text-white'><Vector2/></li>
                <li className=' text-white'><Vector3/></li>
                <li className=' text-white'><Vector4/></li>
             </ul>
             </div>

        </div>
      </nav>
    </div>
  )
}

export default Navigation
