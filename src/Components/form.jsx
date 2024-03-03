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

             <div className='bg-gray-300 rounded-sm lg:px-20 lg:py-8 lg:mx-40 lg:mb-20 '>
            <h1 className='text-DS-Black font-source-sans-pro text-3xl font-extrabold md:text-2xl '>Login Here</h1>
            <form className='my-6'>

              <label>Full Name</label>
            <input type="text" placeholder="Name" className='lg:py-2 rounded'/><br></br>

            <label>Email</label>
            <input type="email" placeholder="Email address" className='lg:py-2 my-2 rounded'/><br></br>

            <label>UserName</label>
            <input type="Username"  placeholder="Username" className='lg:py-2 my-2 rounded'/><br></br>
             
            <label>Password</label>
            <input type="password" id="pwd" name="pwd" placeholder="Password" className='lg:py-2 my-2 rounded'/><br></br>
            
           
            <input type="checkbox" id="vehicle1" name="user"/>
            <label for="user">I agree to the terms of user.</label>

            <button
              type="button"
              class="bg-gradient-to-r px-4 from-green-400 to-blue-500 transition hover:-translate-y-2  hover:from-pink-500 hover:to-yellow-500 py-4 rounded my-2 mx-14"
            >
              Login
            </button>  
            </form> 
            </div>
            </div>
       </>
  )
}

export default form
