import React from 'react'
import Girl from '../assets/girl.png'
function form() {
  return (
       <>
         <div className='grid md:grid-cols-2 sm:grid-cols-1 mx-10 '>
          <div className='lg:mx-10'>
            <h1  className='text-DS-Black font-source-sans-pro text-3xl font-extrabold'>WELLCOME TO BRANKO</h1>
            <p className=' font-source-sans-pro'>Lorem ipsum, dolor sit amet consectetur
             adipisicing elit. Sunt, ullam odio eveniet
             delectus beatae maxime ipsum voluptatum et
              haru soluta at quo tempore! Iste quidem 
              iusto,magnam inventore nisi ab.</p>
              <img src={Girl} className="" alt="Description of your image" />
              </div>

             <div className='bg-gray-800 rounded-xl lg:px-20 lg:py-8 lg:mx-28 lg:my-20'>
            <h1 className='text-white text-3xl font-bold md:text-2xl text-center p-4'>Register</h1>
            <form className='flex flex-col justify-center items-center'>

            <label className='text-white'>Full Name</label>
            <input type="text" placeholder="Name" className='rounded py-2'/><br/>

            <label className='text-white'>Email</label>
            <input type="email" placeholder="Email address" className='rounded py-2'/><br/>

            <label className='text-white'>UserName</label>
            <input type="Username"  placeholder="Username" className='rounded py-2'/><br/>
             
            <label className='text-white'>Password</label>
            <input type="password" id="pwd" name="pwd" placeholder="Password" className='rounded py-2'/><br/>
            
           
            <input type="checkbox" id="vehicle1" name="user" className=''/>
            <label for="user" className='text-white'>I agree to the terms of user.</label>

            <button
              type="button"
              class="bg-gradient-to-r px-6  from-green-400 to-blue-500 transition hover:-translate-y-2  hover:from-pink-500 hover:to-yellow-500 py-4 rounded-xl my-2 mx-14"
            >
              Register
            </button>  
            </form> 
            </div>
            </div>
       </>
  )
}

export default form
