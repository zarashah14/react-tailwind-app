import React from 'react'

function form() {
  return (
       <>
            <h1>WELLCOME TO BRANKO</h1>
            <form className='my-6'>
            <input type="tel" id="phone" name="phone" placeholder="Username" className='py-2'/><br></br>
            <input type="tel" id="phone" name="phone" placeholder="Password" className='py-2 my-2'/><br></br>
            <button
              type="button"
              class="bg-gradient-to-r px-4 from-green-400 to-blue-500 transition hover:-translate-y-2  hover:from-pink-500 hover:to-yellow-500 py-4 rounded my-2"
            >
              Login
            </button>
            </form>
   
       </>
  )
}

export default form
