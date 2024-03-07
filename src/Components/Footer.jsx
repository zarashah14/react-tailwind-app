import React from 'react'
import Vector1 from '../assets/Vector1'
import Vector2 from '../assets/Vector2'
import Vector3 from '../assets/Vector3'
import Vector4 from '../assets/Vector4'
function Footer() {
  return (
  
    <div className='p-20 text-center bg-gray-900'>
         <h1 className='text-2xl text-white my-3'>Jhonshah@gmail.com</h1>
         <h1 className='text-2xl text-white'>+971456890</h1>
         <div className='my-10'>
             <ul className='list-none flex flex-row align-middle justify-center gap-2 '>
                <li className=' text-white'><Vector1/></li>
                <li className=' text-white'><Vector2/></li>
                <li className=' text-white'><Vector3/></li>
                <li className=' text-white'><Vector4/></li>
             </ul>
             <button
              type="button"
              class="bg-gradient-to-r px-4 from-green-400 to-blue-500 transition hover:-translate-y-2  hover:from-pink-500 hover:to-yellow-500 py-4 rounded-xl mt-6 w-40"
             >  
            Get in Touch
             </button>
         </div>
    </div>
   
  )
}

export default Footer
